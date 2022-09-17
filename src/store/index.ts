// Entry point to Vuex
import { createLogger, createStore } from "vuex";
import { store as todos } from "./modules/todos";
import { Store } from "./types";

// plug in logger when in development environment
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];
export const store = createStore({
  plugins,
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
