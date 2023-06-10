import React from "react";
import { createRoot } from "react-dom/client";
import Cart from "./Components/Cart";

const mount = el => {
    const root = createRoot(el);
    root.render(
        <React.Fragment>
            <Cart onHideCart = {() => {}} />
        </React.Fragment>
    );
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById("overlays");
    if (el) {
        mount(el);
    }
}
