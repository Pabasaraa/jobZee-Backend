import express from "express";
import {
  deletelog,
  getAllBlogs,
  postBlog,
  updateBlog,
  getSingleBlog,
} from "../controllers/blogController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ok",
  });
});

router.get("/getall", getAllBlogs);
router.post("/post", isAuthenticated, postBlog);
router.put("/update/:id", isAuthenticated, updateBlog);
router.delete("/delete/:id", isAuthenticated, deletelog);
router.get("/:id", isAuthenticated, getSingleBlog);

export default router;
