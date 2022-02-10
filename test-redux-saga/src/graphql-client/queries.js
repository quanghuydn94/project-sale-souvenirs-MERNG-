import { gql } from "@apollo/client";

const getProducts = gql`
  query getProductsQuery {
    products {
      id
      name
      title
      description
      image
      price
    }
  }
`;
const getUsers = gql`
  query getUserQuery {
    users {
      id
      name
      email
      password
    }
  }
`;
export { getProducts, getUsers };
