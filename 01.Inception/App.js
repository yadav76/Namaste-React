/**
 * <div class="parent">
 *      <div class="child">
 *           <h1>I am h1 Tag</h1>
 *           <h2>I am h2 Tag</h2>
 *      </div>
 * </div>
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 Tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
