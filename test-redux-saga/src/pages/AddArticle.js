import React, { useState, useRef, useContext } from 'react';
import { CreateArticle } from '../components/ManagedProducts/CreateArticle';
import { useDispatch } from 'react-redux';
import { addNewArticle } from '../redux/Shopping/shopping-actions';
import { AuthContext } from '../context/auth';
export const AddArticle = () => {
    const dispatch = useDispatch();
    const { success } = useContext(AuthContext);
    const snackbarRef = useRef(null);
    const [editValue, setEditorValue] = useState('');
    const [transition, setTransition] = useState(undefined);
    const [newArticle, setNewArticle] = useState({
        title: '',
        description: '',
        image: '',
    });

    newArticle.content = editValue;

    const handleChangeEditor = (content) => {
        setEditorValue(content);
    };
    const onChangeInput = (event) => {
        setNewArticle({
            ...newArticle,
            [event.target.name]: event.target.value,
        });
    };
    const onAddArticle = (event, Transition) => {
        event.preventDefault();
        dispatch(addNewArticle(newArticle));
        setNewArticle({
            description: '',
            title: '',
            image: '',
            content: '',
        });
        setEditorValue('');
        setTransition(() => Transition);
    };

    return (
        <div>
            <CreateArticle
                onChangeInput={onChangeInput}
                handleChangeEditor={handleChangeEditor}
                onAddArticle={onAddArticle}
                newArticle={newArticle}
                snackRef={snackbarRef}
                transition={transition}
                success={success}
            />
        </div>
    );
};
