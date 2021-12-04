import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

function HrmsTextInput({ ...props }) {
   // console.log(props.width)
   const [field, meta] = useField(props)
   return (
      // <div>

      // </div >
      <FormField width={props.width?.toString()}
         error={meta.touched && !!meta.error}>
         <label>{props.label?.toString()}</label>
         <input {...field} {...props} />
         {meta.touched && !!meta.error ? (
            <Label pointing basic color='red' content={meta.error}></Label>
         ) : null}
      </FormField>
   )
}

export default HrmsTextInput
