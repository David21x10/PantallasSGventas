import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categorias from "./components/Categorias/Categorias";
import Cliente from "./components/Cliente/Cliente";
import Productos from "./components/Productos/Productos";
import Venta from "./components/Venta/Venta";
import Menu from "./components/Menu/Menu";
import AppComponent from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<AppComponent />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/venta" element={<Venta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
