import { useField } from 'formik'
import React from 'react'
import { Dropdown, Form, FormField, Label, Radio, Select } from 'semantic-ui-react'

function CustomDropdownInput({ ...props }) {

   // <div>

   // </div >
   // <FormField width={props.width?.toString()} error={meta.touched && !!meta.error}>

   //    <Form.Field control={Select} options={options}  {...field} {...props} />

   //    {meta.touched && !!meta.error ? (
   //       <Label pointing basic color='red' content={meta.error}></Label>
   //    ) : null}
   // </FormField>

   return (
      // <div>

      // </div >
      <FormField width={props.width?.toString()} >

         <label>{props.label?.toString()}</label>

         <Dropdown

            clearable
            fluid
            search
            selection
            options={props.options}

            {...props} />
      </FormField>
   )
}

export default CustomDropdownInput
