import React from "react";
import DumbGramLogo from "../../../assets/logo.svg";
import "./Logo.css";

export default function Logo(props) {
  const className = [props.className];
  if (props.isSmall) className.push("w-40");
  if (props.isLarge) className.push("w-75");

  return (
    <div className="ms-n1">
      <img
        src={DumbGramLogo}
        alt="dumbgram_logo"
        className={className.join(" ")}
      />
    </div>
  );
}
