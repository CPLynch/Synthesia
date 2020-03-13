import React from "react";
import styled from "styled-components";

//Components
import Header from "../Components/Header";
import TopStories from "../Components/TopStories";
import LatestStories from "../Components/LatestStories";

export default function NewsHomePage() {
  const Main = styled.div`
    font-family: Verdana;
    background-color: #bb1919;
    min-height: 100vh;
  `;

  const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 88%;
    margin: 0 auto;

    & > *:first-child {
      max-width: 60%;
    }
    & > *:last-child {
      max-width: 30%;
    }
    @media (max-width: 700px) {
      justify-content: center;
      align-items: canter;
      width: 96%;
      & > *:first-child {
        max-width: 100%;
      }
      & > *:last-child {
        display: none;
      }
    }
  `;

  return (
    <Main>
      <Header />
      <Container>
        <TopStories />
        <LatestStories />
      </Container>
    </Main>
  );
}
