import type { ComputedRef } from 'vue';
import { computed, ref } from 'vue';
import { DEFAULT_PAGE_SIZE, FIRST_PAGE_NUMBER } from '@/helpers/collection';

export default function useMockedSearchQuery<T>(filteredItems: ComputedRef<T[]>) {
  const currentPage = ref(FIRST_PAGE_NUMBER);
  const items: ComputedRef<T[]> = computed(() =>
    filteredItems.value
      .slice()
      .splice((currentPage.value - 1) * DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE)
  );

  const totalPages = computed(() => Math.ceil(filteredItems.value.length / DEFAULT_PAGE_SIZE));

  const setPage = (newPage: number) => {
    currentPage.value = newPage;
  };

  return {
    currentPage,
    items,
    totalPages,
    setPage
  };
}
