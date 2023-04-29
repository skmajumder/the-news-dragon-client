import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <section className="homepage-news">
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </section>
  );
};

export default Home;
