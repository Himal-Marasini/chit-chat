"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import InputField from "@/components/input/Input";
import { postCreateAccount } from "@/restapi/auth.api";
import { ChangeEvent, useState } from "react";

const Register = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    if (errorMessage !== "") setErrorMessage("");

    try {
      setIsLoading(true);
      await postCreateAccount(state);
      router.replace("/login");
      return null; // Render nothing on this page
    } catch (error) {
      const message = (error as Error).message;
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 w-2/4 bg-white">
      <p className="text-center font-semibold text-lg">
        Create Account (ChitChat)
      </p>

      {errorMessage ? (
        <div className="relative block w-full p-4 mb-4 mt-4 text-base leading-5 text-white bg-red-500 rounded-lg opacity-100 font-regular">
          {errorMessage}
        </div>
      ) : null}

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
        disabled={isLoading}
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
