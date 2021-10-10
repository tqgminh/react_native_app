import { POST_LOGIN, SET_TOKEN, SET_PHONE, SET_USERNAME, SET_LOGIN } from "./types";
import axios from 'axios';
import { API_URL } from '../../api/config';


/* export const postLogin = (phone, password) => {
    try {
        return async dispatch => {
            await axios.post(API_URL + '/users/login', {
                phonenumber: phone,
                password: password,
            })
                .then(function (response) {
                    dispatch({
                        type: POST_LOGIN,
                        payload: response.data
                    });
                })
                .catch(function (error) {
                    // handle error
                    alert(JSON.stringify(error.response.data));
                });
        };
    } catch (error) {
        // Add custom logic to handle errors
        console.log(error);
    }
}; */

export const setToken = token => dispatch => {
    dispatch({
      type: SET_TOKEN,
      payload: token
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