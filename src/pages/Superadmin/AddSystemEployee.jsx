import React, { useState } from 'react'
import * as Yup from "yup";
import toast from 'react-hot-toast';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import { Formik } from 'formik'
import { Form as FormikForm } from 'formik';
import { Form, Button } from 'semantic-ui-react';
import SystemEmployeeService from '../../services/systemEmployeeService';
const AddSystemEployee = () => {


   const [isLoading, setIsLoading] = useState(false);



   const initialValues = { firstName: "", lastName: "", birthYear: "", email: "", identityNumber: "", password: "" }

   const schema = Yup.object({
      firstName: Yup.string().required("İsim alanı zorunludur"),
      lastName: Yup.string().required("Soyisim alanı zorunludur"),
      birthYear: Yup.number().required("Doğum Yılı alanı zorunludur"),
      email: Yup.string().email().required("Email alanı zorunludur"),
      identityNumber: Yup.string().required("Tc No Yılı alanı zorunludur"),
      password: Yup.string().min(8).required("Şifre alanı zorunludur"),
      passwordConfirm: Yup.string().min(8).required('Şifre Tekrar Alanı Zorunludur')
   });

   const handleSubmit = (values) => {
      console.log(values)
      setIsLoading(true);
      let systemEmployeeService = new SystemEmployeeService();
      systemEmployeeService.add(values).then(res => {
         if (res.data.success) {
            toast.success(res.data.message);
            // setAddedUserId(res.data.data);
            console.log(res.data)
            setIsLoading(false);
            // props.setstep('photo');
            // props.setAddedUser(res.data.data)
         } else {
            toast.error(res.data.message)
            setIsLoading(false)
         }
      }).finally(() => {
         setIsLoading(false)
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
                     <HrmsTextInput name="passwordConfirm" placeholder="Confirm Password" />
                  </Form.Group>
                  <Button fluid loading={isLoading} color="blue" type="submit">Sonraki</Button>
               </FormikForm>
            </Formik>
            {/* <Button fluid  >test</Button> */}
         </div>
      </div>
   )
}

export default AddSystemEployee
