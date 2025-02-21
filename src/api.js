import axios from "axios";

const API_URL = "http://localhost:5000/blogs"; 

export const fetchBlogs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

export const addBlog = async (title, content, author) => {
    try {
        await axios.post(API_URL, { title, content, author });
    } catch (error) {
        console.error("Error adding blog:", error);
    }
};

export const deleteBlog = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting blog:", error);
    }
};
