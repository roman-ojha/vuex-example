import { ActionTree, ActionContext } from "vuex";
import axios from "axios";
import {
  State,
  TodosMutationType,
  TodosActionType,
  Actions,
  Todo,
} from "./types";
import { RootState } from "@/store/types";

// now here we will going to make an action that will going to make a request on endpoint and get the response and the we will mutate that data
const actions: ActionTree<State, RootState> & Actions = {
  async [TodosActionType.FETCH_TODOS]({ commit }) {
    // inside the action we will get the commit as argument
    // we don't call the mutation directly from the action we will call 'commit'

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    // now here we will commit that data we will call the mutation function
    commit(TodosMutationType.SET_TODOS, response.data);
    // commit('<name_of_mutation_you_want_to_call>',<new_data>)
  },
  async [TodosActionType.ADD_TODO]({ commit }, title: Todo["title"]) {
    // now while calling this action we will pass the title as data to add todo

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false,
      }
    );
    commit(TodosMutationType.NEW_TODO, response.data);
  },
  async [TodosActionType.DELETE_TODO]({ commit }, id: Todo["id"]) {
    // let's say that this will delete from the server
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit(TodosMutationType.REMOVE_TODO, id);
  },
};

export default actions;
