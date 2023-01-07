import { useContext } from "react";
import { FilterContext } from "../../../context/FilterContext";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export default function FilterTag({ tag }) {
  const { setQueryTerm } = useContext(FilterContext);
  function deleteTag(ev) {
    ev.stopPropagation();
    setQueryTerm((queryTerm) =>
      queryTerm.filter((term) => {
        return term !== tag;
      })
    );
  }

  return (
    <Tag>
      {tag}
      <IoClose onClick={deleteTag} />
    </Tag>
  );
}

export const Tag = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background: #1d79e2;
  border-radius: 1em;
  margin: 0.4em;
  padding: 0.4em 0.7em;
  z-index: 2;
  min-height: 1.8em;
  /* -webkit-box-shadow: 6px 3px 9px -2px rgba(116, 128, 237, 0.91);
  box-shadow: 6px 3px 9px -2px rgba(116, 128, 237, 0.91); */

  /* &:hover {
    cursor: pointer;
    color: lightgrey;
    background: #6b3acc;
    transition: all 0.2s ease-in-out;
  } */
`;
