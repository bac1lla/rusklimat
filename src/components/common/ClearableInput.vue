<script lang="ts" setup>
import { ref } from 'vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';

const props = defineProps<{
  setValue: (str: string) => void;
}>();

const inputString = ref('');

const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  inputString.value = value;
  props.setValue(value);
};

const handleClearInput = () => {
  inputString.value = '';
  props.setValue('');
};
</script>

<template>
  <div class="input-wrapper">
    <input :value="inputString" class="input" type="text" @input="handleInputChange" />
    <button v-show="!!inputString" class="clear-btn" @click="handleClearInput">
      <CloseIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;

  .input {
    height: 40px;
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    border-radius: 23px;
    outline: none;
  }

  .clear-btn {
    height: var(--icon-height);
    width: var(--icon-width);
    position: absolute;
    top: calc(50% - var(--icon-height) / 2);
    right: 10px;
    border: none;
    border-radius: 50%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
