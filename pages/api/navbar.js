// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const categoriesAll = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA&order=fields.categoryOrderNumber`
  );
  const categoriesNav = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/6mA0dNkT5wRCCpEgOIWvlG?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  const supportTypesAll = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=supportType&order=fields.orderNumber`
  );
  const supportTypesNav = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/IHIT9WDkE1WaV5nnszNLP?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  const provinces = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber`
  );

  const categoriesJson = await categoriesAll.json();
  const categoriesNavJson = await categoriesNav.json();
  const supportTypesAllJson = await supportTypesAll.json();
  const supportTypesNavJson = await supportTypesNav.json();
  const provincesJson = await provinces.json();

  // res.json(body) helper from Next.js
  res.json({
    categoriesJson,
    categoriesNavJson,
    supportTypesAllJson,
    supportTypesNavJson,
    provincesJson,
  });
}

// const data = Promise.all([
//   // Categories (in order)
//   fetch(
//     `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA&order=fields.categoryOrderNumber`
//   ),
//   // Topics for navigation bar
//   fetch(
//     `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/6mA0dNkT5wRCCpEgOIWvlG?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
//   ),
//   // Support types for navigation bar
//   fetch(
//     `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/IHIT9WDkE1WaV5nnszNLP?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
//   ),
//   // All support types
//   fetch(
//     `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=supportType&order=fields.orderNumber`
//   ),
//   // Provincial resource lists
//   fetch(
//     `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber`
//   ),
// ]);
// -----------------------
// 1 - clg = {}; api = {}
// -----------------------
// const data = fetch(
//   `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA&order=fields.categoryOrderNumber`
// );
// data
//   .then((response) => {
//     response.json();
//   })
//   .then((json) => {
//     console.log("json", json);
//     return json;
//   });

// -----------------------------
// 2 - clg = ok; api = {}
// -----------------------------
// const data = await fetch(
//   `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber`
// );
// const response = await data.json();
// res.json(response); // api doesn't resolve without
