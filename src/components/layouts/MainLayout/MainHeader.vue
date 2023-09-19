<script lang="ts" setup>
import LogoIcon from '@/assets/icons/LogoIcon.vue';
import GitHubIcon from '@/assets/icons/GitHubIcon.vue';
import { ROUTE_NAME_USERS_LIST_PAGE } from '@/constants/routes';

const githubLink = 'github.com/bac1lla';
</script>

<template>
  <header class="header">
    <router-link :to="{ name: ROUTE_NAME_USERS_LIST_PAGE }">
      <LogoIcon class="header__logo-icon" />
    </router-link>
    <a :href="'//' + githubLink" class="header__github-link" target="_blank">
      <span>{{ githubLink }}</span>
      <GitHubIcon class="header__github-link__icon" />
    </a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 520px) {
    padding: 10px 0;
    height: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  &__logo-icon {
    height: 40px;
    width: 180px;
  }

  &__github-link {
    display: flex;
    align-items: center;
    gap: 20px;

    &__icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
