import express from "express";
import blogModel from '../models/BlogModel.js';
import { UserAuth } from '../middleware/userAuth.js';

const blogRoute = express.Router();

blogRoute.post("/createblog", UserAuth, async (req, res) => {
  const { title, image, content, createdby } = req.body;
  const user = req.user;

  const blog = new blogModel({
    title,
    image,
    content,
    createdby: user._id
  });

  try {
    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error: error.message });
  }
});


blogRoute.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 6; 
    const skip = (page - 1) * limit;
    const blogs = await blogModel.find()
      .populate("createdby", "name email")
      .skip(skip)
      .limit(limit);

    const totalBlogs = await blogModel.countDocuments(); 
    res.status(200).json({ blogs, totalBlogs }); 
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blogs", error: error.message });
  }
});


blogRoute.get("/:id", async (req, res) => {
  try {
    const { id } = req.params; 
    const blog = await blogModel.findById(id).populate("createdby", "name email");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blog", error: error.message });
  }
});

export default blogRoute;
