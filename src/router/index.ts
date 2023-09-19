import { createRouter, createWebHistory } from 'vue-router';

import {
  ROUTE_NAME_USER_PAGE,
  ROUTE_NAME_USERS_LIST_PAGE,
  ROUTE_URL_USER_PAGE,
  ROUTE_URL_USERS_LIST_PAGE
} from '@/constants/routes';
import UserList from '@/components/pages/users/Collection/UsersList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_URL_USERS_LIST_PAGE,
      name: ROUTE_NAME_USERS_LIST_PAGE,
      component: UserList
    },
    {
      path: ROUTE_URL_USER_PAGE,
      name: ROUTE_NAME_USER_PAGE,
      component: () => import('@/components/pages/users/Card/UserCard.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: ROUTE_URL_USERS_LIST_PAGE
    }
  ]
});

export default router;
