import React, { useState } from "react";
import "./button.css";
import Input from "./Input";

function LoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "idInput") {
      setId(value);
    } else if (name === "pwInput") {
      setPw(value);
    }
    setButtonDisabled(value.length <= 5);
  };

  const handleLogin = () => {
    alert("id: " + id + "\npw: " + pw);
    setId("");
    setPw("");
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Input handleInputChange={handleInputChange} />
      <button
        type="button"
        disabled={buttonDisabled}
        onClick={handleLogin}
        className={`${
          buttonDisabled ? "disabled" : "abled"
        } mt-10px login-button button-basic`}
      >
        로그인
      </button>
    </div>
  );
}

export default LoginForm;
