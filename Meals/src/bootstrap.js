import React from "react";
import { createRoot } from "react-dom/client";
import Meals from "./Meals";

const mount = el => {
    const root = createRoot(el);
    root.render(
        <React.StrictMode>
            <Meals />
        </React.StrictMode>
    );
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById("root");
    if (el) {
        mount(el);
    }
}

export {mount};