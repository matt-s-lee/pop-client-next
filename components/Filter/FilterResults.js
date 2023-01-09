import { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import { overpass } from "../../styles/font";

import { FilterContext } from "../../context/FilterContext";
import { editTags } from "../../hooks/useFormatTags";

import ResourceCard from "../ResourceCard/index";

export default function FilterResults({ resources }) {
  const { queryTerm, filteredResources, setFilteredResources } =
    useContext(FilterContext);
  const assetDetails = resources.includes.Asset;
  const [firstResults, setFirstResults] = useState(null); // array of products to display upon page mount
  const [resultsLoaded, setResultsLoaded] = useState(0); // counter to keep track of the number of results displayed

  // -----------------------------------------------
  // Filter all resources with formatted query terms
  // -----------------------------------------------
  useEffect(() => {
    let editedTerms = editTags(queryTerm); // imported function
    const filtered = resources.items.filter((resource) => {
      const resourceTags = [];
      resource.metadata.tags.forEach((tag) => {
        resourceTags.push(tag.sys.id);
      });
      return editedTerms.every((tag) => {
        return resourceTags.includes(tag);
      });
    });
    setFirstResults(filtered?.slice(0, 3)); // shows first 3 results
    setFilteredResources(filtered); // sets state, to load on button click
    setResultsLoaded(3);
  }, [queryTerm, setFilteredResources]);

  // Show more results
  const handleClick = () => {
    setResultsLoaded(resultsLoaded + 3);
    setFirstResults(filteredResources.slice(0, resultsLoaded + 3)); // updates counter
  };

  return (
    <Wrapper>
      {filteredResources && firstResults && (
        <ShowingText>
          Showing <Numbers>{firstResults.length}</Numbers> of{" "}
          <Numbers>{filteredResources.length}</Numbers> resources
        </ShowingText>
      )}
      <ResourcesWrapper>
        {firstResults &&
          firstResults.map((resource) => {
            return (
              <ResourceCard
                key={resource.sys.id}
                title={resource.fields.title}
                link={resource.fields.link}
                description={
                  resource?.fields?.descriptionForSmallCard?.content[0]
                    ?.content[0]?.value
                }
                imageUrl={
                  assetDetails.find((asset) => {
                    return asset.sys.id === resource.fields.image.sys.id;
                  }).fields.file.url
                }
                tags={resource.metadata.tags}
              />
            );
          })}
      </ResourcesWrapper>
      {filteredResources && resultsLoaded < filteredResources.length && (
        <Button onClick={handleClick} className={overpass.className}>
          <span>Load More</span>
        </Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5em;
`;

const ShowingText = styled.div`
  margin-bottom: 1em;
`;

const Numbers = styled.span`
  font-weight: 600;
`;

const ResourcesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 1em;
  padding: 0.7em 1em;
  font-size: 1.2em;
  width: 10em;
  background: var(--popRed);
  color: white;
  border: none;
  border-radius: 0.4em;
`;