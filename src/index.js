import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


const rootElement=document.getElementById('root');
ReactDOM.render(
    <>
<BrowserRouter>

<App />
</BrowserRouter>


</>,



rootElement
);
