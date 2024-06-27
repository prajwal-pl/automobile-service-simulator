import { LoginForm } from "@/components/global/Login";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
