import { User } from './User';

type Links = {
  next_url: string | null;
  prev_url: string | null;
};

export interface UsersResponse {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: Links;
  users: User[];
}
