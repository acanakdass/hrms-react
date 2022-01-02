import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class SystemEmployeeService {
   baseUrl = BaseUrl + "/api/systemEmployees";


   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }

   add(systemEmployee) {
      return axios.post(this.baseUrl + "/add", systemEmployee);
   }

   delete(id) {
      return axios.delete(this.baseUrl + "/delete?id=" + id);
   }

   getById(id) {
      return axios.get(this.baseUrl + "/getById?id=" + id);
   }

   getByIdentityNumber(identityNumber) {
      return axios.get(this.baseUrl + "/getByIdentityNumber?identityNumber=" + identityNumber);
   }

}