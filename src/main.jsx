import React from 'react'
import ReactDOM from 'react-dom/client'
// Diseño uno
// import App from './features/DesignOne/App.jsx'

// Diseño dos
// import App from './features/DesignTwo/App'
// import { ThemeProvider } from "./features/DesignTwo/common/ThemeContext";

// Diseño tres
import App from './features/DesignThree/App';

import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Diseño uno */}
    {/* <App /> */}

    {/* Diseño dos */}
    {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}

    {/* Diseño tres */}
    <App />
  </React.StrictMode>
);
