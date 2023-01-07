import styled from "styled-components";
import { BsChatTextFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiComputerDesktop } from "react-icons/hi2";
import Link from "next/link";

export default function HelpNow() {
  return (
    <Wrapper>
      <Title>Need help now for you or someone you know?</Title>
      <Warning>
        Call 911 if you or someone you know is in immediate danger or needs
        urgent medical care.
      </Warning>
      <Section>
        <Subtitle>If you are in distress</Subtitle>
        <Resources>
          <Resource>
            <ResourceTitle>Adults</ResourceTitle>
            <Text>
              <BsChatTextFill />
              <Contact>
                Text <Highlight>WELLNESS</Highlight> to 741741
              </Contact>
            </Text>
          </Resource>
          <Resource>
            <ResourceTitle>Youth</ResourceTitle>
            <Text>
              <BsChatTextFill />
              <Contact>
                Text <Highlight>WELLNESS </Highlight>to 741741
              </Contact>
            </Text>
          </Resource>
          <Resource>
            <ResourceTitle>Indigenous peoples (phone)</ResourceTitle>
            <Text>
              <BsFillTelephoneFill />
              <Contact>
                Can also <Highlight>call</Highlight> Hope for Wellness at
                1-855-242-3310
              </Contact>
            </Text>
          </Resource>
          <Resource>
            <ResourceTitle>Indigenous peoples (chat online)</ResourceTitle>
            <Text>
              <HiComputerDesktop />
              <Contact>
                Can also <Highlight>chat online</Highlight> with Hope for
                Wellness through{" "}
                <StyledLink href="https://hopeforwellness.ca">
                  hopeforwellness.ca
                </StyledLink>
              </Contact>
            </Text>
          </Resource>
        </Resources>
      </Section>
      <Section>
        <Subtitle>If someone you care about is in distress</Subtitle>
        <Resources>
          <Resource>
            <ResourceTitle>
              To help you support someone in distress
            </ResourceTitle>
            <Text>
              <BsFillTelephoneFill />
              <Contact>
                <Highlight>Call</Highlight> 1-866-585-0445 to speak with a
                counsellor
              </Contact>
            </Text>
          </Resource>
        </Resources>
        <div>
          Please note that responses or activity on this platform are not being
          actively monitored. If you are in crisis, or worried about harm to
          yourself or others in any way, we urge you to contact immediate
          services.
        </div>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1em;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0.5em 0;
`;

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2efd5;
  height: 3em;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
  border-radius: 1em;
  margin: 1em 5em;
`;

const Section = styled.div`
  margin: 3em 1em 1em 1em;
`;

const Subtitle = styled.h2`
  color: gray;
`;

const Resources = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 1em 0;
`;

const Resource = styled.div`
  width: 40%;
  margin-bottom: 1.5em;
  padding: 1.5em;
  border-radius: 1em;
  box-shadow: 0px 0px 4px -1px rgba(87, 87, 87, 0.62);
`;

const ResourceTitle = styled.h3`
  margin-bottom: 1em;
`;

const Text = styled.div`
  display: flex;
`;

const Contact = styled.p`
  margin-left: 1em;
`;

const Highlight = styled.span`
  color: #0a69b5;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;