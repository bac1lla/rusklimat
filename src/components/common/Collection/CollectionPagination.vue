<script lang="ts" setup>
import { computed } from 'vue';

import Button from '@/components/common/Button/BButton.vue';
import { variants as btnVariants } from '@/components/common/Button/variants';
import usePagination from '@/hooks/usePagination';

interface PaginationPropsInterface {
  readonly currentPage: number;
  readonly totalPages: number;
  readonly setPage: (page: number) => void;
  readonly disabled: boolean;
}

const props = defineProps<PaginationPropsInterface>();

const pagination = computed(() =>
  usePagination({
    currentPage: props.currentPage,
    totalPages: props.totalPages,
    setPage: props.setPage
  })
);

const handleSetPage = (page: number) => {
  props.setPage(page);
};
</script>

<template>
  <div class="pagination">
    <div v-show="totalPages > 1" class="pagination__navigation-pages">
      <Button
        v-for="index in props.totalPages"
        :key="index"
        :disabled="index === props.currentPage"
        :text="index + ''"
        :variant="btnVariants.secondary"
        class="pagination__navigation-pages__button"
        @click="handleSetPage(index)"
      />
    </div>
    <div v-show="totalPages > 1" class="pagination__navigation-buttons">
      <Button
        :disabled="props.disabled || !pagination.canGoPrev"
        :on-click="pagination.goPrevPage"
        :variant="btnVariants.secondary"
        text="Обратно"
      />
      <Button
        :disabled="props.disabled || !pagination.canGoNext"
        :on-click="pagination.goNextPage"
        :variant="btnVariants.secondary"
        text="Далее"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  padding: 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__navigation-pages {
    display: flex;
    align-items: center;
    gap: 10px;

    &__button {
      display: block;
    }
  }

  &__navigation-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
