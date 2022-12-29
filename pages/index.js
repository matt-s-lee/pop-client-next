import { useContext, useEffect } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { FilterContext } from "../context/FilterContext";
import { fetchHomeData } from "../lib/api";

import styled from "styled-components";
import styles from "../styles/Home.module.css";

import Head from "next/head";

import Filter from "../components/Filter";
import HeroCarousel from "../components/Hero/index";
import Category from "../components/Category";
import Calendars from "../components/Calendars";
import Trending from "../components/Trending/index";

export default function Home({
  categories,
  resources,
  supportTypes,
  hero,
  searchTerms,
  topics,
  supportTypesNav,
  allTags,
  provincialResources,
}) {
  // Set categories to context on home page load
  const {
    setTopics,
    setSupportTypes,
    setCategories,
    setSupportTypesNav,
    setProvinces,
  } = useContext(CategoriesContext);
  const { setAllTags } = useContext(FilterContext);
  useEffect(() => {
    setTopics(topics);
    setSupportTypes(supportTypes);
    setCategories(categories);
    setSupportTypesNav(supportTypesNav);
    setAllTags(allTags);
    setProvinces(provincialResources);
  }, []);

  return (
    <Wrapper className={styles.container}>
      <Head>
        <title>Power over Pain | Surmonter sa douleur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroCarousel hero={hero} />
        <Trending />
        <Filter resources={resources} searchTerms={searchTerms} />
        <Category resources={resources} categories={categories} />
        <Calendars />
      </main>
    </Wrapper>
  );
}

// Fetches all data via SSG
export async function getStaticProps() {
  return fetchHomeData();
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgb(143, 189, 226);
  background: rgb(182, 216, 244);
  background: linear-gradient(
    337deg,
    rgba(182, 216, 244, 1) 0%,
    rgba(75, 112, 201, 1) 97%
  );
`;
