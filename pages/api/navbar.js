// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// fetch("/api/navbar") called in Layout.js

export default async function handler(req, res) {
  const categoriesAll = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=*&order=fields.categoryOrderNumber`
  );
  // Ordered for categories (for navigation bar) - ID number only
  const categoriesNav = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/6mA0dNkT5wRCCpEgOIWvlG?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  const supportTypesAll = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=supportType&locale=*&order=fields.orderNumber`
  );
  // Order for support types (for navigation bar) - ID number only
  const supportTypesNav = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/IHIT9WDkE1WaV5nnszNLP?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  //
  const provinces = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber&locale=*`
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
