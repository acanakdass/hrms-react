
import { Formik } from 'formik'
import { Form as FormikForm } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Form, Button } from 'semantic-ui-react';
import * as Yup from "yup";
import HrmsTextInput from '../../utilities/customFormControls/HrmsNumberInput';
import EmployerService from '../../services/employerService';

function EmployerAddInfos(props) {


   const [isLoading, setIsLoading] = useState(false);



   const initialValues = { companyName: "", email: "", phoneNumber: "", webAddress: "", password: "" }

   const schema = Yup.object({
      companyName: Yup.string().required("Please provide a company name"),
      phoneNumber: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
      webAddress: Yup.string().required(),
   });

   const handleSubmit = (values) => {
      setIsLoading(true);
      console.log(JSON.stringify(values))
      let employerService = new EmployerService();
      employerService.add(JSON.stringify(values)).then(res => {
         if (res.data.success) {
            toast.success(res.data.message);
            console.log(res.data)
            // setAddedUserId(res.data.data);
            setIsLoading(false);
            // props.setstep('photo');
            // props.setAddedUser(res.data.data)
         } else {
            console.log(res.data)
            toast.error(res.data.message)
            setIsLoading(false)
         }
      }).catch(er => {
         // toast.error(er)
         console.log('er')
         console.log(er)
         setIsLoading(false)
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
                     <HrmsTextInput width="8" name="companyName" placeholder="Company Name" />
                     <HrmsTextInput width="8" name="webAddress" placeholder="Web Address" />
                  </Form.Group>
                  <Form.Group>
                     <HrmsTextInput width="6" name="email" placeholder="Email" />
                     <HrmsTextInput width="6" name="phoneNumber" placeholder="Phone Number" />
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

export default EmployerAddInfos
