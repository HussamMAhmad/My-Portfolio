import React, { ButtonHTMLAttributes } from "react";
import "./buttonIn.css";

interface ButtonInProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  inOut?: boolean;
}

function ButtonIn({ text, inOut = true }: ButtonInProps) {
  const variantClasses = inOut
    ? "bg-main before:bg-primary-bg hover:text-main text-secondary-bg"
    : "bg-primary-bg before:bg-main hover:text-primary-bg text-main";

  return <button className={`btn-in ${variantClasses}`}>{text}</button>;
}

export default ButtonIn;
