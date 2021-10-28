import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'

function HrmsTextInput({ ...props }) {
   // console.log(props)
   const [field, meta] = useField(props)
   console.log(field)
   return (
      <FormField error={meta.touched && meta.error}>
         <input {...field} {...props} />
      </FormField>
   )
}

export default HrmsTextInput
