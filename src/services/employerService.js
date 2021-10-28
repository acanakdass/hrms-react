import axios from "axios";

export default class EmployerService {
   baseUrl = "http://localhost:8080/api/employers";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }

   add(employer) {
      return axios.post(this.baseUrl + "/ad", employer);
   }
}