import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class CandidateService {
   baseUrl = BaseUrl + "/api/candidates";


   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }

   add(candidate) {
      return axios.post(this.baseUrl + "/add", candidate, {
         headers: {
            "Content-Type": "application/json"
         }
      });
   }

   delete(id) {
      console.log(id)
      return axios.post(this.baseUrl + "/delete?id=" + id);
   }

   getById(id) {
      return axios.get(this.baseUrl + "/getById?id=" + id);
   }

   getByIdentityNumber(identityNumber) {
      return axios.get(this.baseUrl + "/getByIdentityNumber?identityNumber=" + identityNumber);
   }

}