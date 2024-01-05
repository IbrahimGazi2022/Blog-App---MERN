const express = require('express');
const { createBlogController, getAllBlogController, deleteBlogController, singleBlogController, updateBlogController } = require('../controllers/blogController');

// Router Object 
const router = express.Router();

// CREAT BLOG || POST
router.post("/create-blog", createBlogController);

// ALL BLOGS || GET
router.get("/all-blog", getAllBlogController);

// UPDATE BLOG || PUT
router.put("/update-blog/:id", updateBlogController);

// SINGLE BLOG DETAILS || GET
router.get("/get-blog/:id", singleBlogController);

// DELETE BLOG || DELETE
router.delete("/delete-blog/:id", deleteBlogController);

module.exports = router;