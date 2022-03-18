const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        id: ID!
        name: String
        title: String
        price: Int
        description: String
        image: String
        content: String
    }
    type Article {
        id: ID!
        title: String
        description: String
        image: String
        content: String
        success: String
    }

    type User {
        id: ID!
        name: String
        email: String
        password: String
        token: String
        role: String
        createdAt: String
        updatedAt: String
    }

    # ROOT TYPE
    type Query {
        products: [Product]
        product(id: ID!): Product
        users: [User]
        user(id: ID!): User
        articles: [Article]
        article(id: ID!): Article
    }

    input ProductInput {
        name: String
        title: String
        price: Int
        description: String
        image: String
    }

    input ArticleInput {
        title: String
        description: String
        image: String
        content: String
    }

    type Mutation {
        createUser(
            name: String
            email: String
            password: String
            confirmPassword: String
            role: String
        ): User
        createArticle(
            title: String
            description: String
            image: String
            content: String
        ): Article

        login(email: String, password: String): User
        createProduct(
            name: String
            title: String
            price: Int
            description: String
            image: String
            content: String
        ): Product
        updateProduct(id: ID!, product: ProductInput): Product
        deleteProduct(id: ID!): Product
    }
`;

module.exports = typeDefs;
