import React from 'react';
import { createRoot } from 'react-dom/client';



const root = createRoot(document.getElementById('ag-admin'))
root.render(<App />)

export default function App({ children }) {
    return (
        <section>
            <h1>
                { children }
            </h1>
        </section>
    )
}

