import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://the-news-dragon-server-kolpodrovercel-gmailcom.vercel.app/categories"
    )
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <aside className="left-sidebar">
      <h4>All Category</h4>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </aside>
  );
};

export default LeftNav;
