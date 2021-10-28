import { ADD_ADVERT_TO_FAVOURITES, ADD_CANDIDATE_TO_FAVOURITES, REMOVE_ADVERT_FROM_FAVOURITES, REMOVE_CANDIDATE_FROM_FAVOURITES } from '../actions/favouritesActions';
import { favoriteAdverts, favouriteCandidates } from '../initialValues/favourites';
const initialState = {
   favouriteCandidates: favouriteCandidates,
   favoriteAdverts: favoriteAdverts
}
export default function favouritesReducer(state = initialState, { type, payload }) {
   switch (type) {
      case ADD_CANDIDATE_TO_FAVOURITES:
         let candidate = state.favouriteCandidates.find(c => c.id === payload.id);
         if (candidate)
            return state;
         var newState = [...state.favouriteCandidates, payload]
         return { ...state, favouriteCandidates: newState };

      case REMOVE_CANDIDATE_FROM_FAVOURITES:
         var newState = { ...state, favouriteCandidates: state.favouriteCandidates.filter(c => c.id !== payload) }
         return newState;

      //ADVERT
      case ADD_ADVERT_TO_FAVOURITES:
         let advert = state.favoriteAdverts.find(c => c.id === payload.id);
         if (advert)
            return state;
         var newState = [...state.favoriteAdverts, payload]
         return { ...state, favoriteAdverts: newState };

      case REMOVE_ADVERT_FROM_FAVOURITES:
         var newState = { ...state, favoriteAdverts: state.favoriteAdverts.filter(c => c.id !== payload) }
         return newState;

      default:
         return state;
   }
}