export const GRAPH_API = "http://localhost:4000/graphql";

export const GET_PRODUCTS_QUERY = `
query  {
    products {
        id
        name
        title
        price
        description
        image
    }
}
`;
