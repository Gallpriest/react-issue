import { IS_ADMIN, ADD_ARTICLE } from './const';

const initialState = {
  isAdmin: false,
  tags: [
    { id: '1', name: 'ts' },
    { id: '2', name: 'js' },
    { id: '3', name: 'scss' },
    { id: '4', name: 'confirmed' },
  ],
};

const rootReducer = (state = initialState, action: any) => {
  if (action.type === IS_ADMIN) {
    return {...state, ...action.payload};
  }
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     arcitles: state.arcitles.concat(action.payload)
  //   })
  // }
  return state;
};

export default rootReducer;
