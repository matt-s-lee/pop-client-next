import styled from "styled-components";

export default function FilterTag({ tag }) {
  return <Tag>{tag}</Tag>;
}

const Tag = styled.div`
  color: white;
  background: #6b5df6;
  border-radius: 1em;
  margin: 0.4em;
  padding: 0.4em 0.7em;
  -webkit-box-shadow: 6px 3px 9px -2px rgba(116, 128, 237, 0.91);
  box-shadow: 6px 3px 9px -2px rgba(116, 128, 237, 0.91);

  &:hover {
    cursor: pointer;
    color: lightgrey;
    background: #6b3acc;
    transition: all 0.2s ease-in-out;
  }
`;
