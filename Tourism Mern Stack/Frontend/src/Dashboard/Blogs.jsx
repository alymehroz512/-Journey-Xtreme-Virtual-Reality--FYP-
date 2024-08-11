import React, { useState, useEffect } from "react";
import axios from 'axios';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author:"",
    image:"",
    description: "",
  });
  const [editingBlog, setEditingBlog] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState({
    title: "",
    author: "",
    image: "",
    description: "",
  });

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blog/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingBlog) {
      setUpdatedBlog({ ...updatedBlog, [name]: value });
    } else {
      setNewBlog({ ...newBlog, [name]: value });
    }
  };

  const addBlog = async () => {
    try {
      await axios.post('http://localhost:5000/api/blog/blogs', newBlog);
      setNewBlog({ title: "", author: "", image: "", description: "" });
      fetchBlogs();
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blog/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const updateBlog = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/blog/blogs/${id}`, updatedBlog);
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setUpdatedBlog(blog);
  };

  const handleUpdate = () => {
    updateBlog(editingBlog._id);
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      {/* Form to add a new blog */}
      <div className="mb-4">
        <input
          type="text"
          name="title"
          value={newBlog.title}
          placeholder="Title"
          onChange={handleInputChange}
          className="mr-2 p-2 border text-black border-gray-400 rounded"
        />
        <input
          type="text"
          name="author"
          value={newBlog.author}
          placeholder="Author Name"
          onChange={handleInputChange}
          className="mr-2 p-2 text-black border border-gray-400 rounded"
        />
        <input
          type="text"
          name="image"
          value={newBlog.image}
          placeholder="Paste Image URL"
          onChange={handleInputChange}
          className="mr-2 p-2 text-black border border-gray-400 rounded"
        />
        <input
          type="text"
          name="description"
          value={newBlog.description}
          placeholder="Description"
          onChange={handleInputChange}
          className="mr-2 p-2 text-black border border-gray-400 rounded"
        />
        <button onClick={addBlog} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Blog</button>
      </div>
      {/* Table to display blogs */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="border border-gray-400 p-2">No#</th>
              <th className="border border-gray-400 p-2">Title</th>
              <th className="border border-gray-400 p-2">Description</th>
              <th className="border border-gray-400 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog._id}>
                <td className="border border-gray-400 p-2">{index + 1}</td>
                <td className="border border-gray-400 p-2">
                  {editingBlog === blog ? (
                    <input
                      type="text"
                      name="title"
                      value={updatedBlog.title}
                      onChange={handleInputChange}
                      className="mr-2 p-2 border text-black border-gray-400 rounded w-full sm:w-auto"
                    />
                  ) : (
                    blog.title
                  )}
                </td>
                <td className="border border-gray-400 p-2">
                  {editingBlog === blog ? (
                    <textarea
                      cols={30}
                      rows={5}
                      type="text"
                      name="description"
                      value={updatedBlog.description}
                      onChange={handleInputChange}
                      className="mr-2 p-2 border text-black border-gray-400 rounded w-full sm:w-auto"
                    />
                  ) : (
                    blog.description
                  )}
                </td>
                <td className="border border-gray-400 p-2">
                  {editingBlog === blog ? (
                    <button onClick={handleUpdate} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2">Update</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(blog)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">Edit</button>
                      <button onClick={() => deleteBlog(blog._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blogs;
