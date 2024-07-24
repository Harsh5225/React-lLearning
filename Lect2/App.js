import React from 'react';
import ReactDOM from  "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "First Child REACT 🙌🙌🙌 "),
      React.createElement("h1", { id: "heading2" }, "Second child 🚀🚀🚀"),
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "First Child"),
      React.createElement("h1", { id: "heading2" }, "Second child"),
    ]),
]);


const container = document.getElementById ("root");
const root = ReactDOM.createRoot(container);

root.render(parent);
