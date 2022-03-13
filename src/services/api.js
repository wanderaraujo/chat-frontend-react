import axios from "axios";

var BASE_URL = "https://chat-backend-nodejs-ws.herokuapp.com/api";

export const obterSalas = async (sala) => {
  return new Promise((resolve) =>
    axios
      .get(`${BASE_URL}/sala/obter-salas${sala}`)
      .then((resp) => resolve(resp.data))
  );
};

export const loginUsuario = async (usuario) => {
  return new Promise((resolve, reject) =>
    axios
      .post(`${BASE_URL}/usuario/login`, {
        nome: usuario.nome,
        nickname: usuario.nickname,
      })
      .then((resp) => resolve(resp))
      .catch((error) => {
        // console.log(error.response)
        resolve(error.response);
      })
  );
};

export const obterMensagensSala = async (sala) => {
  return new Promise((resolve, reject) =>
    axios
      .get(`${BASE_URL}/mensagem/obter-mensagens/${sala.id}`)
      .then((resp) => resolve(resp))
      .catch((error) => {
        // console.log(error.response)
        resolve(error.response);
      })
  );
};

export const enviarNovaMensagem = async (objMensagem) => {
  return new Promise((resolve, reject) =>
    axios
      .post(`${BASE_URL}/mensagem/nova-mensagem`, {
        objMensagem,
      })
      .then((resp) => resolve(resp))
      .catch((error) => {
        // console.log(error.response)
        resolve(error.response);
      })
  );
};

export const setStatusUsuario = async (usuario, status) => {
  return new Promise((resolve, reject) =>
    axios
      .patch(`${BASE_URL}/usuario/status`, {
        id_usuario: usuario.id,
        nome: usuario.nome,
        nickname: usuario.nickname,
        status: status,
      })
      .then((resp) => resolve(resp))
      .catch((error) => {
        console.log(error.response.data);
        resolve(error.response);
      })
  );
};
