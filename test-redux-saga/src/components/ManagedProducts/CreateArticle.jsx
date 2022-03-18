import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
    Slide,
} from '@material-ui/core';
import React from 'react';
import './CreateArticle.scss';
import SnackbarNoti from '../Snackbar/Snackbar';
import ContentEditor from './ContentEdit';
import { useSelector } from 'react-redux';

function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
}

export const CreateArticle = ({
    onChangeInput,
    newArticle,
    onAddArticle,
    handleChangeEditor,
    transition,
    success,
}) => {
    console.log(success);
    return (
        <Box component="div" className="create-article">
            <SnackbarNoti
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={success}
                autoHideDuration={4000}
                TransitionComponent={transition}
            />
            <form onSubmit={(event) => onAddArticle(event, TransitionRight)}>
                <Paper elevation={10}>
                    <Typography gutterBottom variant="h5">
                        New Article
                    </Typography>

                    <TextField
                        variant="outlined"
                        className="input-create"
                        name="title"
                        label="Title"
                        onChange={onChangeInput}
                        value={newArticle.title}
                        fullWidth
                        required
                    />
                    <TextField
                        variant="outlined"
                        className="input-create"
                        name="description"
                        label="Description"
                        onChange={onChangeInput}
                        value={newArticle.description}
                        fullWidth
                        required
                    />
                    <TextField
                        variant="outlined"
                        className="input-create"
                        name="image"
                        label="Address image"
                        onChange={onChangeInput}
                        value={newArticle.image}
                        fullWidth
                        required
                    />
                    <ContentEditor
                        name="content"
                        handleChangeEditor={handleChangeEditor}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        color="secondary"
                    >
                        Create
                    </Button>
                </Paper>
            </form>
        </Box>
    );
};
