"use client";
import Button from "@/components/button/Button";
import InputField from "@/components/input/Input";
import React, { ChangeEvent, useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setState({
      ...state,
      [name]: value
    });
  };

  const onClickHandler = () => {
    console.log(state);
    // TODO: make the api call for login
  };

  return (
    <div className="border-solid border-2 border-indigo-500 p-5  w-2/4">
      <p className="text-center font-semibold text-lg">Login</p>
      <InputField
        label="Email"
        type="email"
        name="email"
        value={state.email}
        onChangeHandler={onChangeHandler}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={state.password}
        onChangeHandler={onChangeHandler}
      />
      <Button
        type="button"
        className="text-[14px] bg-button text-white"
        onClickHandler={onClickHandler}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;