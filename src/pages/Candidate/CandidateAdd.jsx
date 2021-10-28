import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { FormField, Button, Label } from 'semantic-ui-react';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
function CandidateAdd() {

   const initialValues = { firstName: "", lastName: "" }

   const schema = Yup.object({
      firstName: Yup.string().required("İsim alanı zorunludur"),
      lastName: Yup.string().required("Soyisim alanı zorunludur"),
      birthYear: Yup.number().required("Doğum Yılı alanı zorunludur")
   })
   return (
      <div>
         <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
               console.log(values)
            }}
         >
            <Form className="ui form">
               <HrmsTextInput name="firstName" placeholder="Adı" />
               {/* <FormField>
                  <Field name="firstName" placeholder="Adı" ></Field>
                  <ErrorMessage name="firstName" render={(error) => (
                     <Label pointing basic color="red" content={error}></Label>
                  )
                  } ></ErrorMessage>
               </FormField> */}
               <FormField>
                  <Field name="lastName" placeholder="Soyadı" ></Field>
                  <ErrorMessage name="lastName" render={(error) => (
                     <Label pointing basic color="red" content={error}></Label>
                  )
                  } ></ErrorMessage>
               </FormField>
               <FormField>
                  <Field name="birthYear" placeholder="Doğum Yılı" ></Field>
                  <ErrorMessage name="birthYear" render={(error) => (
                     <Label pointing basic color="red" content={error}></Label>
                  )
                  } ></ErrorMessage>
               </FormField>
               <Button color="green" type="submit">Ekle</Button>
            </Form>
         </Formik>
      </div>
   )
}

export default CandidateAdd
