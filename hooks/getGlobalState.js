import store from "@/store/store"

export default function getGlobalState (reducer) {
  const state = store.getState()[reducer]
  return (state)
}
