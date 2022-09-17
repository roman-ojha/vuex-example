import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import { State } from "./types";
import { RootState } from "@/store/types";

export const store: Module<State, RootState> = {
  // here we will pass the required component for vuex
  state,
  getters,
  actions,
  mutations,
};
