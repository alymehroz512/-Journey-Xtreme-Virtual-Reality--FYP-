import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // const [showAllBlogs, setShowAllBlogs] = useState(false); // Remove this line if not used
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog/blogs');
        setBlogs(response.data.map(blog => ({ ...blog, shortDescription: blog.description.slice(0, 100) + (blog.description.length > 100 ? '...' : ''), expanded: false }))); // No need to slice here
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (index) => {
    setBlogs(prevBlogs => prevBlogs.map((blog, i) => {
      if (i === index) {
        return { ...blog, expanded: !blog.expanded };
      }
      return blog;
    }));
  };

  const handleSeeMore = () => {
    // Navigate to the AllBlogs component
    navigate('/allblogs');
  };

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12" id="Blogs">
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="mb-4 text-center text-2xl font-bold bg-gradient-to-r from-green-700 to-green-300 inline-block text-transparent bg-clip-text md:mb-2 lg:text-5xl pb-4">
          Blogs
        </h2>
        <p className="mx-auto text-xl max-w-screen-md text-center text-gray-500 md:text-xg">
          Recent Posts
        </p>
      </div>
      <div className="mx-auto  max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog, index) => ( // Slice the first 3 blogs
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
        {blogs.length > 3 && ( // Render the "See More" button conditionally
          <div className="text-center mt-8">
            <button onClick={handleSeeMore} className="mt-2 md:mt-10 text-sm md:text-lg py-1 md:py-1 text-white bg-gradient-to-r from-green-800 hover:bg-green-300 px-4 md:px-7 transition-transform transform hover:scale-105 duration-300">See More</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
