import { SET_LIST_FRIEND } from "./types";

export const setListFriendState = friends => dispatch => {
  dispatch({
    type: SET_LIST_FRIEND,
    payload: friends
  });
};