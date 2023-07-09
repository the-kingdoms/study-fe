import React, { ChangeEvent } from "react";

interface InputProps {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ handleInputChange }) => {
  return (
    <div>
      <input
        type="text"
        className="input-box"
        id="idInput"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        name="idInput"
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="input-box"
        id="pwInput"
        placeholder="비밀번호"
        name="pwInput"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
