const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        image: { type: String },
        content: { type: String },
    },
    { timestamp: true }
);
module.exports = mongoose.model('articles', ArticleSchema);
