import axios from "axios";

const postLogin = async (payload: { email: string; password: string }) => {
  try {
    console.log("payload", payload);
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

export { postLogin };
