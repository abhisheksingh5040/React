import React from "react";
import ReactDOM from "react-dom";

// React.createElement = ReactElement - JS Object => HTMLElement(render)
const heading = React.createElement("h1",{id:"heading"},"Hello world!");

//JSX -> Develop by FB developer

// JSX---babel convert --- => React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = (<h1 id="heading">
    Hello world using jsx
    </h1>);


//Component
// 1. class based component
// 2. Functional component

// Functional component -> Functional component is just a java script function that returns a JSX element is a functional component.

const Title = () => <h1>I am title</h1> ;


// component composition
const FunctionalComponent = () => {
    return (
        <div id = "container">
             <Title/>
             {heading}
            <h1 id="heading">
                 Hello world using functional component
            </h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent />); // now babel will understand that this is a functional component
