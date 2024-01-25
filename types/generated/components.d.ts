import type { Schema, Attribute } from '@strapi/strapi';

export interface CommunInfoHoraireCourse extends Schema.Component {
  collectionName: 'components_commun_info_horaire_courses';
  info: {
    displayName: 'infoHoraireCourse';
  };
  attributes: {
    gareDepartEnq: Attribute.String;
    gareArriveEnq: Attribute.String;
    datetimeDepartEnq: Attribute.DateTime;
    datetimeArriveEnq: Attribute.DateTime;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'commun.info-horaire-course': CommunInfoHoraireCourse;
    }
  }
}
