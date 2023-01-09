import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FilterContext } from "../../context/FilterContext";
// import ResourceCarousel from "../Category/ResourceCarousel";
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
        <button onClick={handleClick}>
          <span>Load More</span>
        </button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

// // -----------------------------------------------------------------
// // Function to format query terms to be able to match with tag IDs - moved to /hooks
// // -----------------------------------------------------------------
// const titleCase = (str) => {
//   // Remove special characters
//   let splitStr = str.toLowerCase().split(/[\s-]/);
//   // Keep first word lowercase
//   for (let i = 1; i < splitStr.length; i++) {
//     splitStr[i] =
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   return splitStr.join("").replace(/[^a-zA-Z ]/g, "");
// };
// const editTags = (array) => {
//   const editedTags = [];
//   array.forEach((tag) => {
//     editedTags.push(titleCase(tag));
//   });
//   return editedTags;
// };

//  {/* {filteredResources &&
//         filteredResources.map((resource) => {
//           return (
//             <ResourceCard
//               key={resource.sys.id}
//               title={resource.fields.title}
//               link={resource.fields.link}
//               description={
//                 resource.fields?.descriptionForSmallCard?.content[0]
//                   ?.content[0]?.value
//               }
//               imageUrl={
//                 assetDetails.find((asset) => {
//                   return asset.sys.id === resource.fields.image.sys.id;
//                 }).fields.file.url
//               }
//             />
//           );
//         })} */}

// const ResourcesWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;
// target.every((v) => arr.includes(v));
// setFilteredResources([
//   // 3. resource is returned in a shallow array.
//   resources.items.filter((resource) =>
//     // 2. if there is a shallow array for every tag, returns true. if returns true...
//     resource.metadata.tags.every((tag) => {
//       // 1. if the tag includes the (edited) term, returns to a shallow array.
//       termToTag.filter((term) => {
//         tag.sys.id.includes(term);
//       });
//     })
//   ),
// ]);

// setFilteredResources([
//   // 3. resource is returned in a shallow array.
//   resources.items.filter((resource) =>
//     // 2. if there is a shallow array for every tag, returns true. if returns true...
//     resource.metadata.tags.every((tag) => {
//       // 1. if the tag includes the (edited) term, returns to a shallow array.
//       termToTag.filter((term) => {
//         tag.sys.id.includes(term);
//       });
//     })
//   ),
// ]);

// resources.items.forEach((resource) => {
//   if (resource.metadata.tags.find((object) => object.sys.id === tag)) {
//     matchedResources.push(resource);
//   }
// })

// console.log(
//   resourceTags.every((fullTag) => {
//     return termToTag.find((editedTag) => {
//       return fullTag.includes(editedTag);
//     });
//   })
// );
// ******** SAMPLE
// target.every((v) => arr.includes(v));
// ******** WORKS
// console.log(
//   "tag present?",
//   resourceTags.find((fullTag) => {
//     return fullTag.includes("Movement");
//   })
// );

// *********
// if (
//   resourceTags.every((fullTag) => {
//     termToTag.find((editedTag) => {
//       fullTag.includes(editedTag);
//     });
//   })
// ) {
//   setFilteredResources(resource);
// }
