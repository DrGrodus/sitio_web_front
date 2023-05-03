import axios from "axios";

const USUARIO_API_BASE_URL = "http://localhost:8080/api/v1/save_usuario";

class UsuarioServicio {
    saveUsuario(usuario) {
        return axios.post(USUARIO_API_BASE_URL, usuario);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UsuarioServicio();