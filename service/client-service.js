
//Llamada al Back
//Fetch API
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientService = {
  listaClientes,
};

