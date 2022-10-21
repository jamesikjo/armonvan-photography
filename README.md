## <img src="https://user-images.githubusercontent.com/57969414/173707153-0d9b023c-3892-4842-9658-54ec649e8333.png" alt="ArmonVan Logo" width="325">

**ArmonVan Photography** is an online portfolio showcasing the work of a freelance photographer based in Oakland, California.

[Website](https://armonvanphoto.com)

## Technologies

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [MUI](https://mui.org)
- **CMS**: [Strapi](https://strapi.com)
- **Deployment**: [Vercel](https://vercel.com) & [Heroku](https://heroku.com)

## Features

- Content management powered by [Strapi](https://strapi.io) headless CMS.
- Static pre-rendered pages with [Incremental Static Regeneration](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration) (ISR).
- Images stored on [Cloudinary](https://cloudinary.com).
- Contact form integrated with [Sendgrid](https://sendgrid.com) API.
- Responsive photo gallery with synchronized thumbnail controls and scrolling into view on smaller viewports.

## Project Overview

**frontend/**

- `pages/api/*` - [API Routes](https://nextjs.org/blog/next-9#api-routes) powering contact form submissions.
- `pages/work*` - Static pre-rendered photo gallery pages generated with data fetched from Strapi.
- `pages/*` - All other static pages.
- `src/components/*` - Various components used throughout the site.
- `src/lib/*` - Code for Strapi services.
- `src/utils/*` - Utilities for photo gallery thumnbail scrolling.
- `src/theme.js` - MUI custom component styles for application.
- `public/*` - Static assets.

## Screenshots

<img src="https://user-images.githubusercontent.com/57969414/183147872-21d0d070-7261-44a2-af20-e6e91d564fca.gif" alt="Gallery Preview Video" width="650px">

![App Screenshot](https://res.cloudinary.com/jjo/image/upload/v1655059797/Portfolio/Armon%20Van%20Photography/armonvan-preview_kok1sn.png)