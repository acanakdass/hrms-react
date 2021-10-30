import axios from "axios";

export default class ImageService {
   baseUrl = "http://localhost:8080/api/cloudinary";

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