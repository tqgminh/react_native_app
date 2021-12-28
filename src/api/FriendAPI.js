import axios from "axios";
import { API_URL } from "./config";

export async function getRequestedFriend(token) {
   // alert("ngoài");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    return new Promise(async resolve => {
      await axios.get(API_URL + '/friends/get-requested-friend', config)
        .then(response => {
          return resolve({
            success: true,
            data: response.data,
            error: null,
          });
        })
        .catch(error => {
            alert(error);
          return resolve({
            success: false,
            data: null,
            error: error.response,
          });
        });
    });
  }






  export async function setAcceptTrueAPI({token, userId}) {
    // alert("ngoài");
     const config = {
       headers: { Authorization: `Bearer ${token}` }
     };

     const bodyParameters = {
        user_id: userId,
        is_accept: "1"
    };

     return new Promise(async resolve => {
       await axios.post(API_URL + '/friends/set-accept', bodyParameters, config)
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

   export async function setAcceptFalseAPI({token, userId}) {
     const config = {
       headers: { Authorization: `Bearer ${token}` }
     };

     const bodyParameters = {
        user_id: userId,
        is_accept: "2"
    };

     return new Promise(async resolve => {
       await axios.post(API_URL + '/friends/set-accept', bodyParameters, config)
         .then(response => {
           return resolve({
             success: true,
             data: response.data,
             error: null,
           });
         })
         .catch(error => {
            // alert(JSON.stringify(error.response))
           return resolve({
             success: false,
             data: null,
             error: error.response,
           });
         });
     });
   }


   export async function getListFriendAPI({token}) {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
       user_id: null
   };

    return new Promise(async resolve => {
      await axios.post(API_URL + '/friends/list', bodyParameters, config)
        .then(response => {
         // alert(JSON.stringify(response))
          return resolve({
            success: true,
            data: response.data,
            error: null,
          });
        })
        .catch(error => {
           // alert(JSON.stringify(error.response))
          return resolve({
            success: false,
            data: null,
            error: error.response,
          });
        });
    });
  }



  export async function setRequestFriendAPI({token, userId}) {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
       user_id: userId
   };

    return new Promise(async resolve => {
      await axios.post(API_URL + '/friends/set-request-friend', bodyParameters, config)
        .then(response => {
          return resolve({
            success: true,
            data: response.data,
            error: null,
          });
        })
        .catch(error => {
           // alert(JSON.stringify(error.response))
          return resolve({
            success: false,
            data: null,
            error: error.response,
          });
        });
    });
  }


  export async function setRemoveFriendAPI({token, userId}) {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
       user_id: userId
   };

    return new Promise(async resolve => {
      await axios.post(API_URL + '/friends/set-remove', bodyParameters, config)
        .then(response => {
          return resolve({
            success: true,
            data: response.data,
            error: null,
          });
        })
        .catch(error => {
           // alert(JSON.stringify(error.response))
          return resolve({
            success: false,
            data: null,
            error: error.response,
          });
        });
    });
  }



