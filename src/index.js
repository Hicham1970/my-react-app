import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./Component/Car";

// const myFirstElement = <h1>Hello React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />);
