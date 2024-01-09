import { UsersResponse } from '../types/UsersResponse';
import { axiosClient } from '../utils/axiosClient';

export const getUsers = (page: number): Promise<UsersResponse> => {
  return axiosClient.get<UsersResponse>(`/users?page=${page}&count=6`);
};
