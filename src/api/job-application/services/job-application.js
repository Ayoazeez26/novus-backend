"use strict";
const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::job-application.job-application",
  ({ strapi }) => ({
    async create(data) {
      try {
        const { jobId, email } = data.data;

        if (!jobId) {
          throw new ApplicationError("Job Id Required");
        }

        // Check if the job exists
        const job = await strapi.entityService.findOne("api::job.job", jobId);

        if (!job) {
          throw new ApplicationError(`Job with id ${jobId} does not exist.`);
        }

        // Check for existing application with the same email for this job
        const existingApplication = await strapi.entityService.findMany(
          "api::job-application.job-application",
          {
            filters: {
              job: jobId,
              email: email,
            },
          }
        );

        if (existingApplication.length > 0) {
          throw new ApplicationError(
            "An application with this email already exists for this job."
          );
        }

        // If no existing application found, proceed with creation
        const result = await super.create(data);
        return result;
      } catch (error) {
        console.error("Error in job application creation:", error);

        if (error instanceof ApplicationError) {
          throw error;
        }

        throw new ApplicationError(
          "An error occurred while processing your application. Please try again later."
        );
      }
    },
  })
);
