import React from "react";
import { createRoot } from "react-dom/client";
import Shell from "./Shell";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";

const Order = React.lazy(() => import('order/OrderIndex'));
const App = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="/" element={<Shell />} />
            <Route path="/Order" element={<Order onHideCart={() => {
                navigate('/');
            }}/>} />
        </Routes>
    )
}
const root = createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter> <App/></BrowserRouter>
    );