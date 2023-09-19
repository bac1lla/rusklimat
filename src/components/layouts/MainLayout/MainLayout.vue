<script lang="ts" setup>
import MainHeader from '@/components/layouts/MainLayout/MainHeader.vue';
import MainFooter from '@/components/layouts/MainLayout/MainFooter.vue';
</script>

<template>
  <div class="container">
    <MainHeader class="container__header" />
    <RouterView class="container__main" />
    <MainFooter class="container__footer" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: var(--main-contaier-size);
  min-width: 320px;
  padding: 0 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__main {
    flex: 1 0 auto;
  }

  &__footer {
    flex-shrink: 0;
  }

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }
}
</style>
