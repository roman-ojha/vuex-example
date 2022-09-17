import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { State, Getters, TodoGettersType } from "./types";

const getters: GetterTree<State, RootState> & Getters = {
  // in order to get the state to vue component we need a getter
  allTodos: (state: State) => {
    // this will get the 'state' and now we can manipulate that state
    return state.todos;
    // and here we will just return the 'todos' state from the state
  },
};

export default getters;
