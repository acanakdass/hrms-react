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
   const [userRole, setUserRole] = useState()
   const [isAuthenticated, setIsAuthenticated] = useState(true)
   const history = useHistory();
   const authService = new AuthService()

   const checkIsAuthenticated = () => {
      let token = localStorage.getItem('bearer')
      if (token != undefined) {
         authService.getUserByToken(token).then(res => {
            setCurrentUser(res.data.data)
            setUserRole(res.data.data.roles[0]?.name)
            setIsAuthenticated(true)

            if (res.data.data.roles[0]?.name == "candidate_role")
               history.push('/jobAdverts')
         }).catch(er => {
            console.log(er)
            setIsAuthenticated(false)
         })
      }
      setIsAuthenticated(false)
   }

   function handleSignOut() {
      setIsAuthenticated(false);
      localStorage.removeItem('bearer')
      window.location.href = "/auth/login"
   }

   function handleSignIn() {
      history.push("/auth/login")
   }


   useEffect(() => {
      checkIsAuthenticated()
   }, [])

   const employerMenu = () => {
      if (userRole == "employer_role") {
         return (
            <Dropdown text='Employer' pointing className='link item'>
               <Dropdown.Menu>
                  <Dropdown.Header>Job Advertisements</Dropdown.Header>
                  <Dropdown.Item as={Link} to="/admin/add/jobadvert">Create Job Advertisement</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/employer/myjobadverts">My Job Advertisements</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Candidates</Dropdown.Header>
                  <Dropdown.Item as={Link} to="/candidates">All Candidates</Dropdown.Item>

               </Dropdown.Menu>
            </Dropdown>

         )
      }
      return null;
   }

   const systemEmployeeMenu = () => {
      if (userRole == "systememployee_role") {
         return (
            <Dropdown text='System Employee' pointing className='link item'>
               <Dropdown.Menu>
                  <Dropdown.Header>Job Advertisements</Dropdown.Header>
                  <Dropdown.Item as={Link} to="/admin/jobAdverts/list">Manage Job Advertisements</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Candidates</Dropdown.Header>
                  <Dropdown.Item as={Link} to="/admin/candidates/list">Manage Candidates</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>

         )
      }
      return null;
   }


   return (
      <div style={{ marginBottom: '5em' }}>
         <Menu fixed="top" inverted >
            <Container>
               <Menu.Item as={Link} to="/" name='home' />
               <Menu.Item as={Link} to="/jobadverts" name="Job Advertisements" />

               <Dropdown text='Favorites' pointing className='link item'>
                  <Dropdown.Menu>
                     <Dropdown.Header>Favorites</Dropdown.Header>
                     <Dropdown.Item as={Link} to="/candidate/favourites">Candidates</Dropdown.Item>
                     <Dropdown.Item as={Link} to="/jobAdverts/favourites">Job Advertisements</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>



               {employerMenu()}
               {systemEmployeeMenu()}

               <Dropdown text='Admin' pointing className='link item'>
                  <Dropdown.Menu>
                     <Dropdown.Header>Candidates</Dropdown.Header>
                     <Dropdown.Item as={Link} to="/admin/candidates/list">Manage Candidates</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Header>System Employee</Dropdown.Header>
                     <Dropdown.Item as={Link} to="/admin/add/systememployee">Add System Employee</Dropdown.Item>
                     <Dropdown.Item as={Link} to="/admin/systememployees/list">Manage System Employees</Dropdown.Item>
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
