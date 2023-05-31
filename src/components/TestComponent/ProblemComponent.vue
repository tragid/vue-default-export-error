<script setup lang="ts">
import type { BaseEmits } from './types';

interface ComponentEmits extends BaseEmits {
  (e: 'blur-event', value: string): void;
  (e: 'focus-event', value: string): void;
}

const emit = defineEmits<ComponentEmits>();

function onInput() {
  emit('input-event', 'input-event');
}

function onBlur() {
  emit('blur-event', 'blur-event');
}

function onChange() {
  emit('change-event', 'change-event');
}

function onFocus() {
  emit('focus-event', 'focus-event');
}

</script>

<template>
  <div>
    <input
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
    >
  </div>
</template>
