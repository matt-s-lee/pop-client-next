import styled from "styled-components";

export default function Divider() {
  return <Line />;
}

const Line = styled.div`
  height: 1px;
  border: 1px solid darkgrey;
  margin: 0 20vw;
`;
