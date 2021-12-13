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

  export async function likeAPI({token, id}) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return new Promise(async resolve => {
      await axios.post(API_URL + '/postLike/action/'+id,{}, config)
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


  export async function listCommentAPI({token, id}) {
    alert(token);
    alert(id);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return new Promise(async resolve => {
      await axios.get(API_URL + '/postComment/list/'+id, config)
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