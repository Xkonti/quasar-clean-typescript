function sleep (ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const useSleep = () => sleep

export const useDelay = () => {
  return async (delayMs: number, delayedAction: () => unknown) => {
    await sleep(delayMs)
    return delayedAction()
  }
}
