export const validarIdNumerico = (idNumero: number) => {
    if (!idNumero) return "El id es requerido."
    if (isNaN(idNumero)) return "El id debe ser numerico"

    return null
}

export const validarNombre = (nombre: string) => {
    if (!nombre) return "El nombre es requerido."
    const regex = new RegExp("^[A-Za-z]+$")
    if (!regex.test(nombre)) return "El nombre solo puede contener letras."

    return null
}

export const validarEmail = (email: string) => {
    if (!email) return "El email es requerido."
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    if (!regex.test(email)) return "El email es invalido."

    return null
}

export const validarTelefono = (telefono: string) => {
    if (!telefono) return "El telefono es requerido."
    const regex = new RegExp(/^[0-9]{8}$/)
    if (!regex.test(telefono)) return "El telefono debe contener 8 digitos."

    return null
}