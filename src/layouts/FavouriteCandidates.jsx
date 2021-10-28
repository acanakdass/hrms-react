import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Divider, Header } from 'semantic-ui-react'
import CandidateCard from '../components/Candidate/CandidateCard';


function FavouriteCandidates() {

   const { favouriteCandidates } = useSelector(state => state.favorites);
   useEffect(() => {
      console.log(favouriteCandidates)
   }, [])
   return (
      <div>
         <Header textAlign='center' size='huge'>Favorite Candidates</Header>
         <Divider />

         {favouriteCandidates.length == 0 ? <Header size='medium' textAlign='center'>No candidates in favorites</Header> : ''}
         <Card.Group centered>
            {
               favouriteCandidates.map((candidate) => (
                  <CandidateCard candidate={candidate} />
               ))
            }
         </Card.Group>
      </div>
   )
}

export default FavouriteCandidates
