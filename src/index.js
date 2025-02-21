import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css"; // ✅ Ensure correct file name

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
