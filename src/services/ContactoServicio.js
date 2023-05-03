import axios from "axios";

const CONTACTO_API_BASE_URL = "http://localhost:8080/api/v1/save_contact";

class ContactoServicio {
    saveContacto(contacto) {
        return axios.post(CONTACTO_API_BASE_URL, contacto);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ContactoServicio();