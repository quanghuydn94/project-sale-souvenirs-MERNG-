import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../components/Login/LoginForm";
import { login } from "../graphql-client/mutation";

export const Login = () => {
  const [errors, setErrors] = useState({});
  const router = useHistory();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginUser;
  const onChangeInput = (event) => {
    setLoginUser({
      ...loginUser,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitLogin = (event) => {
    event.preventDefault();
    signIn({
      variables: { email, password },
      onError(ApolloError) {
        setErrors(ApolloError.graphQLErrors[0].extensions.errors);
      },
      update(proxy, result) {
        router.push("/managed-products");
      },
    });
    setLoginUser({
      email: "",
      password: "",
    });
  };
  const [signIn, dataMutation] = useMutation(login);
  const closeError = () => {
    setErrors("");
  };
  return (
    <div>
      <LoginForm
        loginUser={loginUser}
        onChangeInput={onChangeInput}
        onSubmit={onSubmitLogin}
        errors={errors}
        closeError={closeError}
      />
    </div>
  );
};
