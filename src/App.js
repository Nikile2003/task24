import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]); // Store all blogs
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [showBlogs, setShowBlogs] = useState(false); // Toggle blog list visibility
  const [formData, setFormData] = useState({ title: "", content: "", author: "" });

  // Load blogs from local storage (simulate API)
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      alert("Please fill in all fields!");
      return;
    }

    const newBlog = { ...formData, id: Date.now() };
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Store in local storage

    setFormData({ title: "", content: "", author: "" });
    setShowForm(false); // Hide form after submission
  };

  // Handle deleting a blog
  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">My Amazing Blog</h1>
      <div className="buttons">
        <button onClick={() => setShowForm(!showForm)} className="toggle-btn">
          {showForm ? "Hide Form" : "Add New Blog"}
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)} className="toggle-btn">
          {showBlogs ? "Hide Blogs" : "View All Blogs"}
        </button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <form className="blog-form" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Blog Title" value={formData.title} onChange={handleChange} required />
          <textarea name="content" placeholder="Blog Content" value={formData.content} onChange={handleChange} required />
          <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {/* Blog List */}
      {showBlogs && (
        <div className="blog-list">
          {blogs.length === 0 ? (
            <p className="no-blogs">No blogs found. Add one!</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <p><strong>Author:</strong> {blog.author}</p>
                <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;
