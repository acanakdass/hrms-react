import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

function SignedIn(props) {
   return (
      <>
         <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1404479261566713856/_MklDkhx_400x400.jpg" />
         <Dropdown pointing="top left" text="Engin">
            <Dropdown.Menu>
               <Dropdown.Item text="Bilgilerim" icon="info" />
               <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
            </Dropdown.Menu>
         </Dropdown>
      </>
   )
}

export default SignedIn
