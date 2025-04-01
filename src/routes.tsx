import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Categorias from "./Categorias";
import Cliente from "./Cliente";
import Productos from "./Productos";
import Venta from "./Venta";

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


