import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Categories = () => {
  const categoriesNews = useLoaderData();

  return (
    <section className="section-category-news">
      {categoriesNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </section>
  );
};

export default Categories;
