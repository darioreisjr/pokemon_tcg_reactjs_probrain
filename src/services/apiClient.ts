import axios from 'axios';
import { API_BASE_URL, API_KEY } from './constants';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});
