import { SET_LIST_CHAT, SET_LIST_PROFILE_CHAT } from "./types";

export const setListChatState = listChats => dispatch => {
  dispatch({
    type: SET_LIST_CHAT,
    payload: listChats
  });
};

export const setListProfileChatState = listProfileChats => dispatch => {
    dispatch({
      type: SET_LIST_PROFILE_CHAT,
      payload: listProfileChats
    });
  };
  



