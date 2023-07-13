import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Hello React!!!!</h1>
            <h2>Hello Vercel!!!</h2> 
        </div>
    )

}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);

//React before 18
//React.render(<App />)
