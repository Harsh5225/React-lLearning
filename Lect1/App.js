/* 1
<div>
<div id="child">
  <h1></h1>
</div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "First Child"),
    React.createElement("h1", { id: "heading2" }, "Second child"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "First Child"),
    React.createElement("h1", { id: "heading2" }, "Second child"),
  ]),
]);

// JSX Exist to make the above thing simple
// React can only written in JSX

/* 2
<div>
<div id="child">
  <h1></h1>
  <h1></h1>
</div>
</div>
*/

const heading = React.createElement(
  "h1",
  { id: "header" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
