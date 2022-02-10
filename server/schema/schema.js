const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    title: String
    price: Int
    description: String
    image: String
  }
  type User {
    id: ID!
    name: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  # ROOT TYPE
  type Query {
    products: [Product]
    product(id: ID!): Product
    users: [User]
    user(id: ID!): User
  }

  input ProductInput {
    name: String
    title: String
    price: Int
    description: String
    image: String
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User
    login(email: String, password: String): User
    createProduct(
      name: String
      title: String
      price: Int
      description: String
      image: String
    ): Product
    updateProduct(id: ID!, product: ProductInput): Product
    deleteProduct(id: ID!): Product
  }
`;

module.exports = typeDefs;
