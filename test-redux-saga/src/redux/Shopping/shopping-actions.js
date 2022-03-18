import { getCurrentProduct } from '../../util/api';
import * as types from './shopping-types';

export const getProductData = (payload) => {
    return {
        type: types.GET_PRODUCTS,
        payload,
    };
};
export const getProductSuccess = (payload) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload,
    };
};
export const getProductFailed = (payload) => {
    return {
        type: types.GET_PRODUCTS_FAILED,
        payload,
    };
};

export const getArticlesData = (payload) => {
    return {
        type: types.GET_ARTICLES,
        payload,
    };
};
export const getArticlesSuccess = (payload) => {
    return {
        type: types.GET_ARTICLES_SUCCESS,
        payload,
    };
};
export const getArticlesFailed = (payload) => {
    return {
        type: types.GET_ARTICLES_FAILED,
        payload,
    };
};
export const addNewArticle = (payload) => {
    return {
        type: types.ADD_NEW_ARTICLE,
        payload,
    };
};
export const addNewArticleSuccess = (payload) => {
    return {
        type: types.ADD_NEW_ARTICLE_SUCCESS,
        payload,
    };
};
export const addNewArticleFailed = (payload) => {
    return {
        type: types.ADD_NEW_ARTICLE_FAILED,
        payload,
    };
};

export const addToCart = (itemId) => {
    return {
        type: types.ADD_TO_CART,
        payload: {
            id: itemId,
        },
    };
};
export const removeFromCart = (itemId) => {
    return {
        type: types.REMOVE_FROM_CART,
        payload: {
            id: itemId,
        },
    };
};

export const adjustQty = (itemId, value) => {
    return {
        type: types.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value,
        },
    };
};
export const loadCurrentItem = (itemId) => {
    return {
        type: types.LOAD_CURRENT_ITEM,
        payload: itemId,
    };
};
export const loadCurrentItemSuccess = (data) => {
    return {
        type: types.LOAD_CURRENT_ITEM_SUCCESS,
        payload: data,
    };
};
