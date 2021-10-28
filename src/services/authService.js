import axios from "axios";

export default class AuthService {
   baseUrl = "http://localhost:8080/api/auth";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }

   add(employer) {
      return axios.post(this.baseUrl + "/ad", employer);
   }
}