import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";

export default function TrendingTag({ topic, hash }) {
  const router = useRouter();
  useEffect(() => {
    const onHashChangeStart = (url) => {};
    router.events.on("hashChangeStart", onHashChangeStart);
    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);

  return (
    // links to category based on id attribute
    <Link href={`/#${hash}`}>
      <Tag>{topic}</Tag>
    </Link>
  );
}

const Tag = styled.div`
  color: white;
  background: #6b5df6;
  border-radius: 1em;
  margin: 0.4em;
  padding: 0.4em 0.7em;
  /* -webkit-box-shadow: 6px 3px 9px -2px rgba(116, 128, 237, 0.91);
  box-shadow: 6px 3px 9px -2px rgba(116, 128, 237, 0.91); */

  &:hover {
    cursor: pointer;
    color: lightgrey;
    background: #6b3acc;
    transition: all 0.2s ease-in-out;
  }
`;
