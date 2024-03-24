// const heading = React.createElement("h1",
//     { id: "heading"},
//     "Hello world for React!");


// console.log(heading);//object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);// it will take an object and make an html tag.<h1 id="heading">Hello world for React!</h1>


/**
 * <div id="parent">
 *    <div id="child>
 *       <h1>I am h1 tag</h1>
 *       <h2>I am h2 tag</h2>
 *    </div>
 * </div>
 */


const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h1", {}, "I am h2 tag")])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);