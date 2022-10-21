'use strict';

/**
 * landing router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::landing.landing');
