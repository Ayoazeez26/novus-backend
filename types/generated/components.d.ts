import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkExperienceWorkExperience extends Schema.Component {
  collectionName: 'components_work_experience_work_experiences';
  info: {
    displayName: 'work experience';
  };
  attributes: {
    jobTitle: Attribute.String;
    employmentStartDate: Attribute.String;
    employmentEndDate: Attribute.String;
    responsibilitiesAndAchievements: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'work-experience.work-experience': WorkExperienceWorkExperience;
    }
  }
}
