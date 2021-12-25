import { SET_LIST_POST } from "./types";

export const setListP = listPosts => dispatch => {
  dispatch({
    type: SET_LIST_POST,
    payload: listPosts
  });
};