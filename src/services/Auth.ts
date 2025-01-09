import { auth } from "@muc/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

type LoginValues = {
  email: string;
  password: string;
};

export const logInWithEmail = async (data: LoginValues): Promise<string> => {
  const { email, password } = data;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(`${user.email} logged in successfully!`);
    return `${user.email} logged in successfully!`;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error during login:", error.message);
      throw new Error("Failed to log in. Please check your credentials.");
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};
