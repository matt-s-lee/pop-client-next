import styled from "styled-components";
import Image from "next/image";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";

export default function ResourceCard() {
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
          src="https://images.ctfassets.net/xavhorxgg9l4/23XMFNG8HDYC2tiLha1Teq/51eaf3b29d65b624d7b3bb6f61761db9/Option_2_pexels-lukas-296282.jpg?w=1200&h=795&q=50"
          alt="Surmonter sa douleur logo"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
          }}
        />
      </Media>
    </Wrapper>
  );
}

{
  /* <Image
alt="Next.js logo"
src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
width={1200}
height={400}
style={{
  maxWidth: '100%',
  height: 'auto',
}} */
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
  padding-top: 1em;
  text-align: center;
  position: relative;
`;

const Media = styled.div`
  height: 50%;
  overflow: hidden;
`;

const Pic = styled(Image)`
  height: 100%;
  width: auto;
`;
