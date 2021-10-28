import React from 'react'
import { Button, Divider, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Login() {
   return (
      <div>
         <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 350 }}>
               <Image src="https://lh3.googleusercontent.com/proxy/X0SyzpqwGGdRMrBIxVWlSAlvY_quoRmGXmsK0sZ-gFI09Lh9-h2fYTzrZGBxcCj1LTxi_jQ098XHnAhPMMIGottqMAuPcVP4p47oFRzQLg" />
               <Header as='h1' color='blue' textAlign='center'>
                  Log-in to your account
               </Header>
               <Form size='large'>
                  <Segment stacked>
                     <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                     <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                     />

                     <Button color='blue' fluid size='large'>
                        Login
                     </Button>
                  </Segment>
               </Form>
               <Message>
                  New to us? <a href='#'>Sign Up</a>
               </Message>
            </Grid.Column>
         </Grid>
      </div>
   )
}

export default Login
