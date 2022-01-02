import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class CityService {
   baseUrl = BaseUrl + "/api/cities";

   getAll() {
      return axios.get(this.baseUrl + "/getAll");
   }

}