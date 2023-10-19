import React from "react";
import ReactDOM from 'react-dom/client'

const courseName = "Namaste React";
const heading = React.createElement("h1", {}, courseName);
const about = React.createElement("h2", {}, "by Akshay Saini");
const date = new Date();
const currentDate = date.toLocaleDateString();
const parent = React.createElement("div", { id: "wrapper" }, [
  heading,
  about,
  currentDate,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

