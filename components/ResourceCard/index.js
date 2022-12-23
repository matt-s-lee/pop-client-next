import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";

export default function ResourceCard({ title, link, description, imageUrl }) {
  const src = `https:${imageUrl}`;
  return (
    <Wrapper onClick={() => window.open(link)}>
      <Media>
        <Image
          loader={() => src}
          src={src}
          alt={title}
          width={350}
          height={200}
          style={{
            objectFit: "cover",
          }}
        />
      </Media>
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 20em;
  width: 20em;
  color: black;
  background: rgb(60, 58, 180);
  background: linear-gradient(
    140deg,
    rgba(60, 58, 180, 1) 0%,
    rgba(29, 229, 253, 1) 50%,
    rgba(242, 242, 217, 1) 100%
  );
  border-radius: 1em;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Media = styled.div`
  height: 50%;
  overflow: hidden;
`;

const Text = styled.div`
padding: 1em 1em 1em 1.3em;
`

const Title = styled.h3`
font-weight: 600;
margin-bottom: 0.5em;
`

const Description = styled.p`
text-align: left;
font-size: 0.9em;
`
// const Pic = styled(Image)`
//   height: 100%;
//   width: auto;
// `;
