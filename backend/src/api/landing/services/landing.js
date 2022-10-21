'use strict';

/**
 * landing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::landing.landing');
