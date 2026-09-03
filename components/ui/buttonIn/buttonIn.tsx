"use client";
import React, { ButtonHTMLAttributes } from "react";
import "./buttonIn.css";

interface ButtonInProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  contact?: boolean;
  inOut?: boolean;
}

function ButtonIn({
  text,
  inOut = true,
  contact = false,
  onClick,
}: ButtonInProps) {
  const navigateToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const variantClasses = inOut
    ? "bg-main lg:before:bg-primary-bg lg:hover:text-main text-secondary-bg"
    : "bg-primary-bg lg:before:bg-main lg:hover:text-primary-bg text-main";

  return (
    <button
      className={`btn-in ${variantClasses}`}
      onClick={contact ? navigateToContact : onClick}
    >
      {text}
    </button>
  );
}

export default ButtonIn;
