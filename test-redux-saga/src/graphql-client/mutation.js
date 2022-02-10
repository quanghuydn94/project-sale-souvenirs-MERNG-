import { gql } from "@apollo/client";

const registerUser = gql`
  mutation registerNewUser($name: String, $email: String, $password: String) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;

const login = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      email
      password
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
  ) {
    createProduct(
      name: $name
      description: $description
      title: $title
      image: $image
      price: $price
    ) {
      name
      description
      title
      image
      price
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
