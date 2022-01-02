import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class ResumeService {
   baseUrl = BaseUrl + "/api/resumes";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }
   add(resume) {
      return axios.post(this.baseUrl + "/add", resume, {
         headers: {
            "Content-Type": "application/json"
         }
      })
   }
}