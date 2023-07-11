export const wait = async (ms: number = 0, cb?: () => void) => {
  return setTimeout(cb || (() => {}), ms)
}