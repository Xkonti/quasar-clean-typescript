import { defineStore } from 'pinia'
import { Counter } from 'src/models/counter'
import { useSleep } from 'src/helpers/time-helpers'
import { exampleApiService } from 'src/services/example-service'

interface CounterStoreState {
  counter: Counter | null
}

export const useCounterStore = defineStore({
  id: 'counterStore',

  state: (): CounterStoreState => ({
    counter: null,
  }),

  getters: {
    hasCounter (): boolean {
      return this.counter != null
    },
  },

  actions: {
    createCounter () {
      this.counter = {
        description: 'A simple counter created by the counter-store',
        count: 0,
      }
    },

    async incrementCounter (increment = 1) {
      if (this.counter != null) {
        const sleep = useSleep()
        await sleep(500)
        this.counter.count += increment
        await exampleApiService.postCounter(this.counter)
      } else {
        console.log('There is no counter yet!')
      }
    },
  },
})
