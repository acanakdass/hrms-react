import React from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Categories from './Categories'


import FavouriteCandidates from './FavouriteCandidates';
import { Toaster } from 'react-hot-toast';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import JobAdvertList from '../pages/JobAdvertisement/JobAdvertList';

import FavoriteAdverts from './FavoriteAdverts';
import CandidateList from '../pages/Candidate/CandidateList';
import CandidateDetail from '../pages/Candidate/CandidateDetail';
import CandidateRegister from '../pages/Candidate/CandidateRegister';
import { FriendList } from './FriendsList';

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
                  <Route exact path="/test" component={FriendList} />
                  <Route exact path="/candidate/register" component={CandidateRegister} />
               </Grid.Column>
            </Grid.Row>
         </Grid>


      </Container>
   )
}

export default Dashboard
