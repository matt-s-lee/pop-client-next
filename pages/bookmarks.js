import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BookmarksContext } from "../context/BookmarksContext";
import ResourceCard from "../components/ResourceCard";
import { Divider } from "@mui/material";
import { overpass } from "../styles/font";
import { BiMailSend, BiTrash } from "react-icons/bi";

export default function Bookmarks() {
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);
  const router = useRouter();
  const handleClick = () => {
    setBookmarks([]);
  };

  return (
    <Wrapper>
      <Text>
        <h1>Your Saved Resources and Tools</h1>
        <p>
          Here you&apos;ll find all the resources you&apos;ve previously saved.
          To bookmark a resource, click the star ★ on the resource tile. To
          browse more resources, click{" "}
          <HomepageLink href="/">here</HomepageLink> to go to the homepage.
        </p>
      </Text>
      {bookmarks.length !== 0 ? (
        <SavedSection>
          <ButtonWrapper>
            <Button className={overpass.className}>
              <BiMailSend />
              <ButtonLink
                href={`mailto:?subject=Check out these resources from the Power over Pain Portal&body=${bookmarks
                  .map((bookmark) => {
                    return `- ${bookmark.title}: ${bookmark.link}%0D%0A`;
                  })
                  .join("")}`}
              >
                Click to share your resources by e-mail
              </ButtonLink>
            </Button>
            <Button onClick={handleClick} className={overpass.className}>
              <BiTrash />
              <ButtonText>Clear resources</ButtonText>
            </Button>
          </ButtonWrapper>
          <Divider />
          <ResourceWrapper>
            {bookmarks.map((bookmark) => {
              return (
                <ResourceCard
                  key={bookmark.title}
                  title={bookmark.title}
                  link={bookmark.link}
                  description={bookmark.description}
                  imageUrl={bookmark.imageUrl}
                  tags={bookmark.tags}
                  pathname={router.pathname}
                />
              );
            })}
          </ResourceWrapper>
        </SavedSection>
      ) : (
        <Paragraph>You currently have no saved resources.</Paragraph>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3em 5em;
`;

const SavedSection = styled.div`
  margin: 2em;
`;

const Text = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1em;
  margin: 0 1em;
  font-size: 1em;
`;

const ButtonLink = styled.a`
  margin-left: 1em;
`;

const ButtonText = styled.span`
  margin-left: 1em;
`;

const Paragraph = styled.p`
  margin: 2em 0;
  font-style: italic;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

const ResourceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2em;
`;

const HomepageLink = styled(Link)`
  color: var(--popBlue);
  font-weight: 600;
`;
