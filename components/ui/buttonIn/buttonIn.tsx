import React, { ButtonHTMLAttributes } from "react";
import "./buttonIn.css";

interface ButtonInProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  inOut?: boolean;
}

function ButtonIn({ text, inOut = true, onClick }: ButtonInProps) {
  const variantClasses = inOut
    ? "bg-main lg:before:bg-primary-bg lg:hover:text-main text-secondary-bg"
    : "bg-primary-bg lg:before:bg-main lg:hover:text-primary-bg text-main";

  return (
    <button className={`btn-in ${variantClasses}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonIn;
