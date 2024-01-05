const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "Title is require"]
        },
        description: {
            type: String,
            require: [true, "Description is require"]
        },
        image: {
            type: String,
            require: [true, "Image is require"]
        },

    }, { timestamps: true }
);

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;