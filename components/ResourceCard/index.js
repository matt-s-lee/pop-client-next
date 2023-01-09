import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { BookmarksContext } from "../../context/BookmarksContext";

import styled from "styled-components";
import { overpass } from "../../styles/font";

import Image from "next/image";
import ResourceModal from "../ResourceModal";
import { TiStarOutline } from "react-icons/ti";

export default function ResourceCard({
  title,
  link,
  description,
  imageUrl,
  tags,
  pathname,
}) {
  const { allTags } = useContext(FilterContext);
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);

  // To open resource modal
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  // To set bookmarks
  const [bookmarked, setBookmarked] = useState(false);
  const handleFavorite = () => {
    setBookmarked(!bookmarked);
    // TODO add French pathname
    if (bookmarked === false && pathname !== "/bookmarks") {
      setBookmarks([
        { title, link, description, imageUrl, tags },
        ...bookmarks,
      ]);
    } else {
      setBookmarks((bookmarks) =>
        bookmarks.filter((bookmark) => {
          return bookmark.title !== title;
        })
      );
    }
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
        <Row>
          <Star $bookmarked={bookmarked} onClick={handleFavorite} />
        </Row>
        <div>
          <Button
            className={overpass.className}
            onClick={() => window.open(link)}
          >
            Go to resource
          </Button>
          <Button className={overpass.className} onClick={handleClick}>
            Learn more
          </Button>
          <ResourceModal
            open={open}
            handleClick={handleClick}
            tags={tagsToDisplay}
            title={title}
            description={description}
          />
        </div>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 26em;
  min-width: 16em;
  max-width: 20em;
  color: white;
  background: #4372ba;
  border-radius: 1em;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 1em;
  padding-bottom: 1em;
`;

const Media = styled.div`
  height: 45%;
  overflow: hidden;
  background: white;
`;

const Text = styled.div`
  padding: 1em 1em 1em 1.3em;
  height: 35%;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  height: 20%;
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

const Row = styled.div`
  display: flex;
  padding: 0 0 0.2em 0.8em;
`;

const Star = styled(TiStarOutline)`
  font-size: 2em;
  fill: ${(props) => (props.$bookmarked === true ? "yellow" : "lightblue")};
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  margin: 0.2em;
  padding: 0.5em 0.3em;
  border: none;
  border-radius: 0.3em;
  width: 45%;
  font-size: 1em;

  &:hover {
    cursor: pointer;
    background: grey;
    color: white;
  }
`;

const LearnMore = styled(Button)``;
