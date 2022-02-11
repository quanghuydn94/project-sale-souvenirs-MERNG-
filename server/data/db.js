const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server-express");
const Product = require("../models/Product");
const User = require("../models/User");
const {
  validateLoginInput,
  validateRegisterInput,
} = require("../utils/validator");
const { SECRET_KEY } = require("../../test-redux-saga/config");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

const mongoDataMethods = {
  getAllUsers: async () => await User.find(),
  getUser: async (args) => await User.findById(args.id),
  createUser: async (args) => {
    const { valid, errors } = validateRegisterInput(
      args.name,
      args.email,
      args.password,
      args.confirmPassword,
      args.roleName
    );
    if (!valid) {
      throw new UserInputError("Errors", { errors });
    }

    const user = await User.findOne({ email: args.email });
    if (user) {
      throw new UserInputError("Email is taken", {
        errors: {
          email: "This email is taken",
        },
      });
    }

    // Hash password and create an auth token
    password = await bcrypt.hash(args.password, 12);

    const newUser = new User({
      name: args.name,
      email: args.email,
      password: args.password,
      role: args.role,
      createAt: new Date().toISOString(),
    });

    const res = await newUser.save();
    const token = generateToken(res);

    return {
      ...res._doc,
      id: res._id,
      token,
    };
    // const newUser = new User(args);
    // return await newUser.save();
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
    const token = generateToken(user);

    return { ...user._doc, id: user._id, token };
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
