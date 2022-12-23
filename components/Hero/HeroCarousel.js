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
        <Banner
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1661846601758-28ce69e3d480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
          }}
        />
        <Banner
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1662673965352-0fc620737c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80")`,
          }}
        />
        <Banner
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1662369981337-81c330d439f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
          }}
        />
        <Banner
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1648334674879-d5f353b518e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80")`,
          }}
        />
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
