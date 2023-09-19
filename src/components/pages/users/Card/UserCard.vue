<script lang="ts" setup>
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';

import type { UserInterface } from '@/constants/interfaces/user';
import { ROUTE_NAME_USERS_LIST_PAGE } from '@/constants/routes';
import router from '@/router';
import ApiService from '@/services/ApiService';
import BackIcon from '@/assets/icons/BackIcon.vue';

let user: Ref<UserInterface | null> = ref(null);
const loading: Ref<boolean> = ref(false);

const userId = router.currentRoute.value.params.id;

const getUser = async (): Promise<void> => {
  loading.value = true;

  try {
    const response = await ApiService.getUser({ id: userId as string });

    user.value = response.data;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  } finally {
    loading.value = false;
  }
};

onMounted(getUser);
</script>

<template>
  <div class="user__page">
    <div class="user__page__content">
      <div class="user__page__content__fill" />
      <div class="user__page__content__user-card">
        <img :src="user?.avatar" alt="avatar" class="user__page__content__user-card__avatar" />
        <div class="user__page__content__user-card__info">
          <span class="user__page__content__user-card__info__first-name">
            {{ user?.first_name }}
          </span>
          <span class="user__page__content__user-card__info__last-name">
            {{ user?.last_name }}
          </span>
        </div>
        <a :href="'mailto:' + user?.email" class="user__page__content__user-card__email-btn">
          Написать
        </a>
      </div>
    </div>
    <div class="user__page__info">
      <router-link :to="{ name: ROUTE_NAME_USERS_LIST_PAGE }" class="user__page__info__back-btn">
        <BackIcon class="user__page__info__back-btn-icon" />
        <span>Все пользователи</span>
      </router-link>
      <span>Пользователь №{{ userId }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user__page {
  &__content {
    position: relative;

    &__fill {
      position: relative;
      content: '';
      width: 100%;
      height: 150px;
      background-color: antiquewhite;

      @media screen and (max-width: 620px) {
        display: none;
      }
    }

    &__user-card {
      position: absolute;
      top: 50%;
      left: calc(50% - 80px); // half of this block width
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;

      @media screen and (max-width: 620px) {
        position: initial;
        padding: 20px 0;
      }

      &__avatar {
        width: 150px;
        height: 150px;
        object-fit: cover;
      }

      &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;

        &__first-name {
          font-size: 24px;
          font-weight: 600;
        }

        &__last-name {
          font-size: 20px;
          font-weight: 600;
        }
      }

      &__email-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        border-radius: 8px;
        background-color: var(--primary-btn-bg-color);
        color: white;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--icon-height);

    &__back-btn {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__back-btn-icon {
      width: var(--icon-width);
      height: var(--icon-height);
    }

    @media screen and (max-width: 440px) {
      flex-direction: column-reverse;
      height: unset;
      gap: 10px;
    }
  }
}
</style>
