import { useMutation } from "@apollo/client";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../components/Login/LoginForm";
import { login } from "../graphql-client/mutation";
import { AuthContext } from "../context/auth";

export const Login = () => {
  const context = useContext(AuthContext);
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
      update(_, result) {
        const user = result.data.login;
        context.login(user);
        if (user.role === "admin") {
          router.push("/management");
        } else {
          router.push("/");
        }
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
