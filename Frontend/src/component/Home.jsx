import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FlashMessage from './FlashMessage'; 

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [readBlogs, setReadBlogs] = useState([]); 
  const [flashMessage, setFlashMessage] = useState(''); 
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

  const handleAlreadyRead = (id) => {
    setReadBlogs((prevReadBlogs) => [...prevReadBlogs, id]);
    setFlashMessage('Blog marked as read!');
    setTimeout(() => setFlashMessage(''), 3000); 
  };

  return (
    <div>
      {flashMessage && <FlashMessage message={flashMessage} onClose={() => setFlashMessage('')} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
            </div>
            <div className="flex justify-between m-4">
              <button
                onClick={() => handleReadMore(blog._id)}
                className="py-2 px-4 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Read More
              </button>
              <button
                onClick={() => handleAlreadyRead(blog._id)}
                className={`py-2 px-4 rounded ${readBlogs.includes(blog._id) ? 'bg-gray-400' : 'bg-green-500'} text-white hover:bg-green-600 transition`}
                disabled={readBlogs.includes(blog._id)} 
              >
                {readBlogs.includes(blog._id) ? 'Already Read' : 'Mark as Read'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
