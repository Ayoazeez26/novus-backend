module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  account: {
    productCode: env("PRODUCT_CODE", ""),
    accountOfficerCode: env("ACCOUNT_OFFICER_CODE", ""),
    bankToken: env("BANK_TOKEN", ""),
    bankQuickAccountApi: env("BANK_QUICK_ACOUNT_API", ""),
  },
  // ...
});
