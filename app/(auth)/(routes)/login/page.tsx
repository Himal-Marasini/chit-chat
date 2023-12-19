"use client";
import Button from "@/components/button/Button";
import InputField from "@/components/input/Input";
import React, { ChangeEvent, useState } from "react";

import { postLogin } from "@/restapi/auth.api";
import Link from "next/link";

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

  const onClickHandler = async () => {
    // TODO: make the api call for login
    const response = await postLogin(state);
    console.log("LINE:27", response);
  };

  return (
    <div className="p-5 w-2/4 bg-white">
      <p className="text-center font-semibold text-lg">Login To The Account</p>
      <div
        className="p-4 mb-4 mt-5 text-sm text-white rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Account not found!</span>
      </div>
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

      <div className="flex justify-between">
        <Button
          type="button"
          className="text-[14px] bg-button text-white"
          onClickHandler={onClickHandler}
        >
          Login
        </Button>
        <Link href="/register">
          <Button type="button" className="text-[14px] bg-button text-white">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
