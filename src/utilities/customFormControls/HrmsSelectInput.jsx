import { useField } from 'formik'
import React from 'react'
import { Form, FormField, Label, Radio, Select } from 'semantic-ui-react'

function HrmsSelectInput({ ...props }) {
   // console.log(props.width)
   const [field, meta] = useField(props)
   const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
      { key: 'o', text: 'Other', value: 'other' },
   ]
   return (
      // <div>

      // </div >
      <FormField width={props.width?.toString()} error={meta.touched && !!meta.error}>

         <Form.Field control={Select} options={options}  {...field} {...props} />

         {meta.touched && !!meta.error ? (
            <Label pointing basic color='red' content={meta.error}></Label>
         ) : null}
      </FormField>
   )
}

export default HrmsSelectInput
