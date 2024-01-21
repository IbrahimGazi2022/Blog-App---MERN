const express = require("express");
const {
  createBlogController,
  getAllBlogController,
  deleteBlogController,
  singleBlogController,
  updateBlogController,
  userBlogController,
} = require("../controllers/blogController");

// Router Object
const router = express.Router();

// CREATE BLOG || POST
router.post("/create-blog", createBlogController);

// ALL BLOGS || GET
router.get("/all-blog", getAllBlogController);

// UPDATE BLOG || PUT
router.put("/update-blog/:id", updateBlogController);

// SINGLE BLOG DETAILS || GET
router.get("/get-blog/:id", singleBlogController);

// DELETE BLOG || DELETE
router.delete("/delete-blog/:id", deleteBlogController);

// USER BLOG || GET
router.get("/user-blog/:id", userBlogController);

module.exports = router;
