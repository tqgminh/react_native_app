import { POST_LOGIN, SET_TOKEN, SET_PHONE, SET_USERNAME, SET_LOGIN, SET_ID, SET_AVATAR, SET_COVER_IMAGE } from "./types";
import axios from 'axios';
import { API_URL } from '../../api/config';
import ApiService from "../../api/APIService";
import { useSelector, useDispatch } from 'react-redux';

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const setId = id => dispatch => {
  dispatch({
    type: SET_ID,
    payload: id
  });
};

export const setLogin = isLogin => dispatch => {
  dispatch({
    type: SET_LOGIN,
    payload: isLogin
  });
};

export const setNumberPhone = phone => dispatch => {
  dispatch({
    type: SET_PHONE,
    payload: phone
  });
};

export const setUsername = username => dispatch => {
  dispatch({
    type: SET_USERNAME,
    payload: username
  });
};

export const setAvatar = avatar => dispatch => {
  dispatch({
    type: SET_AVATAR,
    payload:avatar 
  });
};

export const setCoverImage = coverImage => dispatch => {
  dispatch({
    type: SET_COVER_IMAGE,
    payload: coverImage
  });
};

export const login = async (data, dispatch) =>{
  let loginRs = await loginAPI(data.phone, data.password);
  if(loginRs.success){
    let showRs = await showAPI(loginRs.data.token);
    if(showRs.success){
      dispatch(setToken(loginRs.data.token));
      dispatch(setId(loginRs.data.data.id));
      dispatch(setNumberPhone(showRs.data.data.phonenumber));
      dispatch(setUsername(showRs.data.data.username));
      dispatch(setAvatar(showRs.data.data.avatar));
      dispatch(setCoverImage(showRs.data.data.cover_image));
      dispatch(setLogin(true));
     }
    return showRs;
  } else return loginRs;  
};


export async function loginAPI(phone, password) {
  return new Promise(async resolve => {
    await ApiService.post(API_URL + '/users/login', {
      phonenumber: phone,
      password: password,
    })
      .then(response => {
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


  export async function showAPI(token) {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return new Promise(async resolve => {
      await axios.get(API_URL + '/users/show', config)
        .then(response => {
          return resolve({
            success: true,
            data: response.data,
            error: null,
          });
        })
        .catch(error => {
          return resolve({
            success: false,
            data: null,
            error: error.response,
          });
        });
    });
}
