import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3444/blog/allblogs');
        setBlogs(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col">
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
          </div>
          <button
            onClick={() => handleReadMore(blog._id)}
            className="m-4 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
