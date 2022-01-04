
import { ErrorMessage, Field, Formik } from 'formik'
import { Form as FormikForm } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Divider, Form, FormField, Header, Button } from 'semantic-ui-react';
import * as Yup from "yup";
import CandidateService from '../../services/candidateService';
import ImageService from '../../services/imageService';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';

function CandidateAddInfos(props) {


   const [isLoading, setIsLoading] = useState(false);
   const [password, setPassword] = useState('');



   const initialValues = { firstName: "", lastName: "", birthYear: "", email: "", identityNumber: "", password: "" }

   const schema = Yup.object({
      firstName: Yup.string().required("İsim alanı zorunludur"),
      lastName: Yup.string().required("Soyisim alanı zorunludur"),
      email: Yup.string().email().required("Email alanı zorunludur"),
      password: Yup.string().min(8).required("Şifre alanı zorunludur"),
      // passwordConfirm: Yup.string().min(8).required('Şifre Tekrar Alanı Zorunludur')
   });

   const handleSubmit = (values) => {
      setIsLoading(true);
      console.log(values)
      let candidateService = new CandidateService();
      candidateService.add(values).then(res => {
         if (res.data.success) {
            toast.success(res.data.message);
            // setAddedUserId(res.data.data);
            setIsLoading(false);
            props.setstep('photo');
            props.setAddedUser(res.data.data)
         } else {
            toast.error(res.data.message)
            setIsLoading(false)
         }
      });
   }

   return (
      <div style={{ margin: '2em 10em' }}>
         <div style={{ border: '0,5px solid', borderColor: 'lightgray', padding: '3em' }}>
            <Formik
               initialValues={initialValues}
               validationSchema={schema}
               onSubmit={(values) => handleSubmit(values)}>
               <FormikForm className="ui form">
                  <Form.Group widths="equal">
                     <HrmsTextInput width="8" name="firstName" placeholder="Adı" />
                     <HrmsTextInput width="8" name="lastName" placeholder="Soyadı" />
                  </Form.Group>
                  <Form.Group>
                     <HrmsTextInput width="6" name="email" placeholder="Email" />
                     <HrmsTextInput width="6" name="identityNumber" placeholder="Identity Number" />
                     <HrmsTextInput width="6" name="birthYear" placeholder="Birth Year" />
                  </Form.Group>
                  <Form.Group widths='equal'>
                     <HrmsTextInput name="password" placeholder="Password" />
                     {/* <HrmsTextInput name="passwordConfirm" placeholder="Confirm Password" /> */}
                  </Form.Group>
                  <Button fluid loading={isLoading} color="blue" type="submit">Sonraki</Button>
               </FormikForm>
            </Formik>
            {/* <Button fluid  >test</Button> */}
         </div>
      </div>
   )
}

export default CandidateAddInfos
