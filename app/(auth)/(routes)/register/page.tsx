"use client";
import Button from "@/components/button/Button";
import InputField from "@/components/input/Input";
import { postCreateAccount } from "@/restapi/auth.api";
import { ChangeEvent, useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailId: "",
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
    const response = await postCreateAccount(state);
    console.log("response", response);
  };

  return (
    <div className="p-5 w-2/4 bg-white">
      <p className="text-center font-semibold text-lg">
        Create Account (ChitChat)
      </p>
      {/* <div
        className="p-4 mb-4 mt-5 text-sm text-white rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Account not found!</span>
      </div> */}

      <div className="flex justify-evenly gap-x-3">
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={state.firstName}
          onChangeHandler={onChangeHandler}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={state.lastName}
          onChangeHandler={onChangeHandler}
        />
      </div>

      <div className="flex justify-evenly gap-x-3">
        <InputField
          label="Username"
          type="text"
          name="username"
          value={state.username}
          onChangeHandler={onChangeHandler}
        />
        <InputField
          label="Email ID"
          type="text"
          name="emailId"
          value={state.emailId}
          onChangeHandler={onChangeHandler}
        />
      </div>
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
        Create Account
      </Button>
    </div>
  );
};

export default Register;
