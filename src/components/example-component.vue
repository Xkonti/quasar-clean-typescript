<template>
  <q-card>
    <q-card-section class="bg-primary text-black text-h6">
      <slot name="header">
        This is an example component
      </slot>
    </q-card-section>
    <slot name="content">
      <q-card-section>
        {{ counter.description }}
      </q-card-section>
    </slot>
  </q-card>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Counter } from 'src/models/counter'

interface Props {
  counter: Counter,
}

const props = defineProps<Props>()

const displayedDescription = computed(() => `Description: ${props.counter.description}`)
</script>
