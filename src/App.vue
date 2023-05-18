<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue';
import TestComponent from '@/components/TestComponent/TestComponent.vue';
import { TestComponentProps } from '@/components/TestComponent/types';
import { Tag } from '@/components/TestComponent/enums';

const msg = ref('Hello World!');

const componentProps = computed<TestComponentProps>(() => ({
  msg: msg.value,
  tag: Tag.SPAN,
}));

function onClick(): void {
  alert('clicked');
}
</script>

<template>
  <TestComponent
    v-bind="componentProps"
    @click="onClick"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
