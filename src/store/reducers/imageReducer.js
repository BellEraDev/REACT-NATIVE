import {
  ADD_IMAGE,
  DELETE_IMAGE,
  LINK_PAGE,
  ADD_ALERT,
} from '../actions/actionTypes';
const initialState = {
  images: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      const result = {
        ...state,
        images: state.images.concat({
          image: action.image,
          firstname: action.firstname,
          lastname: action.lastname,
          email: action.email,
          age: action.age,
          key: Math.random().toString(),
        }),
      };

      return result;
    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.key != action.imageKey),
      };
    case LINK_PAGE:
      const gopage = {
        ...state,
      };
      return gopage;
    case ADD_ALERT:
      const alertDi = {
        ...state,
      };
      return alertDi;
    default:
      return state;
  }
};

export default reducer;
