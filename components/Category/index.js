import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { IoChevronDown } from "react-icons/io5";

import ResourceCarousel from "./ResourceCarousel";
import ClientOnly from "../ClientOnly";

export default function Category({ categories, resources }) {
  // console.log("Category comp, REsources", resources);
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Explore all resources</h1>
      </TitleWrapper>
      {categories.items.map((category, index) => {
        // console.log(category?.metadata?.tags[0]?.sys?.id);
        return (
          <ClientOnly
            key={category.sys.id}
            id={category?.metadata?.tags[0]?.sys?.id}
          >
            <CategoryWrapper index={index}>
              <AccordionStyled defaultExpanded={index === 0 ? true : false}>
                <AccordianSummaryStyled
                  expandIcon={<IoChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Text>
                    <CategoryTitle>
                      {category.fields.sectionTitle}
                    </CategoryTitle>
                    <p>
                      {
                        category?.fields?.description?.content[0]?.content[0]
                          ?.value
                      }
                    </p>
                  </Text>
                </AccordianSummaryStyled>
                <AccordionDetailsStyled>
                  <ResourceCarousel
                    resources={resources}
                    tag={category?.metadata?.tags[0]?.sys?.id}
                  />
                </AccordionDetailsStyled>
              </AccordionStyled>
            </CategoryWrapper>
          </ClientOnly>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1em 0 4em 0;
`;

export const TitleWrapper = styled.div`
  background: #f2efd5;
  padding: 2em 1em;
  margin: 2em 3em 3em 3em;
  text-align: center;
  border-radius: 0.5em;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
`;

const CategoryWrapper = styled.div`
  margin: 0 3em;
  background: ${(props) => (props.index % 2 === 0 ? "#e0e0e0" : "white")};
  /* border-radius: 1em; */
`;

const AccordionStyled = styled(Accordion)`
  background-color: transparent;
  border: none;
  /* box-shadow: none; */
  /* box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62); */
`;

const AccordianSummaryStyled = styled(AccordionSummary)`
  display: flex;
  flex-direction: row-reverse;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 1em 2em 1em 1em;
  padding-bottom: 1em;
`;

const CategoryTitle = styled.h3`
  /* text-align: center; */
`;

// Resource carousel
const AccordionDetailsStyled = styled(AccordionDetails)`
  margin-left: 1em;

  @media only screen and (min-width: 450px) {
    margin-left: 2em;
  }
`;


