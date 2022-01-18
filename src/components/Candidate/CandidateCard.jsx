import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Icon } from 'semantic-ui-react'

import toast, { Toaster } from 'react-hot-toast';
import { addCandidateToFavourites, removeCandidateFromFavourites } from '../../redux/store/actions/favouritesActions';


function CandidateCard({ candidate }) {

   const dispatch = useDispatch()

   const handleAddToFavs = (candidate) => {
      dispatch(addCandidateToFavourites(candidate))
      toast.success(candidate?.firstName + ' Successfully added to favorites!');
   }


   const handleRemoveFromFavs = (id) => {
      dispatch(removeCandidateFromFavourites(id))
      toast(candidate?.firstName + ' successfully removed from favorites!');
   }

   const { favouriteCandidates } = useSelector(state => state.favorites);

   const checkIfAddedToFavs = (id) => {
      let isExists = favouriteCandidates.find(c => c.id == id) != null;
      return isExists;
   }

   return (
      <Card
         className="textCenter"
         image={candidate?.photoUrl}
         header={candidate?.firstName + " " + candidate?.lastName}
         meta={candidate?.resume?.schools[0]?.department}
         description={(candidate?.resume?.coverLetter)?.substr(0, 100) + "..."}
         extra={(
            <>

               {/* <Button compact circular as={Link} to={`/candidates/${candidate?.id}`} color='blue' fluid >Review Resume</Button> */}
               <Button.Group fluid>
                  <Button onClick={() => checkIfAddedToFavs(candidate?.id) ? handleRemoveFromFavs(candidate?.id) : handleAddToFavs(candidate)} animated='vertical'>
                     <Button.Content style={{ color: checkIfAddedToFavs(candidate?.id) ? 'red' : 'rgb(34 133 208)' }} hidden> {checkIfAddedToFavs(candidate?.id) ? 'Remove from Favs' : 'Add to Favs'}</Button.Content>
                     <Button.Content visible>
                        <Icon color={checkIfAddedToFavs(candidate?.id) ? 'red' : 'blue'} name='favorite' />
                     </Button.Content>
                  </Button>
                  <Button as={Link} to={`/candidates/${candidate?.id}`} color='blue' animated='vertical'>
                     <Button.Content hidden>Review Resume</Button.Content>
                     <Button.Content visible>
                        <Icon name='address card' />
                     </Button.Content>
                  </Button>
               </Button.Group>
            </>
         )}
      />
   )
}

export default CandidateCard
