import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ResourceCard from "../ResourceCard";

// export default function CarouselContainer({ taggedResources, assetDetails }) {
export default function ResourceCarousel() {
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
    //   taggedResources &&
    //   assetDetails && (
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
      {/* {taggedResources.length > 0 &&
            taggedResources.map((resource) => { */}
      {/* return ( */}
      {/* <ResourceCard
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
      /> */}
      {/* ); */}
      {/* })} */}
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
    </Carousel>
  );
  // );
}
