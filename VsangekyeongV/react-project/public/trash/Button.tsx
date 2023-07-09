import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonDisabled: boolean;
  className: string;
  abledStyle: string;
  disabledStyle: string;
}

const Button: React.FC<ButtonProps> = ({
  buttonDisabled,
  className,
  abledStyle,
  disabledStyle,
  children,
  onClick,
}) => {
  const buttonStyle = buttonDisabled ? disabledStyle : abledStyle;

  return (
    <button
      id="loginButton"
      className={`mt-10px login-button button-basic ${className} ${buttonStyle}`}
      disabled={buttonDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
