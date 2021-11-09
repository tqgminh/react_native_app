import { POST_LOGIN, SET_TOKEN, SET_PHONE, SET_USERNAME, SET_LOGIN } from "./types";
import axios from 'axios';
import { API_URL } from '../../api/config';
import ApiService from "../../api/APIService";
import { useSelector, useDispatch } from 'react-redux';


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

export const login = async (data, dispatch) =>{
  let rs = await loginToService(data.phone, data.password);
  if(rs.success){
    dispatch(setLogin(true));
    dispatch(setUsername(rs.data.data.username));
    dispatch(setUs)
  }

  return x;
  
};


export async function loginToService(phone, password) {
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
          error: error,
        });
      });
  });
}
