import axios from "axios";
require('dotenv').config()

class UserService {

  CONFIG = {
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('jwttoken')
     }
  };

  static setObject = (formData) => {
    return {
      "email": formData.email,
      "password": formData.password
    }
  }

  static _withBaseUrl(path = "") {
    return `http://localhost:3000/${path}`;
  }

  static getValues() {
    return axios(UserService._withBaseUrl("login"));
  }

  static login(formData) {
    var serviceObj = this.setObject(formData)
    return axios.post(UserService._withBaseUrl("login"), serviceObj, this.CONFIG)
  }

}

export default UserService
