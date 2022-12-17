import styled from "styled-components";
import Image from "next/image";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";

export default function ResourceCard() {
  const src =
    "https://images.ctfassets.net/xavhorxgg9l4/728mGLkxA9JaIBA7jXtqJs/5f1c806cbc4cced446e8b8eda0c3a7f7/299744979_437053958476752_8835657168708456563_n.png";
  return (
    <Wrapper>
      {/* <CardMedia
        component="img"
        height="140"
        image="/public/popFr.png"
        alt="green iguana"
      /> */}
      <Media>
        <Image
          loader={() => src}
          src={src}
          alt="Surmonter sa douleur logo"
          width={350}
          height={350}
          style={{
            objectFit: "cover",
          }}
        />
      </Media>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 20em;
  width: 20em;
  color: white;
  font-weight: 600;
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

const Pic = styled(Image)`
  height: 100%;
  width: auto;
`;
