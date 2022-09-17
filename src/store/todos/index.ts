import axios from "axios";
import actions from "./actions";
import getters from "./getters";
import mutation from "./mutation";
import state from "./state";

export default {
  // here we will pass the required component for vuex
  state,
  getters,
  actions,
  mutation,
};
