import axios from "axios";

const postLogin = async (payload: { email: string; password: string }) => {
  try {
    const response = await axios.post("/api/auth/login", payload);
    const { success, message, data } = await response.data;
    if (!success) {
      throw new Error(message);
    }
    return { message, data };
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const postCreateAccount = async (payload: {
  firstName: string;
  lastName: string;
  emailId: string;
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post("/api/auth/create-account", payload);
    const { success, message, data } = await response.data;

    if (!success) {
      throw new Error(message);
    }

    return { message, data };
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export { postLogin, postCreateAccount };
