import { POST_LOGIN, SET_TOKEN, SET_PHONE, SET_USERNAME, SET_LOGIN, SET_ID, SET_AVATAR,
   SET_COVER_IMAGE, SET_GENDER, SET_BIRTHDAY, SET_LIST_POST, SET_LIST_CHAT, SET_LIST_PROFILE_CHAT } from "../actions/types";

const initialState = {
  isLogin: false,
  phone: '',
  gender: "secret",
  birthday: "01/01/2000",
  username: '',
  token: '',
  id: '',
  avatar: {
    type: '',
    _id: '',
    fileName: ''
  },
  coverImage: {
    type: '',
    _id: '',
    fileName: ''
  },
  listPosts: [],
  listChats: [],
  listProfileChats: [],
};


function userReducer(state = initialState, action) {
  switch (action.type) {
    /* case POST_LOGIN:
      return { ...state, isLogin: true, phone: action.payload.data.phonenumber, username: action.payload.data.name, token: action.payload.token }; */
    case SET_ID:
      return { ...state, id: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_LOGIN:
      return { ...state, isLogin: action.payload };
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_PHONE:
      return { ...state, phone: action.payload };
    case SET_AVATAR:
      return { ...state, avatar: action.payload };
    case SET_COVER_IMAGE:
      return { ...state, coverImage: action.payload };
      case SET_GENDER:
      return { ...state, gender: action.payload };
      case SET_BIRTHDAY:
      return { ...state, birthday: action.payload };
      case SET_LIST_POST:
      return { ...state, listPosts: action.payload };
      case SET_LIST_CHAT:
      return { ...state, listChats: action.payload };
      case SET_LIST_PROFILE_CHAT:
      return { ...state, listProfileChats: action.payload };
    /* case REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(book => book.id !== action.payload.id)
      }; */
    default:
      return state;
  }
}

export default userReducer;