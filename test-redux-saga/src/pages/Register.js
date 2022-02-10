import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { RegisterForm } from "../components/Register/RegisterForm";
import { registerUser } from "../graphql-client/mutation";
import { getUsers } from "../graphql-client/queries";

export const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = newUser;
  const onChangeInput = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitRegisterUser = (event) => {
    event.preventDefault();
    addUser({
      variables: { name, email, password },
      refetchQueries: [{ query: getUsers }],
    });
    setNewUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const [addUser, dataMutation] = useMutation(registerUser);
  console.log(newUser);
  return (
    <RegisterForm
      newUser={newUser}
      onChangeInput={onChangeInput}
      onSubmit={onSubmitRegisterUser}
    />
  );
};
