import axios from "axios";
import BaseUrl from "./BaseUrl";

export default class ImageService {
   baseUrl = BaseUrl + "/api/cloudinary";

   upload(formData) {
      const config = {
         headers: {
            "content-type": "multipart/form-data"
         }
      };
      console.log(formData);
      return axios.post(this.baseUrl + "/upload", formData, config);
   }

   getByIdentityNumber(identityNumber) {
      return axios.get(this.baseUrl + "/getByIdentityNumber?identityNumber=" + identityNumber);
   }
}