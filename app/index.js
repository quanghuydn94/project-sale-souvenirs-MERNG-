const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

//Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

//Load db methods
const mongoDataMethods = require('./data/db');

//Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://quanghuy:12121994@cluster0.apf78.mongodb.net/Cluster0?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
});

const app = express();
const PORT = process.env.PORT || 3000;
server.start().then((res) => {
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(
            `Server ready at http://localhost:4000${server.graphqlPath}`
        );
    });
});
