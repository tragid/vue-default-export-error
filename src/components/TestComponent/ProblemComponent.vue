<script setup lang="ts">
import { InputType } from './enums';

interface ComponentEmits {
  (e: 'click-event', value: string): void;
  (e: InputType.BLUR, value: string): void;
  (e: InputType.FOCUS, value: string): void;
  (e: InputType.INPUT, value: string): void;
  (e: InputType.CHANGE, value: string): void;
}

const emit = defineEmits<ComponentEmits>();

function onClick() {
  emit('click-event', 'click-event');
}

function onInput() {
  emit(InputType.INPUT, 'input-event');
}

function onBlur() {
  emit(InputType.BLUR, 'blur-event');
}

function onChange() {
  emit(InputType.CHANGE, 'change-event');
}

function onFocus() {
  emit(InputType.FOCUS, 'focus-event');
}

</script>

<template>
  <div>
    <input
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
      @click="onClick"
    >
  </div>
</template>
