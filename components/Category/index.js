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
    <>
      <Title>
        <h2>Explore all resources</h2>
      </Title>
      {categories.items.map((category, index) => {
        // console.log(category?.metadata?.tags[0]?.sys?.id);
        return (
          <ClientOnly
            key={category.sys.id}
            id={category?.metadata?.tags[0]?.sys?.id}
          >
            <Wrapper>
              <AccordionStyled defaultExpanded={index === 0 ? true : false}>
                <AccordianSummaryStyled
                  expandIcon={<IoChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Text>
                    <h2>{category.fields.sectionTitle}</h2>
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
            </Wrapper>
          </ClientOnly>
        );
      })}
    </>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Title = styled.div`
  background: white;
  border-radius: 0.7em;
  padding: 1em;
  margin: 3em 10em 0 10em;
  text-align: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 1em 1em;
  padding-bottom: 1em;
`;

const AccordionStyled = styled(Accordion)`
  background-color: transparent;
  border: none;
  box-shadow: none;
`;

const AccordianSummaryStyled = styled(AccordionSummary)`
  display: flex;
  flex-direction: row-reverse;
`;

const AccordionDetailsStyled = styled(AccordionDetails)`
  margin-left: 1em;

  @media only screen and (min-width: 450px) {
    margin-left: 2em;
  }
`;
