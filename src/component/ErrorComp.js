import React from "react";
import "../App.css"

export const ErrorComp = ({ valid }) => <p className={valid ? "hidden" : "error"}>Поле непроходит валидацию</p>;


