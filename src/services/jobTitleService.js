import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class JobTitleService {
   baseUrl = BaseUrl + "/api/jobTitles";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }
   add(jobTitle) {
      return axios.post(this.baseUrl + "/add", jobTitle);
   }
}