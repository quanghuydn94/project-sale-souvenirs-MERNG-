import * as graphql from "../components/constants/graphql";
export const getProducts = () => {
  return fetch(graphql.GRAPH_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: graphql.GET_PRODUCTS_QUERY }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => Promise.reject(error));
};
