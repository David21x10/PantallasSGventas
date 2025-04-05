import React, { ChangeEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Cliente.css"
import { validarEmail, validarIdNumerico, validarNombre, validarTelefono } from "../../utilidades/validaciones";

interface ICliente {
  id: string;
  nombre: string
  email: string
  telefono: string
}

interface IErrores {
  id: string | null
  nombre: string | null
  email: string | null
  telefono: string | null
}

const Cliente: React.FC = () => {
  const navigate = useNavigate();
  const [editando, setEditando] = useState(false)

  const [clientes, setClientes] = useState<ICliente[]>([])
  const [cliente, setCliente] = useState<ICliente>({
    id: "",
    nombre: "",
    email: "",
    telefono: ""
  })
  const [errores, setErrores] = useState<IErrores>()


  const handleAgregar = () => {
    const errorNombre = validarNombre(cliente.nombre)
    const errorId = validarIdNumerico(Number(cliente.id))
    const errorEmail = validarEmail(cliente.email)
    const errorTelefono = validarTelefono(cliente.telefono)

    setErrores({
      nombre: errorNombre,
      id: errorId,
      email: errorEmail,
      telefono: errorTelefono,
    })

    if (errorNombre || errorId || errorEmail || errorTelefono) return

    if (editando) {
      const clientesEditados = clientes.map(clienteEditar => clienteEditar.id === cliente.id ? {
        ...clienteEditar,
        nombre: cliente.nombre,
        email: cliente.email,
        telefono: cliente.telefono
      }
        : clienteEditar)
      setClientes(clientesEditados)
      resetearCliente()
      setEditando(false)
      return
    }
    setClientes([...clientes, cliente])
    resetearCliente()
  }
  const handleEditar = (id: string) => {
    const editarCliente = clientes.find(cliente => cliente.id === id)

    if (!editarCliente)
      return

    setCliente(editarCliente)
    setEditando(true)
  }
  const handleEliminar = (id: string) => {
    setClientes(clientes.filter(cliente => cliente.id !== id))
  }

  const handleCancelarEdicion = () => {
    resetearCliente()
    setEditando(false)
  }
  const resetearCliente = () => {
    setCliente({
      id: "",
      nombre: "",
      email: "",
      telefono: ""
    })
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCliente({
      ...cliente,
      [name]: value
    })
  }

  return (
    <div>
      <header className="cliente-header">
        <div className="volver-menu-button" onClick={() => navigate("/")}>
          <FaArrowLeft /> Volver al Menú
        </div>
        <h1>Clientes</h1>
      </header>
      <div className="cliente-container">
        <div className="input-group">
          <label>ID Cliente:</label>
          <input
            disabled={editando}
            type="number"
            value={cliente.id}
            onChange={handleInputChange}
            placeholder="Ingrese el ID"
            min="1"
            name="id"
          />

          {errores?.id && <p className="input-error">{errores.id}</p>}
        </div>

        <div className="input-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={cliente.nombre}
            onChange={handleInputChange}
            placeholder="Ingrese el nombre"
            name="nombre"
          />

          {errores?.nombre && <p className="input-error">{errores.nombre}</p>}
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={cliente.email}
            onChange={handleInputChange}
            placeholder="Ingrese el email"
            name="email"
          />

          {errores?.email && <p className="input-error">{errores.email}</p>}
        </div>

        <div className="input-group">
          <label>Telefono:</label>
          <input
            type="tel"
            value={cliente.telefono}
            onChange={handleInputChange}
            placeholder="Ingrese el teléfono"
            name="telefono"
          />

          {errores?.telefono && <p className="input-error">{errores.telefono}</p>}
        </div>

        <div className="input-group">
          <button onClick={handleAgregar}>
            {editando ? "Actualizar" : "Ingresar"}
          </button>
          {
            editando && <button onClick={handleCancelarEdicion} className="btn-cancelar">
              Cancelar
            </button>
          }

        </div>
      </div>

      <table className="tabla-cliente">
        <thead>
          <tr>
            <th>ID Cliente</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefono}</td>
              <td>
                <button
                  className="btn-editar"
                  onClick={() => handleEditar(cliente.id)}
                >
                  Editar
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => handleEliminar(cliente.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FOOTER */}
      <footer className="cliente-footer">
        <p>© 2025 Papelería La Esquina del Papel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Cliente;

