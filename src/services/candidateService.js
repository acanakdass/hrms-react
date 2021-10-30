import axios from "axios";

export default class CandidateService {
   baseUrl = "http://localhost:8080/api/candidates";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }

   add(candidate) {
      return axios.post(this.baseUrl + "/add", candidate);
   }

   getById(id) {
      return axios.get(this.baseUrl + "/getById?id=" + id);
   }

   getByIdentityNumber(identityNumber) {
      return axios.get(this.baseUrl + "/getByIdentityNumber?identityNumber=" + identityNumber);
   }
}