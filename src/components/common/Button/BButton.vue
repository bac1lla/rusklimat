<script lang="ts" setup>
import type { variants as variantsType } from '@/components/common/Button/variants';
import { variants } from '@/components/common/Button/variants';

interface ButtonInterface {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: variantsType;
}

const { text, variant } = withDefaults(defineProps<ButtonInterface>(), {
  variant: variants.primary,
  disabled: false
});

const buttonClassVariant = 'btn--' + variant;
</script>

<template>
  <button :class="buttonClassVariant" :disabled="disabled" class="btn" @click="onClick">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.btn {
  height: 40px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &--primary {
    color: var(--primary-btn-text-color);
    background-color: var(--primary-btn-bg-color);
    border: var(--primary-border);

    &:hover {
      color: var(--primary-btn-hover-text-color) !important;
      background-color: var(--primary-btn-hover-bg-color);
      border: var(--primary-border);
    }

    &:active {
      background-color: var(--primary-btn-active-bg-color);
      box-shadow: var(--primary-btn-active-box-shadow);
      border: var(--primary-border);
    }

    &[disabled] {
      color: var(--primary-btn-disabled-text-color);
      background-color: var(--primary-btn-disabled-bg-color);
      border: 1px solid var(--primary-btn-disabled-bg-color);
    }
  }

  &--secondary {
    background-color: white;
    color: var(--secondary-btn-color);
    border: 1px solid var(--secondary-btn-color);

    &:hover {
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
    }

    &:active {
      background-color: var(--secondary-btn-active-bg-color);
      color: var(--secondary-btn-active-color);
      border: 1px solid var(--secondary-btn-active-color);
    }

    &[disabled] {
      background-color: var(--secondary-btn-disabled-bg-color);
      color: var(--secondary-btn-disabled-color);
      border: 1px solid var(--disable-color);
    }
  }
}
</style>
