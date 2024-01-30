import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Button = ({ title, handleClick }) => {
  const snap = useSnapshot(state);

  return <button onClick={handleClick}>{title}</button>;
};

export default Button;
