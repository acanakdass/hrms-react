import { useField } from 'formik'
import React from 'react'
import { Form, FormField, Label } from 'semantic-ui-react'

function CustomTextArea({ ...props }) {

   return (

      <FormField width={props.width?.toString()}>
         <Form.TextArea  {...props} />
      </FormField>
   )
}

export default CustomTextArea
