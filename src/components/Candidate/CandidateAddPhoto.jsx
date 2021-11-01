
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FormField, Button } from 'semantic-ui-react';
import ImageService from '../../services/imageService';
function CandidateAddPhoto(props) {

   const [photoFile, setPhotoFile] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   const handleUpload = () => {
      setIsLoading(true)
      console.log(props.userId)
      if (photoFile != null) {
         let imageService = new ImageService();
         let formData = new FormData();
         formData.append("file", photoFile);
         formData.append('userId', props.userId);
         // toast.success(addedUserId);
         imageService.upload(formData).then(res => {
            toast.success(res.data.message);
            setIsLoading(false);
            props.setstep('resume')
         });
      } else {
         toast("Bir sorun oluştu");
         setIsLoading(false)
      }
   }

   return (
      <div style={{ margin: '8em 10em' }}>
         <FormField >
            <input onChange={(e) => setPhotoFile(e.target.files[0])} name="photo" type='file'></input>
         </FormField>
         <br />
         <br />
         <Button loading={isLoading} fluid color='blue' onClick={handleUpload} >Kaydet</Button>
      </div>
   )
}

export default CandidateAddPhoto
