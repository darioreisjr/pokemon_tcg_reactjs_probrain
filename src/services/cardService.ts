import { apiClient } from './apiClient';

export const getCards = async (page = 1, pageSize = 30, query = '') => {
  try {
    const response = await apiClient.get('/cards', {
      params: { page, pageSize, q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const getCardById = async (id: string) => {
  try {
    const response = await apiClient.get(`/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching card with ID ${id}:`, error);
    throw error;
  }
};

export const getRarities = async () => {
  try {
    const response = await apiClient.get('/rarities');
    return response.data;
  } catch (error) {
    console.error('Error fetching rarities:', error);
    throw error;
  }
};

export const getTypes = async () => {
  try {
    const response = await apiClient.get('/types');
    return response.data;
  } catch (error) {
    console.error('Error fetching types:', error);
    throw error;
  }
};
