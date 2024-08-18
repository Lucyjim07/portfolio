import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './features/DesignOne/App.jsx'
import App from './features/DesignTwo/App'
import { ThemeProvider } from "./features/DesignTwo/common/ThemeContext";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
