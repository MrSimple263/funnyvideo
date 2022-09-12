import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App.js';
import Share from "./components/Share";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="share" element={<Share/>}/>
        </Routes>
    </HashRouter>)
