export const ADD_CANDIDATE_TO_FAVOURITES = "ADD_CANDIDATE_TO_FAVOURITES";
export const REMOVE_CANDIDATE_FROM_FAVOURITES = "REMOVE_CANDIDATE_FROM_FAVOURITES";
export const REMOVE_ADVERT_FROM_FAVOURITES = "REMOVE_ADVERT_FROM_FAVOURITES";
export const ADD_ADVERT_TO_FAVOURITES = "ADD_ADVERT_TO_FAVOURITES";

export function addCandidateToFavourites(candidate) {
   return {
      type: ADD_CANDIDATE_TO_FAVOURITES,
      payload: candidate
   }
}

export function removeCandidateFromFavourites(candidate) {
   return {
      type: REMOVE_CANDIDATE_FROM_FAVOURITES,
      payload: candidate
   }
}

export function addAdvertToFavourites(advert) {
   return {
      type: ADD_ADVERT_TO_FAVOURITES,
      payload: advert
   }
}

export function removeAdvertFromFavourites(advert) {
   return {
      type: REMOVE_ADVERT_FROM_FAVOURITES,
      payload: advert
   }
}