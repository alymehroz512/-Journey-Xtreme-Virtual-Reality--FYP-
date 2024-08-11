import React, { useState, useEffect } from "react";
import axios from 'axios';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
 
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog/blogs'); // Replace the URL with your actual API endpoint
        setBlogs(response.data); // Assuming the response contains an array of all blogs
      } catch (error) {
        console.error('Error fetching all blogs:', error);
      }
    };

    fetchAllBlogs();
  }, []);

  const handleReadMore = (index) => {
    setBlogs(prevBlogs => prevBlogs.map((blog, i) => {
      if (i === index) {
        return { ...blog, expanded: !blog.expanded };
      }
      return blog;
    }));
  };

  return (
    <div className="container mx-auto mt-10 px-4 md:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={blog.image} alt={blog.title} className="object-cover w-full h-48 sm:h-64" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
              {blog.expanded ? (
                <>
                  <p className="text-sm text-gray-600">{blog.description}</p>
                  <button onClick={() => handleReadMore(index)} className="text-xs text-gray-600 underline mt-2">Read Less</button>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-600">{blog.shortDescription}</p>
                  <button onClick={() => handleReadMore(index)} className="text-xs text-gray-600 underline mt-2">Read More</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
