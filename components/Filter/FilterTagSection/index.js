import { useContext } from "react";
import { FilterContext } from "../../../context/FilterContext";
import styled from "styled-components";
import FilterTag from "./FilterTag";

export default function FilterTagSection() {
  const { queryTerm } = useContext(FilterContext);
  return (
    <Wrapper>
      {queryTerm.length > 0 ? (
        queryTerm.map((term) => {
          return <FilterTag key={term} tag={term} />;
        })
      ) : (
        <HelperText>Choose a filter</HelperText>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 3em;
`;

const HelperText = styled.span`
  color: darkgrey;
  font-style: italic;
`;
