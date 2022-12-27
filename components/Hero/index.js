import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import HeroImage from "./HeroImage";

function HeroCarousel({ hero }) {
  const assetDetails = hero.includes.Asset; // Details for all assets, to link to resources
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        // paddingBottom: "30px",
        position: "relative",
      }}
    >
      <Carousel
        responsive={responsive}
        arrows
        draggable
        swipeable
        // showDots={true}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={10000}
        transitionDuration={5}
        // renderDotsOutside
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {hero.items.map((image) => {
          return (
            <HeroImage
              key={image.sys.id}
              title={image.fields.titleForCarouselImage}
              text={image.fields.textForCarouselImage}
              imageUrl={
                assetDetails.find((asset) => {
                  return (
                    asset.sys.id === image.fields.imageForCarouselImage.sys.id
                  );
                }).fields.file.url
              }
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;

const Banner = styled.div`
  height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & > * {
    margin: 150px;
    width: 100%;
  }
`;

const TextBox = styled.div`
  color: white;
  min-width: 300px;
  width: 50%;

  & > * {
    margin: 10px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
`;

const Body = styled.div`
  font-size: 34px;
  font-weight: 700;
`;

const Span = styled.span`
  padding: 5px 15px;
`;
