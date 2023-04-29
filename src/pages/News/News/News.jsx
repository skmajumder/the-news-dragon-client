import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {
  const news = useLoaderData();
  const { _id: newsID, title, details, image_url, category_id } = news;
  return (
    <>
      <article className="article mb-5">
        <header className="article-header">
          <h2 className="h3 mb-3">{title}</h2>
          <img src={image_url} alt="" className="img-fluid" />
        </header>
        <main>
          <div className="entry-content mt-3">
            <p>{details}</p>
          </div>
        </main>
        <footer>
          <Link to={`/category/${category_id}`} className="btn btn-danger">
            <FaArrowLeft className="me-2" />
            All news in this category
          </Link>
        </footer>
      </article>
      <div className="editors-insight">
        <EditorsInsight />
      </div>
    </>
  );
};

export default News;
