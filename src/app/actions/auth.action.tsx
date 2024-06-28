"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../../../auth";

export const LoginUser = async (formData: any) => {
  await signIn("credentials", formData);
  window.location.reload();
};
export const SignOut = async () => {
  await signOut({ redirectTo: "/login" });
};
