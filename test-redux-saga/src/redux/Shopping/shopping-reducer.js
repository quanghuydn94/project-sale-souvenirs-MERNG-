import * as types from './shopping-types';

const initialState = {
    graphqlData: [],
    isLoading: false,
    error: null,
    cart: [],
    currentItem: null,
    articles: [],
    success: null,
};
export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
        case types.GET_ARTICLES:
        case types.ADD_NEW_ARTICLE:
            return { ...state, isLoading: true };
        case types.GET_PRODUCTS_SUCCESS:
            return { ...state, graphqlData: action.payload.data };
        case types.GET_ARTICLES_SUCCESS:
            return { ...state, articles: action.payload.data };
        case types.ADD_TO_CART:
            console.log(action.payload.id);
            const item = state.graphqlData.products.find(
                (item) => item.id === action.payload.id
            );
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                          item.id === action.payload.id
                              ? { ...item, qty: item.qty + 1 }
                              : item
                      )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case types.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case types.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +Math.floor(action.payload.qty) }
                        : item
                ),
            };
        case types.LOAD_CURRENT_ITEM:
            return {
                ...state,
            };
        case types.LOAD_CURRENT_ITEM_SUCCESS:
            return {
                ...state,
                currentItem: action.payload,
            };
        case types.ADD_NEW_ARTICLE_SUCCESS:
            return {
                ...state,
                success: action.payload,
                isLoading: false,
            };
        case types.GET_PRODUCTS_FAILED:
        case types.ADD_NEW_ARTICLE_FAILED:
        case types.GET_ARTICLES_FAILED:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};
