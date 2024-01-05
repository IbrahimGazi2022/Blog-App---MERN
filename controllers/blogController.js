const blogModel = require("../models/blogModel");

// CREATE BLOG 
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: "Please provide all fields"
            });
        }

        const newBlog = new blogModel({ title, description, image });
        await newBlog.save();
        return res.status(201).send({
            success: true,
            message: "Blog Created",
            newBlog
        });

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: 'Error with create blog',
            error
        });
    }
};

// GET ALL BLOG
exports.getAllBlogController = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        if (!blogs) {
            return res.status(200).send({
                success: false,
                message: "No Blogs Found"
            });
        }

        return res.status(200).send({
            success: true,
            message: "All blogs lists",
            blogCount: blogs.length,
            blogs
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error with getting blogs',
            error
        });
    }
};


// UPDATE BLOG
exports.updateBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
        const blog = await blogModel.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        return res.status(200).send({
            success: true,
            message: "Blog Updated",
            blog
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error with updated blogs',
            error
        });
    }
};

// SINGLE BLOG 
exports.singleBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id);
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "Blog not found"
            });
        }
        return res.status(200).send({
            success: true,
            message: "Fetch single blog",
            blog
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error with single blogs',
            error
        });
    }
};

// DELETE BLOG
exports.deleteBlogController = async (req, res) => {
    try {
        await blogModel.findOneAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Blog successfully deleted"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error with delete blogs',
            error
        });
    }
};