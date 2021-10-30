import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'

import { useHistory } from "react-router";
import SignedIn from '../components/Navbar/SignedIn';
import SignedOut from '../components/Navbar/SignedOut';

function Navi() {

   const [isAuthenticated, setIsAuthenticated] = useState(true)
   const history = useHistory();

   function handleSignOut() {
      setIsAuthenticated(false);
      history.push("/")
   }

   function handleSignIn() {
      setIsAuthenticated(true)
      history.push("/auth/login")
   }

   return (
      <div style={{ marginBottom: '5em' }}>
         <Menu fixed="top" inverted >
            <Container>
               <Menu.Item as={Link} to="/" name='home' />
               <Menu.Item as={Link} to="/candidate/favourites" name="Favourite Candidates" />
               <Menu.Item as={Link} to="/jobadverts" name="Job Advertisements" />
               <Menu.Item as={Link} to="/candidateAdd" name="Add Candidate" />
               <Dropdown text='System Employee' pointing className='link item'>
                  <Dropdown.Menu>
                     <Dropdown.Header>Job Advertisements</Dropdown.Header>
                     <Dropdown.Item>
                        <Dropdown text='Clothing'>
                           <Dropdown.Menu>
                              <Dropdown.Header>Mens</Dropdown.Header>
                              <Dropdown.Item>Shirts</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Header>Womens</Dropdown.Header>
                              <Dropdown.Item>Dresses</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </Dropdown.Item>
                     <Dropdown.Item>Home Goods</Dropdown.Item>
                     <Dropdown.Item>Bedroom</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Header>Favorites</Dropdown.Header>
                     <Dropdown.Item as={Link} to="/candidate/favourites">Candidates</Dropdown.Item>
                     <Dropdown.Item as={Link} to="/jobAdverts/favourites">Job Advertisements</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Header>Auth</Dropdown.Header>
                     <Dropdown.Item as={Link} to="/candidate/register">Register</Dropdown.Item>
                     <Dropdown.Item as={Link} to="/jobAdverts/login">Sign In</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Menu.Item position='right'>
                  {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
               </Menu.Item>

            </Container>
         </Menu>
      </div>
   )
}

export default Navi
