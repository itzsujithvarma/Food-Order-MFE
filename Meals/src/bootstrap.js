import React from "react";
import { createRoot } from "react-dom/client";
import Meals from "./components/Meals/Meals";

const mount = el => {
    const root = createRoot(el);
    root.render(
        <React.Fragment>
            <Meals />
        </React.Fragment>
    );
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById("root");
    if (el) {
        mount(el);
    }
}

export {mount};