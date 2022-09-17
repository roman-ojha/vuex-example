// Entry point to Vuex

import Vuex from "vuex";
import Vue from "vue";
import todos from "./todos";

// Load Vuex
export default new Vuex.Store({
  modules: {
    // now here we will pass the list of module here
    todos,
  },
});
