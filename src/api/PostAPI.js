import axios from "axios";
import { API_URL } from "./config";

export async function getList(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return new Promise(async resolve => {
    await axios.get(API_URL + '/posts/list', config)
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

export async function likeAPI({ token, id }) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return new Promise(async resolve => {
    await axios.post(API_URL + '/postLike/action/' + id, {}, config)
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


export async function listCommentAPI({ token, id }) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return new Promise(async resolve => {
    await axios.get(API_URL + '/postComment/list/' + id, config)
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



export async function deleteAPI({ token, id }) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return new Promise(async resolve => {
    await axios.get(API_URL + '/posts/delete/' + id, config)
      .then(response => {
        return resolve({
          success: true
        });
      })
      .catch(error => {
        return resolve({
          success: false
        });
      });
  });
}

export async function createCmtAPI({ token, id, textCmt}) {
  //console.log(token);
  //console.log(token);
  //alert(textCmt);
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
    content: textCmt
  };

  return new Promise(async resolve => {
    await axios.post(API_URL + '/postComment/create/' + id, bodyParameters, config)
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