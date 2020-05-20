import axios from "axios";
require('dotenv').config()

class TesteIntegracaoService {

  static _withBaseUrl(path = "") {
    alert(`${process.env.BACKEND_SERVER_ADDRESS}`)
    return `https://localhost:44394/api/v1/${path}`;
  }

  static getValues() {
    return axios(TesteIntegracaoService._withBaseUrl("weatherforecast"));
  }

}

export default TesteIntegracaoService
