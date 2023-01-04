import styled from "styled-components";

export default function HelpNow() {
  return (
    <Wrapper>
      <h2>Need help now for you or someone you know?</h2>
      <p>
        Call 911 if you or someone you know is in immediate danger or needs
        urgent medical care?
      </p>
      <div>
        <div>Adults</div>
        <div>Youth</div>
        <div>Indigenous peoples (phone)</div>
        <div>Indigenous peoples (chat online)</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1em;
`;
