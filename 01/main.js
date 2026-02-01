// Creating react by our own

const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);

    for (let key in styles) {
      element.style[key] = styles[key];
    }

    if (typeof children === "object") {
      for (let val of children) {
        element.append(val);
      }
    } else element.innerText = children;

    return element;
  },
};

const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

const header1 = React.createElement(
  "h1",
  { fontSize: "50px", backgroundColor: "blue", color: "white" },
  "Hello Coder",
);
const header2 = React.createElement(
  "h2",
  { fontSize: "40px", backgroundColor: "black", color: "white" },
  "Kaise ho sab?",
);

const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JavaScript");

const ul = React.createElement(
  "ul",
  { fontSize: "20px", backgroundColor: "green", color: "white" },
  [li1, li2, li3],
);

const root = document.getElementById("root");
const li = React.createElement("li", {}, "HTML");
ReactDOM.render(header1, root);
ReactDOM.render(header2, root);
ReactDOM.render(ul, root);
