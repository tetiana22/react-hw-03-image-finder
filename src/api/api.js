import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40549502-97aa08790f8d4fa33a7c950db';


export const getImg = async (textForSearch, page) => {
   const url = (`${BASE_URL}?q=${textForSearch}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
   const response = await axios.get(url);
   return response.data;
}