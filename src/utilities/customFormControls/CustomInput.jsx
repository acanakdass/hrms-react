import React from 'react'
import { Form } from 'semantic-ui-react'

function CustomInput({ ...props }) {
   // console.log(props.width)
   return (
      // <div>

      // </div >
      <Form.Input {...props} />

   )
}

export default CustomInput
