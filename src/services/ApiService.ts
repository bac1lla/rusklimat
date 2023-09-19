import type { AxiosResponse } from 'axios';
import axios from 'axios';

import type { UserRequestInterface, UserResponseInterface } from '@/constants/interfaces/user';
import type {
  CollectionRequestInterface,
  CollectionResponseInterface
} from '@/constants/interfaces/collection';
import { URL_USER } from '@/constants/api';

const getResult = <T>(response: AxiosResponse<T>): T => response.data;

const decodeCollectionResponse = <T>(response: AxiosResponse<T>): T => response.data;

export default class ApiService {
  static axi = axios.create();

  static async getCollection<T>(
    url: string,
    { page, pageSize }: CollectionRequestInterface
  ): Promise<CollectionResponseInterface<T>> {
    const response = await ApiService.axi.get<CollectionResponseInterface<T>>(url, {
      params: {
        page,
        per_page: pageSize
      }
    });

    return decodeCollectionResponse<CollectionResponseInterface<T>>(response);
  }

  static async getUser({ id }: UserRequestInterface): Promise<UserResponseInterface> {
    const response = await ApiService.axi.get<UserResponseInterface>(URL_USER + id);

    return getResult<UserResponseInterface>(response);
  }
}
