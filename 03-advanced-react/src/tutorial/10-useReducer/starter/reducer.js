import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './action';
import { data } from '../../../data';

const reducer = (state, action) => {
    console.log(action);
    if (action.type === CLEAR_LIST) {
      return { ...state, people: [] };
    }
    if(action.type === RESET_LIST){
      return {...state, people: data}
    }
    if (action.type === REMOVE_ITEM) {
      const newPeople  = state.people.filter((person) => person.id !== action.payload);
      return {...state, people: newPeople};
    }
  
    throw new Error(`No Matching "${action.type}" - action type`);
  };

    export default reducer;