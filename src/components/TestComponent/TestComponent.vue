<script setup lang="ts">
import {
  ref,
  watch,
} from 'vue';
import type { TestComponentProps } from './types';

const props = defineProps<TestComponentProps>();

const counter = ref(0);

watch(() => props.msg, () => {
  counter.value += 1;
}, {
  immediate: true,
});
</script>

<template>
  <div>{{ msg }}</div>
  <div>Changes: {{ counter }}</div>
</template>
