import axios from "axios";
import { API_URL } from "./config";
import { showOUserAPI } from "../redux/actions/userAction";
import { setListProfileChatState } from "../redux/actions/chatAction";

export async function getAllChat({ token }) {
  // alert("ngoài");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return new Promise(async resolve => {
    await axios.get(API_URL + '/chats/getMessaged', config)
      .then(response => {
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        //alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function getAllChatInfo(token, dispatch, id, blocks) {

  let list = [];
  let chats = await getAllChat({ token });
  

  if (chats.success) {
    for (const data of chats.data.data) {
      //alert(JSON.stringify(data));
      //alert(data);
      for (let userId of data.chat.member) {
        if (userId != id) {
          //alert(cid);
          let infos = await showOUserAPI({ token, userId });
          //alert(JSON.stringify(infos));
          if (infos.success) {
            let info = {
              receivedId: userId,
              chatId: "",
              infoId: "",
              name: "",
              avatarFileName: "",
              message: ""
            }
            info.infoId = data.chat._id;
            //alert(info.infoId);
            info.name = infos.data.data.username;
            info.avatarFileName = infos.data.data.avatar.fileName;
            info.message = data.content;
            info.chatId = data.chat._id;
            list.push(info);
          } else {
            //alert("loi");
            return false;
          }
        }
      }
    }

    let newMess = [];
    for(let m of list){
        if(blocks.indexOf(m.receivedId)==-1){
            newMess.push(m);
        }
    } 
    dispatch(setListProfileChatState(newMess.reverse()));
    return true;
  }else return false;
}

export async function getAllMessage(token, chatId) {
  //alert(chatId);
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return new Promise(async resolve => {
    await axios.get(API_URL + '/chats/getMessages/' + chatId, config)
      .then(response => {
/*         let list = [];
        let data = {
          id:"",
        }
        for(let mess of response.data.data){
          data.id = mess._id;
        } */
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        //alert(error);
        alert(JSON.stringify(error));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}



export async function createChatPrivate({ token, receivedId, content }) {
  //console.log(token);
  //console.log(token);
  //alert(textCmt);
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
    receivedId: receivedId,
    "type": "PRIVATE_CHAT",
    content: content
  };

  return new Promise(async resolve => {
    await axios.post(API_URL + '/chats/send', bodyParameters, config)
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


export async function sendMessagePrivate({ token, chatId, receivedId, content }) {
  //console.log(token);
  //console.log(token);
  //alert(textCmt);
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
    chatId: chatId,
    receivedId: receivedId,
    "type": "PRIVATE_CHAT",
    content: content
  };

  return new Promise(async resolve => {
    await axios.post(API_URL + '/chats/send', bodyParameters, config)
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