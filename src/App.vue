<script setup lang="ts">
import {
  ref,
} from 'vue';
import ProblemComponent from '@/components/TestComponent/ProblemComponent.vue';

const events = ref<string[]>([]);

function onInput(value: string): void {
  events.value.push(value);
}

function onChange(value: string): void {
  events.value.push(value);
}

function onBlur(value: string): void {
  events.value.push(value);
}

function onFocus(value: string): void {
  events.value.push(value);
}
</script>

<template>
  <div>
    <h3>Problem: ComponentEmits extends BaseEmits (runtime exceptions on extended events)</h3>
    <ProblemComponent
      @input-event="onInput"
      @blur-event="onBlur"
      @focus-event="onFocus"
      @change-event="onChange"
    />
    <br />
    Events:
    <ul>
      <li
        v-for="(event, index) in events"
        :key="index"
      >
        {{ event }}
      </li>
    </ul>
  </div>
  <hr />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
