import React from "react";
import axios from "axios";
import "./BlogList.css";

const BlogList = ({ blogs = [], fetchBlogs }) => {
  // Handle blog deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      fetchBlogs(); // Refresh the blog list after deletion
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Ensure blogs is always an array
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return <h2 className="no-blogs">No blogs available. Add a blog!</h2>;
  }

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p><strong>Author:</strong> {blog.author}</p>
          <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
