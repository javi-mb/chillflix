import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="1" title="Thriller" fetchURL={requests.requestOther} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="7" title="Comedy" fetchURL={requests.requestComedy} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID="6" title="Animation" fetchURL={requests.requestAnimation} />
    </>
  );
};

export default Home;
