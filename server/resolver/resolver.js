const resolvers = {
  //Query
  Query: {
    users: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllUsers(),
    user: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getUser(args),
    products: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllProducts(),
    product: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getProductById(id),
  },

  //Mutation
  Mutation: {
    login: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.login(args),
    createUser: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createUser(args),
    createProduct: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createProduct(args),
    updateProduct: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.updateProduct(args),
    deleteProduct: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.deleteProduct(args),
  },
};
module.exports = resolvers;
