import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "title" }, "We are on parcel");
const heading2 = React.createElement("h2", null, "heading two");
const content = React.createElement("div", null, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
