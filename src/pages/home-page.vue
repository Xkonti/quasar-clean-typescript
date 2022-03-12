<template>
  <q-page
    class="column items-center justify-center"
  >
    <q-btn
      v-if="!hasCounter"
      class="q-my-sm"
      label="Create counter"
      @click="createCounter"
    />
    <example-component
      v-if="hasCounter"
      :counter="counter"
      class="q-my-sm"
    />

    <q-btn
      v-if="hasCounter"
      :label="incrementButtonText"
      class="q-my-sm"
      @click="incrementCounter"
    />
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ExampleComponent from 'components/example-component.vue'
import { useCounterStore } from 'src/store/counter-store'

const counterStore = useCounterStore()
const hasCounter = computed(() => counterStore.hasCounter)
const counter = computed(() => counterStore.counter)

function createCounter () {
  counterStore.createCounter()
}
async function incrementCounter () {
  await counterStore.incrementCounter(1)
}

const incrementButtonText = computed(() => `Increment: ${counter.value?.count ?? '?'}`)
</script>
