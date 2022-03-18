import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getArticlesData } from '../redux/Shopping/shopping-actions';
import { Articles } from '../components/Blog/Blog';

export const Blogs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticlesData());
    }, []);
    return (
        <div>
            <Articles />
        </div>
    );
};
