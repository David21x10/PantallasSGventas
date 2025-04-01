import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Categorias from "./Categorias";
import Cliente from "./Cliente";
import Productos from "./Productos";
import Venta from "./Venta";
import Menu from "./components/Menu/Menu";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categoria" element={<Categorias />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/venta" element={<Venta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
