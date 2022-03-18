import { all } from 'redux-saga/effects';
import {
    getCurrentProduct,
    productWatcher,
    articleWatcher,
    addNewArticle,
} from './watchers/product';

export function* rootSaga() {
    yield all([
        productWatcher(),
        getCurrentProduct(),
        articleWatcher(),
        addNewArticle(),
    ]);
}
