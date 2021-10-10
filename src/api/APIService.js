import axios from 'axios';
import { API_URL } from '../api/config';

const ApiService = {
  axios,
  init(baseURL=API_URL) {
    axios.defaults.baseURL = baseURL;
    this.initCommonData();
  },

  get(...resource) {
    return axios.get(...resource);
  },
  

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   **/
  request(data) {
    return axios(data);
  },

};

export default ApiService;
