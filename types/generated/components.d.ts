import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperienceWorkExperience extends Schema.Component {
  collectionName: 'components_work_experience_work_experiences';
  info: {
    displayName: 'experience';
    description: '';
  };
  attributes: {
    jobTitle: Attribute.String & Attribute.Required;
    employmentStartDate: Attribute.String & Attribute.Required;
    employmentEndDate: Attribute.String & Attribute.Required;
    responsibilitiesAndAchievements: Attribute.Text & Attribute.Required;
  };
}

export interface RefereeReferee extends Schema.Component {
  collectionName: 'components_referee_referees';
  info: {
    displayName: 'Referee';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    relationship: Attribute.String;
    phoneNo: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experience.work-experience': ExperienceWorkExperience;
      'referee.referee': RefereeReferee;
    }
  }
}
