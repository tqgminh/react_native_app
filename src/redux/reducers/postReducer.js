import { SET_LIST_POST } from "../actions/types";

const initialState = {
  listPosts: [],
};


function postReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_POST:
      return { ...state, listPosts: action.payload };
    default:
      return state;
  }
}

export default postReducer;