import React from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Categories from './Categories'


import FavouriteCandidates from './FavouriteCandidates';
import { Toaster } from 'react-hot-toast';
import JobAdvertList from '../pages/JobAdvertisement/JobAdvertList';

import FavoriteAdverts from './FavoriteAdverts';
import CandidateList from '../pages/Candidate/CandidateList';
import CandidateDetail from '../pages/Candidate/CandidateDetail';
import CandidateRegister from '../pages/Candidate/CandidateRegister';
import AdminCandidatesList from '../components/Candidate/Admin/AdminCandidatesList';
import AddSystemEployee from '../pages/Superadmin/AddSystemEployee';
import ListSystemEmployees from '../pages/Superadmin/ListSystemEmployees';
import AdminJobAdvertsList from '../components/Candidate/Admin/AdminJobAdvertsList';
import AddJobAdvertisement from '../pages/Superadmin/AddJobAdvertisement';
import EmployerRegister from '../pages/EmployerRegister';
import MyJobAdvertsList from '../components/Employer/MyJobAdvertsList';
import AppliedCandidatesList from '../components/Employer/AppliedCandidatesList';

function Dashboard() {
   return (
      <Container>
         <Grid>
            <Grid.Row>
               {/* <Grid.Column width={4}>
                  <Categories />
               </Grid.Column> */}
               <Grid.Column width={16} >
                  <Toaster />
                  <Route exact path="/" component={CandidateList} />
                  <Route exact path="/candidates" component={CandidateList} />
                  <Route exact path="/candidates/:id" component={CandidateDetail} />
                  <Route exact path="/candidate/favourites" component={FavouriteCandidates} />
                  <Route exact path="/jobAdverts/favourites" component={FavoriteAdverts} />
                  <Route exact path="/jobadverts" component={JobAdvertList} />
                  <Route exact path="/candidate/register" component={CandidateRegister} />
                  <Route exact path="/admin/candidates/list" component={AdminCandidatesList} />
                  <Route exact path="/admin/systememployees/list" component={ListSystemEmployees} />
                  <Route exact path="/admin/jobAdverts/list" component={AdminJobAdvertsList} />
                  <Route exact path="/admin/add/systememployee" component={AddSystemEployee} />
                  <Route exact path="/admin/add/jobadvert" component={AddJobAdvertisement} />

                  <Route exact path="/employer/register" component={EmployerRegister} />
                  <Route exact path="/employer/myjobadverts" component={MyJobAdvertsList} />
                  <Route exact path="/employer/advert/applications/:advertId" component={AppliedCandidatesList} />
               </Grid.Column>
            </Grid.Row>
         </Grid>


      </Container>
   )
}

export default Dashboard
