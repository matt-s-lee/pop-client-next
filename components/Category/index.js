import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { IoChevronDown } from "react-icons/io5";

import ResourceCarousel from "./ResourceCarousel";

export default function Category() {
  return (
    <Wrapper>
      <AccordionStyled>
        <AccordianSummaryStyled
          expandIcon={<IoChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Text>
            <h2>Neuroscience</h2>
            <p>
              Learn about the ways that your brain and pain understand each
              other.
            </p>
          </Text>
        </AccordianSummaryStyled>
        <AccordionDetailsStyled>
          <ResourceCarousel />
        </AccordionDetailsStyled>
      </AccordionStyled>
      {/* second */}
      <AccordionStyled>
        <AccordianSummaryStyled
          expandIcon={<IoChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Text>
            <h2>Podcasts</h2>
            <p>Use podcasts to learn about pain management.</p>
          </Text>
        </AccordianSummaryStyled>
        <AccordionDetailsStyled>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetailsStyled>
      </AccordionStyled>
    </Wrapper>
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
