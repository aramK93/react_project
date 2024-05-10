import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import "./reset.css";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
        <App/>
        <Footer/>
    </>
);