<script generic="T" lang="ts" setup>
import { storeToRefs } from 'pinia';

import UserCard from '@/components/pages/users/Collection/UserListCard.vue';
import CollectionPagination from '@/components/common/Collection/CollectionPagination.vue';
import { URL_USERS_GET } from '@/constants/api';
import type { UserInterface } from '@/constants/interfaces/user';
import createCollectionStore from '@/stores/collectionStore';
import ClearableInput from '@/components/common/ClearableInput.vue';
import { searchUsers } from '@/helpers/users';
import useMockedSearchQuery from '@/hooks/useMockSearchMethod';

const collectionStore = createCollectionStore<UserInterface>(URL_USERS_GET)();
const { items, loading } = storeToRefs(collectionStore);

const { searchString, filteredUsers } = searchUsers(items);

const {
  currentPage,
  totalPages,
  setPage,
  items: filteredSearchedItems
} = useMockedSearchQuery<UserInterface>(filteredUsers);

const onInputChange = (value: string) => {
  searchString.value = value;
};
</script>

<template>
  <main class="collection">
    <ClearableInput :set-value="onInputChange" class="collection__search" />
    <div class="collection__list">
      <UserCard
        v-for="user in filteredSearchedItems"
        v-show="!loading"
        :key="user.id"
        :user="user"
        class="collection__list__user"
      />
    </div>
    <CollectionPagination
      :current-page="currentPage"
      :disabled="loading"
      :set-page="setPage"
      :total-pages="totalPages"
    />
  </main>
</template>

<style lang="scss" scoped>
.collection {
  &__search {
    padding: 20px 0;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow: auto;

    &__user {
      flex: 1 0 25%;
    }

    @media screen and (max-width: 760px) {
      justify-content: center;
    }

    @media screen and (max-width: 400px) {
      justify-content: center;
    }
  }
}
</style>
