<template>
  <q-page
    class="column items-center justify-center"
  >
    <q-btn
      v-if="!counterStore.hasCounter"
      class="q-my-sm"
      label="Create counter"
      @click="counterStore.createCounter"
    />
    <example-component
      v-if="counterStore.hasCounter"
      :counter="counterStore.counter"
      class="q-my-sm"
    />

    <q-btn
      v-if="counterStore.hasCounter"
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
async function incrementCounter () {
  await counterStore.incrementCounter(1)
}

const incrementButtonText = computed(() => `Increment: ${counterStore.counter?.count ?? '?'}`)
</script>
