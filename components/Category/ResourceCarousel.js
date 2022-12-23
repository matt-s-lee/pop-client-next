import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ResourceCard from "../ResourceCard";

// export default function CarouselContainer({ taggedResources, assetDetails }) {
export default function ResourceCarousel({ resources, tag }) {
  // console.log("carousel", resources);
  const assetDetails = resources.includes.Asset; // Details for all assets, to link to resources

  // Create array of resources with a specific tag
  let matchedResources = [];
  if (tag) {
    matchedResources = resources.items.filter((resource) => {
      return resource.metadata?.tags[0]?.sys?.id === tag;
    });
  }
  // console.log("matched", matchedResources);

  // Breakpoints for Resource Carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {matchedResources.map((match) => {
        if (match.fields.image) {
          return (
            <ResourceCard
              key={match.sys.id}
              title={match.fields.title}
              link={match.fields.link}
              description={
                match?.fields?.descriptionForSmallCard?.content[0]?.content[0]
                  ?.value
              }
              imageUrl={
                assetDetails.find((asset) => {
                  return asset.sys.id === match.fields.image.sys.id;
                }).fields.file.url
              }
            />
          );
        } else {
          return <></>;
        }
      })}
    </Carousel>
  );
}

// tag &&
//   resources.items
//     .filter((resource) => {
//       return resource.metadata?.tags[0]?.sys?.id === tag;
//     })
{
  /* {taggedResources.map((resource) => {})} */
}
{
  /* return ( */
}
{
  /* <ResourceCard
        key={resource.sys.id}
        title={resource.fields.title}
        link={resource.fields.link}
        description={
          resource.fields.descriptionForSmallCard.content[0].content[0]
            .value
        }
        imageUrl={
          assetDetails.find((asset) => {
            return asset.sys.id === resource.fields.image.sys.id;
          }).fields.file.url
        }
      /> */
}
{
  /* ); */
}
{
  /* })} */
}
{
  /* <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard /> */
}

// export async function getStaticProps(context) {
//   // Get all resource cards from Contentful API
//   const res = await fetch(
//     `https://cdn.contentful.com/spaces/web30mio6wbr/environments/master/entries?access_token=epG8RE65i5h7nsDCIsc73qXLrlXl_ssOpwe5-5EVFng&content_type=resourceCard`
//     // `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=resourceCard`
//   );
//   const resources = await res.json();
//   console.log("reosurce", resources);

//   if (!resources) {
//     return {
//       notFound: true,
//     };
//   }

//   // Passed to the CategoryPage component as props
//   return {
//     props: { resources: resources.items },
//   };
// }
