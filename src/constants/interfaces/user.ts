import type {
  CollectionRequestInterface,
  CollectionResponseInterface
} from '@/constants/interfaces/collection';

export interface UserRequestInterface {
  id: string;
}

export interface UserInterface {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserResponseInterface {
  data: UserInterface;
}

export interface UsersResponseInterface extends CollectionResponseInterface<UserInterface> {}

export interface UsersRequestInterface extends CollectionRequestInterface {}
