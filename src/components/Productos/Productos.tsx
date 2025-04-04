"use client"

import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import "./Productos.css"

const Productos: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="productos-container">
      {/* Botón de regresar al menú */}
      <div className="menu-button-container">
        <button className="btn-back" onClick={() => navigate("/")}>Regresar al Menú</button>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="productos-content">
        <h2 className="productos-title">Gestión de Productos - Librería</h2>

        {/* Formulario de producto */}
        <div className="producto-form">
          <div className="form-group">
            <input type="text" name="nombre" placeholder="Nombre del producto" />
          </div>

          <div className="form-group">
            <input type="text" name="categoria" placeholder="Categoría" />
          </div>

          <div className="form-group">
            <input type="text" name="precio" placeholder="Precio" />
          </div>

          <div className="form-group">
            <input type="number" name="stock" placeholder="Stock inicial" />
          </div>

          <button className="agregar-button">Agregar Producto</button>
        </div>

        {/* Tabla de productos */}
        <div className="productos-table-container">
          <table className="productos-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ejemplo</td>
                <td>Ejemplo</td>
                <td>0.00</td>
                <td>0</td>
                <td className="acciones-column">
                  <button className="edit-button">
                    <FaEdit />
                  </button>
                  <button className="delete-button">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="productos-footer">
        <p>© 2025 Papelería La Esquina del Papel. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Productos
