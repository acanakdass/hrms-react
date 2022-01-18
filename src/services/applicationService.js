import axios from "axios";
import BaseUrl from "./BaseUrl";
export default class ApplicationService {
   baseUrl = BaseUrl + "/api/applications";

   add(advertId, candidateId) {
      return axios.post(this.baseUrl + "/add?candidateId=" + candidateId + "&jobAdvertId=" + advertId);
   }
   getByAdvertId(advertId) {
      return axios.get(this.baseUrl + "/getByAdvertId?advertId=" + advertId);
   }
}
