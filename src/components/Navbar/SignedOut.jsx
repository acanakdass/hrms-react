import React from 'react'
import { Button, Dropdown, Image, Menu } from 'semantic-ui-react'
import { useHistory } from "react-router";

function SignedOut(props) {

   const history = useHistory();

   return (
      <>
         <Button onClick={props.signIn} >Giriş yap</Button>
         {/* <Button primary style={{ marginLeft: '0.5em' }}>Kayıt Ol</Button> */}
         <Dropdown style={{ marginLeft: '1em' }} text='Register'>
            <Dropdown.Menu>
               <Dropdown.Item onClick={() => history.push('/candidate/register')} text='As Candidate' />
               <Dropdown.Item onClick={() => history.push('/employer/register')} text='As Employer' />
            </Dropdown.Menu>
         </Dropdown>
      </>
   )
}

export default SignedOut
