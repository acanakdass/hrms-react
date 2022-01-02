import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class EmployerService {
   baseUrl = BaseUrl + "/api/employers";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }

   add(employer) {
      return axios.post(this.baseUrl + "/ad", employer);
   }
}