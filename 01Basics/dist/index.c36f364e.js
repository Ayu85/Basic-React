const heading = React.createElement("h1", {
    id: "title"
}, "Heading one");
const heading2 = React.createElement("h2", null, "heading two");
const content = React.createElement("div", null, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);

//# sourceMappingURL=index.c36f364e.js.map
