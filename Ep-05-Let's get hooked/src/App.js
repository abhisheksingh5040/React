import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; // both with work fine ./components/Body.js
import { useState } from "react";

//Top level Component
const AppLayout = () => {
     return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); 
