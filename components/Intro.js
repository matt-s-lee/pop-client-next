import {
  FiTarget,
  FiTrendingUp,
  FiTool,
  FiBookOpen,
  FiBook,
} from "react-icons/fi";

import styled from "styled-components";

export default function Intro() {
  return (
    <Wrapper>
      <Row>
        <h2>
          Find resources and programs to help you manage your chronic pain.
          Freely accessible. Your pain is real.
        </h2>
      </Row>
      <Row>
        <Video></Video>

        <List>
          <ListItem>
            <FiTarget
              style={{
                marginRight: "1em",
              }}
            />
            Start with a self assessment
          </ListItem>
          <ListItem>
            <FiTrendingUp
              style={{
                marginRight: "1em",
              }}
            />
            Track your progess over time
          </ListItem>
          <ListItem>
            <FiTool
              style={{
                marginRight: "1em",
              }}
            />
            Access evidence based apps and tools
          </ListItem>
          <ListItem>
            <FiBookOpen
              style={{
                marginRight: "1em",
              }}
            />
            Learn from a curated library of articles and videos
          </ListItem>
        </List>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d7e5f2;
  margin: 3em 6em 3.5em 6em;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
  color: black;
`;

const Row = styled.div`
  display: flex;
  text-align: center;
  width: 80%;
  margin: 1em;
`;
const Video = styled.div`
  width: 50%;
`;

const List = styled.ul`
  list-style-type: none;
  width: 50%;
  text-align: left;
  color: #333333;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;
