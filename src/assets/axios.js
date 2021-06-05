import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api',
});
export default instance;
