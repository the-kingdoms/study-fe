import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const navigate = useNavigate();

  const inputPWHandler = (e: ChangeEvent<HTMLInputElement>) => {
    buttonEnabledHandler();
    setInputPW(e.target.value);
  };

  const inputIDHandler = (e: ChangeEvent<HTMLInputElement>) => {
    buttonEnabledHandler();
    setInputID(e.target.value);
  };
  const buttonEnabledHandler = () => {
    if (inputID.length > 5 && inputPW.length > 5) setButtonEnabled(true);
    else setButtonEnabled(false);
  };
  const LoginHandler = () => {
    setInputID("");
    setInputPW("");
    alert("id : " + inputID + "\npw: " + inputPW);
    // window.location.href = "https://www.google.com";
    navigate("/main");
  };
  return (
    <div>
      <input
        type="text"
        className="input-box"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={inputIDHandler}
      ></input>
      <input
        type="password"
        className="input-box"
        placeholder="비밀번호"
        onChange={inputPWHandler}
      ></input>
      <button
        disabled={!buttonEnabled}
        className={`mt-10px login-button ${
          buttonEnabled ? "enabled" : "disabled"
        }`}
        onClick={LoginHandler}
      >
        로그인
      </button>
    </div>
  );
};

export default LoginForm;
