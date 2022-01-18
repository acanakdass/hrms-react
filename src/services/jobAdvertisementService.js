import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class JobAdvertisementService {
   baseUrl = BaseUrl + "/api/jobAdvertisements";

   getAll() {
      return axios.get(this.baseUrl + "/getall");
   }

   add(jobAdvertisement) {
      return axios.post(this.baseUrl + "/add", jobAdvertisement);
   }

   delete(jobAdvertId) {
      return axios.delete(this.baseUrl + "/delete?jobAdvertId=" + jobAdvertId);
   }

   getAllActive() {
      return axios.get(this.baseUrl + "/getallactive");
   }

   getAllByEmployerId(employerId) {
      return axios.get(this.baseUrl + "/getAllByEmployerId?employerId=" + employerId);
   }

   getAllActiveAndConfirmed() {
      return axios.get(this.baseUrl + "/getallactiveandconfirmed");
   }

   getAllActiveAndConfirmedSize() {
      return axios.get(this.baseUrl + "/getAllActiveAndConfirmedSize");
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
      return axios.post(this.baseUrl + "/setActive?jobAdvertisementId=" + id);
   }

   setConfirmedByJobAdvertisementId(jobAdvertId, systemEmployeeId) {
      return axios.post(this.baseUrl + "/setConfirmed", {
         "jobAdvertId": jobAdvertId,
         "systemEmployeeId": systemEmployeeId
      });
   }

   setPassiveByJobAdvertisementId(id) {
      return axios.post(this.baseUrl + "/setPassive?jobAdvertisementId=" + id);

   }

   //WorkType worktime
   getAllWorkTypes() {
      return axios.get(this.baseUrl + "/getallworktypes");
   }

   getAllWorkTimes() {
      return axios.get(this.baseUrl + "/getallworktimes");
   }
}