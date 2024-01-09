import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
});

export const axiosClient = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);
    return response.data;
  },

  async post<T>(url: string, data: unknown) {
    const response = await instance.post<T>(url, data);
    return response.data;
  },
};
