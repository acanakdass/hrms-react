import React from 'react'
import { Button, Dropdown, Image, Menu } from 'semantic-ui-react'

function SignedOut(props) {
   return (
      <>
         <Button onClick={props.signIn} primary>Giriş yap</Button>
         <Button primary style={{ marginLeft: '0.5em' }}>Kayıt Ol</Button>
      </>
   )
}

export default SignedOut
