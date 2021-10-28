import axios from "axios";

export default class JobTitleService {
   baseUrl = "http://localhost:8080/api/jobTitles";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }
   add(jobTitle) {
      return axios.post(this.baseUrl + "/add", jobTitle);
   }
}