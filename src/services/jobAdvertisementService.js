import axios from "axios";

export default class JobAdvertisementService {
   baseUrl = "http://localhost:8080/api/jobAdvertisements";

   getAll() {
      return axios.get(this.baseUrl + "/getall");
   }

   add(jobAdvertisement) {
      return axios.post(this.baseUrl + "/add", jobAdvertisement);
   }

   getAllActive() {
      return axios.get(this.baseUrl + "/getallactive");
   }

   getAllActiveAndConfirmed() {
      return axios.get(this.baseUrl + "/getallactiveandconfirmed");
   }

   getAllActiveAndConfirmedByPage(pageNo, pageSize) {
      return axios.get(this.baseUrl + `/getAllActiveAndConfirmedByPage?pageNo=${pageNo}&pageSize=${pageSize}`);
   }

   getAllActiveByCompanyName(companyName) {
      return axios.get(this.baseUrl + "/getAllActiveByCompanyName?companyName=" + companyName);
   }

   getAllActiveByAscReleaseDate() {
      return axios.get(this.baseUrl + "/getAllActiveByAscReleaseDate");
   }
   getAllActiveByDescReleaseDate() {
      return axios.get(this.baseUrl + "/getAllActiveByDescReleaseDate");
   }

   getByIdentityNumber(identityNumber) {
      return axios.get(this.baseUrl + "/getByIdentityNumber?identityNumber=" + identityNumber);
   }
   setActiveByJobAdvertisementId(id) {
      return axios.get(this.baseUrl + "/setActive?jobAdvertisementId=" + id);
   }

   setPassiveByJobAdvertisementId(id) {
      return axios.get(this.baseUrl + "/setPassive?jobAdvertisementId=" + id);
   }
}