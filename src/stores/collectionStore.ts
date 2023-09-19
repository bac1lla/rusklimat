import type { Ref } from 'vue';
import { onMounted, ref, watch } from 'vue';
import { defineStore } from 'pinia';

import ApiService from '@/services/ApiService';
import router from '@/router';
import { ROUTE_URL_USERS_LIST_PAGE } from '@/constants/routes';
import { FIRST_PAGE_NUMBER } from '@/helpers/collection';

const TOTAL_ITEMS = 12;

export const createCollectionStore = <T>(url: string) =>
  defineStore('collection', () => {
    const params = router.currentRoute.value.query;

    const items: Ref<T[]> = ref([]);
    const currentPage = ref(Number(params.page) || FIRST_PAGE_NUMBER);
    const pageSize = ref(Number(params.per_page) || TOTAL_ITEMS);
    const totalItems = ref(0);
    const totalPages = ref(0);
    const loading = ref(false);

    const getCollection = async (newPageSize?: number): Promise<void> => {
      loading.value = true;

      try {
        const newCollection = await ApiService.getCollection<T>(url, {
          page: currentPage.value,
          pageSize: newPageSize || pageSize.value
        });

        items.value = newCollection.data;
        currentPage.value = newCollection.page;
        totalItems.value = newCollection.total;
        totalPages.value = newCollection.total_pages;
      } catch (error: unknown) {
        throw new Error((error as Error).message);
      } finally {
        loading.value = false;
      }
    };

    const setPage = (newPage: number) => {
      currentPage.value = newPage;
      router.push({
        path: ROUTE_URL_USERS_LIST_PAGE,
        query: {
          page: newPage,
          per_page: pageSize.value
        }
      });
    };

    watch(
      () => currentPage.value,
      (newPage, prevPage) => {
        if (newPage !== prevPage) {
          getCollection();
        }
      }
    );

    onMounted(getCollection);

    return {
      items,
      currentPage,
      totalItems,
      totalPages,
      loading,
      setPage
    };
  });

export default createCollectionStore;
