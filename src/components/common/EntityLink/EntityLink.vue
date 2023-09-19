<script lang="ts" setup>
interface EntityLinkInterface {
  name: string;
  query?: any;
  params?: any;
}

defineProps<EntityLinkInterface>();
</script>

<template>
  <router-link :to="{ name, query, params }">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped></style>
