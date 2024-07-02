"use strict";

const { createCoreService } = require("@strapi/strapi").factories;
const { errors } = require("@strapi/utils");
const axios = require("axios");
const { ApplicationError } = errors;
const { v4: uuidv4 } = require("uuid");

// @ts-ignore
module.exports = createCoreService("api::account.account", ({ strapi }) => ({
  async create(ctx) {
    const productCode = process.env.PRODUCT_CODE;
    const accountOfficerCode = process.env.ACCOUNT_OFFICER_CODE;
    const bankToken = process.env.ONE_BANK_AUTH_TOKEN;
    const bankQuickAccountApi = process.env.BANK_QUICK_ACOUNT_API;

    // Check if email already exists in the database
    const existingAccount = await strapi.entityService.findMany(
      "api::account.account",
      {
        filters: { email: ctx.data.Email },
        limit: 1,
      }
    );

    let transactionTrackingRef;

    if (existingAccount.length > 0) {
      // If account exists, use its existing TransactionTrackingRef
      transactionTrackingRef = existingAccount[0].TransactionTrackingRef;
    } else {
      // If account doesn't exist, generate a new TransactionTrackingRef
      transactionTrackingRef = uuidv4();
      // Save the new account to the database
      await strapi.entityService.create("api::account.account", {
        data: {
          email: ctx.data.Email,
          TransactionTrackingRef: transactionTrackingRef,
        },
      });
    }

    // Construct the full URL
    const url = `${bankQuickAccountApi}?authToken=${bankToken}`;

    // Prepare payload
    const payload = {
      TransactionTrackingRef: transactionTrackingRef,
      AccountOpeningTrackingRef: transactionTrackingRef,
      ProductCode: productCode,
      LastName: ctx.data.LastName,
      OtherNames: ctx.data.OtherNames,
      PhoneNo: ctx.data.PhoneNo,
      Gender: ctx.data.Gender,
      PlaceOfBirth: ctx.data.PlaceOfBirth,
      DateOfBirth: ctx.data.DateOfBirth,
      Address: ctx.data.Address,
      AccountOfficerCode: accountOfficerCode,
      Email: ctx.data.Email,
      NotificationPreference: ctx.data.NotificationPreference,
      TransactionPermission: ctx.data.TransactionPermission,
      AccountTier: ctx.data.AccountTier,
    };

    // Make the POST request
    const response = await axios.post(url, payload);

    if (!response.data.IsSuccessful) {
      throw new ApplicationError(response.data.Message.CreationMessage);
    }

    return { isSuccess: true, message: response.data.Message.CreationMessage };
  },
}));
