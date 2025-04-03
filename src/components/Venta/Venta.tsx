import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Venta.css";

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

const Venta: React.FC = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState<number | "">("");
  const [precio, setPrecio] = useState<number | "">("");
  const [cliente, setCliente] = useState("");
  const [vendedor, setVendedor] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState<string>(new Date().toLocaleDateString());

  const handleAgregar = () => {
    if (!nombre || cantidad === "" || precio === "") {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre,
      cantidad: Number(cantidad),
      precio: Number(precio),
    };

    setProductos([...productos, nuevoProducto]);
    setNombre("");
    setCantidad("");
    setPrecio("");
  };

  const handleEliminar = (id: number) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
  };

  return (
      <div>
      <button className="btn-back" onClick={() => navigate("/")}>Regresar al Menú</button>
      <div className="venta-container">
      <h2 className="titulo">Nueva Factura</h2>

      <div className="formulario">
        <input type="text" placeholder="Nombre del Cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} />
        <input type="text" placeholder="Nombre del Vendedor" value={vendedor} onChange={(e) => setVendedor(e.target.value)} />
        <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

        <input type="text" placeholder="Nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value ? Number(e.target.value) : "")} />
        <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value ? Number(e.target.value) : "")} />
        <button onClick={handleAgregar}>Agregar Producto</button>
      </div>

      <div className="factura-info">
        <h3>Detalles de la Factura:</h3>
        <p><strong>Cliente:</strong> {cliente}</p>
        <p><strong>Vendedor:</strong> {vendedor}</p>
        <p><strong>Teléfono:</strong> {telefono}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Fecha:</strong> {fecha}</p>
      </div>

      <table className="tabla-ventas">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precio.toFixed(2)}</td>
              <td>{(producto.cantidad * producto.precio).toFixed(2)}</td>
              <td>
                <button className="btn-eliminar" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="total">Total: L {calcularTotal().toFixed(2)}</h3>
    </div>
    </div>
  );
};

export default Venta;
