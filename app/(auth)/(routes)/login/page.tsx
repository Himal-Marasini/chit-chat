"use client";
import Button from "@/components/button/Button";
import InputField from "@/components/input/Input";
import React, { ChangeEvent, useState } from "react";

import { postLogin } from "@/restapi/auth.api";
import Link from "next/link";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    const name = event.target.name;
    const value = event.target.value;

    setState({
      ...state,
      [name]: value
    });
  };

  const onClickHandler = async () => {
    setIsLoading(true);
    try {
      const response = await postLogin(state);
      console.log(response);
    } catch (error) {
      const message = (error as Error).message;
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 w-2/4 bg-white">
      <p className="text-center font-semibold text-lg">Login To The Account</p>

      {errorMessage ? (
        <div className="relative block w-full p-4 mb-4 mt-4 text-base leading-5 text-white bg-red-500 rounded-lg opacity-100 font-regular">
          {errorMessage}
        </div>
      ) : null}

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
          disabled={isLoading}
          type="button"
          className="text-[14px] bg-button text-white"
          onClickHandler={onClickHandler}
        >
          Login
        </Button>
        <Link href="/register">
          <Button
            disabled={isLoading}
            type="button"
            className="text-[14px] bg-button text-white"
          >
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
