import { gql } from "@apollo/client";

const registerUser = gql`
  mutation registerNewUser($name: String, $email: String, $password: String) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
      password
      token
    }
  }
`;

const login = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      name
      email
      password
      token
      role
      createdAt
    }
  }
`;

const addSingleProduct = gql`
  mutation addSingleProductMutation(
    $name: String
    $description: String
    $title: String
    $image: String
    $price: Int
    $content: String
  ) {
    createProduct(
      name: $name
      description: $description
      title: $title
      image: $image
      price: $price
      content: $content
    ) {
      name
      description
      title
      image
      price
      content
    }
  }
`;

const updateProductData = gql`
  mutation UpdateProduct($id: ID!, $product: ProductInput) {
    updateProduct(id: $id, product: $product) {
      id
      name
      description
      title
      image
      price
    }
  }
`;
const deleteSingleProduct = gql`
  mutation deleteSingleProductMutation($id: ID!) {
    deleteProduct(id: $id) {
      name
    }
  }
`;

export {
  addSingleProduct,
  deleteSingleProduct,
  updateProductData,
  registerUser,
  login,
};
