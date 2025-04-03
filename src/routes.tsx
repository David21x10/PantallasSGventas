import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Categorias from "./components/Categorias/Categorias";
import Cliente from "./components/Cliente/Cliente";
import Productos from "./components/Productos/Productos";
import Venta from "./components/Venta/Venta";
import App from "./components/App/App";


const AppRoutes: React.FC = () => {
  const location = useLocation();

  
  const hideMenuRoutes = ["/categoria", "/cliente", "/productos", "/venta"];
  const shouldShowMenu = !hideMenuRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowMenu && <Menu />}
      <Routes>
        <Route path="/categoria" element={<Categorias />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/venta" element={<Venta />} />
      </Routes>
    </>
  );
};

export default AppRoutes;


