import React from 'react'
import { useSelector } from 'react-redux'
import { Divider, Header } from 'semantic-ui-react';
import JobAdvertCard from '../components/JobAdvert/JobAdvertCard';

function FavoriteAdverts() {

   const { favoriteAdverts } = useSelector(state => state.favorites);

   return (
      <div>
         <div style={{ padding: '3em 10em 3em 10em' }}>
            <Header textAlign='center' size='huge'>Favorite Job Advertisements</Header>
            <Divider />
            {favoriteAdverts.length == 0 ? <Header size='medium' textAlign='center'>No job advertisements in favorites</Header> : ''}
            {favoriteAdverts.map((advert) => (
               <JobAdvertCard advert={advert} />
            ))}
         </div>
      </div>
   )
}

export default FavoriteAdverts
