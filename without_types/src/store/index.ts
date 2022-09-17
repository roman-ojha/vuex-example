// Entry point to Vuex

import Vuex, { createStore } from "vuex";
import todos from "./modules/todos";

// Load Vuex
export default new Vuex.Store({
  modules: {
    // now here we will pass the list of module here
    todos,
  },
});

// export default createStore({
//   modules: {
//     todos,
//   },
// });
