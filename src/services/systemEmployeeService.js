import axios from "axios";

export default class SystemEmployeeService {
   baseUrl = "http://localhost:8080/api/systemEmployees";


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