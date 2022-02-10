const { UserInputError } = require("apollo-server-express");
const Product = require("../models/Product");
const User = require("../models/User");
const { validateLoginInput } = require("../utils/validator");

const mongoDataMethods = {
  getAllUsers: async () => await User.find(),
  getUser: async (args) => await User.findById(args.id),
  createUser: async (args) => {
    const newUser = new User(args);
    return await newUser.save();
  },

  login: async (args) => {
    const { errors, valid } = validateLoginInput(args.email, args.password);

    if (!valid) {
      throw new UserInputError("Errors", { errors });
    }

    const user = await User.findOne({ email: args.email });
    if (!user) {
      errors.general = "User not found";
      throw new UserInputError("User not found", { errors });
    }

    if (args.password !== user.password) {
      errors.general = "Wrong crendetials";
      throw new UserInputError("Wrong crendetails", { errors });
    }
    return user;
  },

  getAllProducts: async () => await Product.find(),
  getProductById: async (id) => await Product.findById(id),

  createProduct: async (args) => {
    const newProduct = new Product(args);
    return await newProduct.save();
  },
  updateProduct: async (args) => {
    const { id } = args;
    const { name, title, price, description, image } = args.product;
    console.log({ id });
    const product = await Product.findByIdAndUpdate(
      id,
      { name, title, price, description, image },
      { new: true }
    );
    return product;
  },
  deleteProduct: async (args) => {
    return await Product.findByIdAndDelete(args.id);
  },
};

module.exports = mongoDataMethods;
