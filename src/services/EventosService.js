import axios from "axios";
require('dotenv').config()

class EventosService {

  
  static CONFIG = {
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('jwttoken')
     }
  };

  static _withBaseUrl(path = "") {
    return `http://localhost:3000/${path}`;
  }

  static getValues() {
    return axios(EventosService._withBaseUrl("home"), this.CONFIG);
  }

}

export default EventosService
