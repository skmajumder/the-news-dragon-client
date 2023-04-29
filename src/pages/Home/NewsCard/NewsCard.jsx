import React from "react";
import "./NewsCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  const {
    _id: newsID,
    title,
    details,
    image_url,
    author: { name: authorName, published_date, img: authotImg },
    rating: { number: ratingNumber },
    total_view,
  } = news;

  return (
    <Card className="mb-4">
      <Card.Header
        as="h5"
        className="d-flex justify-content-start align-items-center gap-2"
      >
        <img src={authotImg} className="img-fluid author-img" alt="" />
        <div className="author-meta">
          <p className="mb-0 author-name">{authorName}</p>
          <time className="publish-date">
            {moment(published_date).format("YYYY-MM-DD")}
          </time>
        </div>
        <div className="ms-auto">
          <FaRegBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <h4 className="news-title">
            <Link to={`/news/${newsID}`} rel="article">
              {title}
            </Link>
          </h4>
        </Card.Title>
        <Card.Img variant="top" src={image_url} className="mb-3" />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <br />
              <Link to={`/news/${newsID}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <Rating style={{ maxWidth: 100 }} value={ratingNumber} readOnly />
          <span className="ms-2">{ratingNumber}</span>
        </div>
        <div className="total-view">
          <FaEye className="me-2" />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
