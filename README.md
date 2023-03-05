This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To begin

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Packages Used

The most important packages/ libraries used are: 

- [React Carousel](https://react-multi-carousel.surge.sh/) - for image carousels
- [React FullCalendar](https://fullcalendar.io/) - for calendar on home page
- [Material UI](https://mui.com/material-ui/getting-started/overview/) - for some of the UI elements (e.g. drawers, navigation menus, accordians).
- [styled components](https://styled-components.com/) - to write CSS in the JavaScript

## CMS

All content, including images and resource data, is kept in the headless CMS [Contentful](https://www.contentful.com/). 

API calls to Contentful are made in indiviudal pages via `getStaticProps`, or in `pages/api`. The `pages/api` directory is mapped to `/api/*`; files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.