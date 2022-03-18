import {
    GET_PRODUCTS,
    LOAD_CURRENT_ITEM,
    GET_ARTICLES,
    ADD_NEW_ARTICLE,
} from '../../Shopping/shopping-types';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    getProductById,
    handlerArticles,
    handlerProduct,
    createNewArticle,
} from '../handlers/product';

export function* productWatcher() {
    yield takeLatest(GET_PRODUCTS, handlerProduct);
}

export function* getCurrentProduct() {
    yield takeLatest(LOAD_CURRENT_ITEM, getProductById);
}

export function* articleWatcher() {
    yield takeLatest(GET_ARTICLES, handlerArticles);
}
export function* addNewArticle() {
    yield takeLatest(ADD_NEW_ARTICLE, createNewArticle);
}
