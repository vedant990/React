import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import UseData from "../../Hooks/UseData"; // Assuming this hook fetches data

const Blog = () => {
  const { blogsData, handleBlogsData } = UseData(); // Assuming UseData returns necessary data and functions
  const navigate = useNavigate(); // Use useNavigate hook to perform navigation

  const handleModle = (id, url) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank"); // Open in a new tab/window
    } else {
      handleBlogsData(id); // Fetch blog data (if needed)
      navigate(url); // Navigate to the provided internal URL
    }
  };

  return (
    <>
      <div className="row">
        {blogsData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
            onClick={() => handleModle(item.id, item.url)} // Handle click event to navigate or open external link
            style={{ cursor: "pointer" }}
          >
            <article className="post-container">
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                </div>
              </div>
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item.description1.slice(0, 100)}</p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
