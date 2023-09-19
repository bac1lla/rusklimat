<script lang="ts" setup>
import type { UserInterface } from '@/constants/interfaces/user';
import EntityLink from '@/components/common/EntityLink/EntityLink.vue';

defineProps<{ user: UserInterface }>();
</script>

<template>
  <EntityLink :params="{ id: user.id }" name="USER_CARD_PAGE">
    <div class="user-card">
      <img :src="user.avatar" alt="avatar" class="user-card__avatar" />
      <div class="user-card__info">
        <span class="user-card__info__first-name">{{ user.first_name }}</span>
        <span class="user-card__info__last-name">{{ user.last_name }}</span>
        <span class="user-card__info__email">{{ user.email }}</span>
      </div>
    </div>
  </EntityLink>
</template>

<style lang="scss" scoped>
.user-card {
  display: flex;
  align-items: center;
  width: 300px;

  &__avatar {
    height: 100px;
    width: 100px;
    object-fit: cover;
  }

  &__info {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    padding-left: 20px;
    width: 100%;
    //flex-shrink: 0;

    &__first-name,
    &__last-name,
    &__email {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__first-name {
      font-size: 20px;
      line-height: 20px;
      font-weight: 600;
    }

    &__last-name {
      font-size: 18px;
      line-height: 18px;
      font-weight: 600;
    }

    &__email {
    }
  }
}
</style>
