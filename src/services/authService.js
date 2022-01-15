import axios from "axios";
import BaseUrl from "./BaseUrl";
export default class AuthService {
   baseUrl = BaseUrl + "/api";

   login(formData) {
      console.log(formData)
      return axios.post(this.baseUrl + "/login", formData);
   }


   getUserByToken(token) {
      return axios.get(this.baseUrl + "/auth/getUserByToken?token=" + token);
   }
}