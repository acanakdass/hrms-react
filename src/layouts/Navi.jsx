import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'

import { useHistory } from "react-router";
import SignedIn from '../components/Navbar/SignedIn';
import SignedOut from '../components/Navbar/SignedOut';
import AuthService from '../services/authService';
import { useEffect } from 'react';

function Navi() {

   const [currentUser, setCurrentUser] = useState(null)

   const [isAuthenticated, setIsAuthenticated] = useState(true)
   const history = useHistory();
   const authService = new AuthService()

   const checkIsAuthenticated = () => {
      let token = localStorage.getItem('bearer')
      if (token != undefined) {
         authService.getUserByToken(token).then(res => {
            console.log(res.data)
            setCurrentUser(res.data.data)
         }).catch(er => {
            console.log(er)
         })
      }
   }

   function handleSignOut() {
      setIsAuthenticated(false);
      history.push("/")
   }

   function handleSignIn() {
      setIsAuthenticated(true)
      history.push("/auth/login")
   }


   useEffect(() => {
      checkIsAuthenticated()
   }, [])
   return (
      <div style={{ marginBottom: '5em' }}>
         <Menu fixed="top" inverted >
            <Container>
               <Menu.Item as={Link} to="/" name='home' />
               <Menu.Item as={Link} to="/candidate/favourites" name="Favourite Candidates" />
               <Menu.Item as={Link} to="/jobadverts" name="Job Advertisements" />
               <Menu.Item as={Link} to="/candidate/register" name="Add Candidate" />
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
               <Dropdown text='Admin' pointing className='link item'>
                  <Dropdown.Menu>
                     <Dropdown.Header>Candidates</Dropdown.Header>
                     {/* <Dropdown.Item>
                        <Dropdown text='Clothing'>
                           <Dropdown.Menu>
                              <Dropdown.Header>Mens</Dropdown.Header>
                              <Dropdown.Item>Shirts</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Header>Womens</Dropdown.Header>
                              <Dropdown.Item>Dresses</Dropdown.Item>
                           </Dropdown.Menu>
                           </Dropdown>
                        </Dropdown.Item> */}
                     <Dropdown.Item as={Link} to="/admin/candidates/list">Manage Candidates</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Header>System Employee</Dropdown.Header>
                     {/* <Dropdown.Item>
                        <Dropdown text='Add'>
                           <Dropdown.Menu>
                              <Dropdown.Header>Add System Employee</Dropdown.Header>
                              <Dropdown.Item>Shirts</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Header>Womens</Dropdown.Header>
                              <Dropdown.Item>Dresses</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </Dropdown.Item> */}
                     <Dropdown.Item as={Link} to="/admin/add/systememployee">Add System Employee</Dropdown.Item>
                     <Dropdown.Item as={Link} to="/admin/systememployees/list">Manage System Employees</Dropdown.Item>

                     <Dropdown.Header>Employer</Dropdown.Header>
                     <Dropdown.Item as={Link} to="/admin/add/systememployee">Add Job Advertisement</Dropdown.Item>
                     <Dropdown.Item as={Link} to="/admin/systememployees/list">Manage Job Advertisements</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Menu.Item position='right'>
                  {isAuthenticated ? <SignedIn currentUser={currentUser} signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
               </Menu.Item>

            </Container>
         </Menu>
      </div>
   )
}

export default Navi
