import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../contexts/AuthContextProvider";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Login"}
        btnText={"Login"}
        link={"/register"}
        link2={"/reset"}
        linkText={"Dont have an account? Register!"}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;
