<script setup lang="ts">
import {
  ref,
  watch,
} from 'vue';
import type { TestComponentProps, TestComponentEmits } from './types';
import { Tag } from './enums';

const props = withDefaults(defineProps<TestComponentProps>(), {
  tag: Tag.SPAN,
});
const emit = defineEmits<TestComponentEmits>();

const counter = ref(0);

watch(() => props.msg, () => {
  counter.value += 1;
}, {
  immediate: true,
});

function onClick(e: Event): void {
  emit('click', e);
}
</script>

<template>
  <component :is="tag">
    <button type="button" @click="onClick">{{ msg }}</button>
    <div>Changes: {{ counter }}</div>
  </component>
</template>
