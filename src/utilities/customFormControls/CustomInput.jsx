import { useField } from 'formik'
import React from 'react'
import { Form, FormField, Label } from 'semantic-ui-react'

function CustomInput({ ...props }) {
   // console.log(props.width)
   return (
      // <div>

      // </div >
      <Form.Input {...props} />

   )
}

export default CustomInput
