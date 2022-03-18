import * as graphql from '../components/constants/graphql';
export const getProducts = () => {
    return fetch(graphql.GRAPH_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: graphql.GET_PRODUCTS_QUERY }),
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => Promise.reject(error));
};

export const getArticles = () => {
    return fetch(graphql.GRAPH_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: graphql.GET_ARTICLES_QUERY }),
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => Promise.reject(error));
};

export const getCurrentProduct = (id) => {
    return fetch(graphql.GRAPH_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: graphql.GET_CURRENT_PRODUCT,
            variables: { id: id },
        }),
    })
        .then((response) => response.json())
        .then((data) => data.data.product);
};

export const createArticle = (formData) => {
    return fetch(graphql.GRAPH_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: graphql.CREATE_ARTICLE,
            variables: {
                title: formData.title,
                description: formData.description,
                image: formData.image,
                content: formData.content,
            },
        }),
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error);
};
