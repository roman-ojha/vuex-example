// Entry point to Vuex
import Vuex, { createStore } from "vuex";
import { store as todos } from "./modules/todos";
import { Store } from "./types";

// Load Vuex

export const store = createStore({
  modules: {
    // now here we will pass the list of module here
    todos,
  },
});

// export default new Vuex.Store({
//   modules: {
//     todos,
//   },
// });

export function useStore(): Store {
  return store as Store;
}
