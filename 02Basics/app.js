const heading = React.createElement("h1", {}, "Namaste React");
const about = React.createElement("h2", {}, "by Akshay Saini");
const parent = React.createElement("div", { id: "wrapper" }, [heading, about]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
