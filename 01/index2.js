const element = React.createElement("h1", {}, "Hello Coder Army");

// Pura tarika React 17 ka
// ReactDOM.render(element, document.getElementById("root"));

// Ab naya tarika react 18 ka createRoot is used
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
