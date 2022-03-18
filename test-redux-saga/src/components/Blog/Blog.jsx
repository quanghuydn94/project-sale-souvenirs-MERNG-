import {
    Box,
    CardMedia,
    IconButton,
    Paper,
    Typography,
} from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Blog.scss';

export const Articles = () => {
    const router = useHistory();
    const articles = useSelector((state) => state.shop.articles);

    const handleViewDetail = (article) => {
        router.push(`/blog/${article.id}`);
    };
    return (
        <Box className="container-articles">
            {articles.articles &&
                articles.articles.map((article, index) => (
                    <Paper key={index} elevation={10} className="article">
                        <Box component="div" className="content-article">
                            <CardMedia
                                image={article.image}
                                className="image-article"
                            />
                            <Typography variant="h6">
                                {article.title}
                            </Typography>
                            <Typography>{article.content}</Typography>

                            <Box>
                                <IconButton
                                    className="read-more"
                                    onClick={() => handleViewDetail(article.id)}
                                >
                                    <AddBox />
                                </IconButton>
                            </Box>
                        </Box>
                    </Paper>
                ))}
        </Box>
    );
};
