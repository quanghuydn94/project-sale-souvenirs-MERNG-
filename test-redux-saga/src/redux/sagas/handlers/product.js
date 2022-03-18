import { put, delay, call } from 'redux-saga/effects';
import {
    getCurrentProduct,
    getProducts,
    getArticles,
    createArticle,
} from '../../../util/api';
import {
    addNewArticleSuccess,
    addNewArticleFailed,
    getArticlesFailed,
    getArticlesSuccess,
    getProductFailed,
    getProductSuccess,
    loadCurrentItemSuccess,
} from '../../Shopping/shopping-actions';

export function* handlerProduct() {
    try {
        const response = yield call(getProducts);
        yield put(getProductSuccess(response));
    } catch (error) {
        yield put(getProductFailed(error.message));
    }
}

export function* handlerArticles() {
    try {
        const response = yield call(getArticles);
        yield put(getArticlesSuccess(response));
    } catch (error) {
        yield put(getArticlesFailed(error.message));
    }
}

export function* getProductById(action) {
    try {
        const res = yield call(getCurrentProduct, action.payload);
        yield put(loadCurrentItemSuccess(res));
    } catch (error) {
        console.log(error);
    }
}

export function* createNewArticle({ payload }) {
    try {
        const res = yield call(createArticle, payload);
        yield put(addNewArticleSuccess(res.data.createArticle.success));
        yield delay(5000);
        yield put(addNewArticleSuccess(null));
    } catch (error) {
        yield put(addNewArticleFailed(error));
    }
}
