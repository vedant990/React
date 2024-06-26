import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.png";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Docker : A Comprehensive Guide",
      date: "22 February 2024",
      tag: `docker`,
      description1:
        "Basics of Docker For Beginners",
      url: "https://vedant990.hashnode.dev/docker-a-comprehensive-guide-part-1", // Example URL
    },

  ];

  const [singleData, setSingleData] = useState({});

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    // You can add any other logic here if needed
  };

  return {
    singleData,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
