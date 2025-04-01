import React from "react";
import { useNavigate } from "react-router-dom";

const Productos: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <h2>Página de Productos</h2>
      <button className="btn-back" onClick={() => navigate("/")}>
        Regresar al Menú
      </button>
    </div>
  );
};

export default Productos;

  