import axios from "axios";

export default class ResumeService {
   baseUrl = "http://localhost:8080/api/resumes";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }
   add(resume) {
      return axios.post(this.baseUrl + "/add", resume);
   }
}