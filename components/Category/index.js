import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { IoChevronDown } from "react-icons/io5";

import ResourceCarousel from "./ResourceCarousel";
import ClientOnly from "../ClientOnly";

export default function Category({ categories, resources }) {
  console.log("Category comp, REsources", resources);
  return (
    <>
      {categories.items.map((category) => {
        return (
          <ClientOnly key={category.sys.id}>
            <Wrapper>
              <AccordionStyled>
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
  margin-bottom: 4em;
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
