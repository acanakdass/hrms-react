import React from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Categories from './Categories'

import CandidateList from '../pages/CandidateList';
import CandidateDetail from '../pages/CandidateDetail';
import FavouriteCandidates from './FavouriteCandidates';
import { Toaster } from 'react-hot-toast';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import JobAdvertList from '../pages/JobAdvertisement/JobAdvertList';
import CandidateAdd from '../pages/Candidate/CandidateAdd';
import FavoriteAdverts from './FavoriteAdverts';

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
                  <Route exact path="/candidateAdd" component={CandidateAdd} />
               </Grid.Column>
            </Grid.Row>
         </Grid>


      </Container>
   )
}

export default Dashboard