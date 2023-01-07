import { useContext, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ResourceModal from "../ResourceModal";
import { FilterContext } from "../../context/FilterContext";

export default function ResourceCard({
  title,
  link,
  description,
  imageUrl,
  tags,
}) {
  const { allTags } = useContext(FilterContext);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  // Convert tag IDs to names to display
  const matchedTags = [];
  const tagsToDisplay = [];
  tags.forEach((tag) => {
    if (!tag.sys.id.includes("category")) {
      matchedTags.push(tag.sys.id);
    }
  });
  matchedTags.forEach((matchedTag) => {
    tagsToDisplay.push(
      allTags?.items?.find((item) => {
        return item.sys.id === matchedTag;
      }).name
    );
  });

  const src = `https:${imageUrl}`;

  return (
    <Wrapper>
      <Media>
        <Image
          loader={() => src}
          src={src}
          alt={title}
          width={350}
          height={200}
          style={{
            objectFit: "cover",
          }}
          unoptimized
        />
      </Media>
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
      <ButtonWrapper>
        <Button onClick={() => window.open(link)}>Go to resource</Button>
        <Button onClick={handleClick}>Learn more</Button>
        <ResourceModal
          open={open}
          handleClick={handleClick}
          tags={tagsToDisplay}
          title={title}
          description={description}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 20em;
  min-width: 15em;
  max-width: 20em;
  color: white;
  background: #4372ba;
  /* background: linear-gradient(
    140deg,
    rgba(60, 58, 180, 1) 0%,
    rgba(29, 229, 253, 1) 50%,
    rgba(242, 242, 217, 1) 100%
  ); */
  border-radius: 1em;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 1em;
  padding-bottom: 1em;
`;

const Media = styled.div`
  height: 50%;
  overflow: hidden;
  background: white;
`;

const Text = styled.div`
  padding: 1em 1em 1em 1.3em;
  height: 40%;
  overflow: hidden;
`;

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  text-align: left;
  font-size: 0.9em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ButtonWrapper = styled.div`
  height: 2em;
`;

const Button = styled.button`
  margin: 0.2em;
  padding: 0.5em 1em;
  background: lightgrey;
  border: none;
  border-radius: 0.3em;

  &:hover {
    cursor: pointer;
    background: grey;
    color: white;
  }
`;

const LearnMore = styled(Button)``;
// const Pic = styled(Image)`
//   height: 100%;
//   width: auto;
// `;
