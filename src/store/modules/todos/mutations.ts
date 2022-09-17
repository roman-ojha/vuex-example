import { MutationTree } from "vuex";
import { State, Mutation, TodosMutationType, Todo } from "./type";

const mutations: MutationTree<State> & Mutation = {
  // now after action commit that data we have to do mutation
  [TodosMutationType.SET_TODOS]: function (state: State, todos: Todo[]) {
    // and mutation function will contain the 'state' of the current module and then todo that we commit from the action
    return (state.todos = todos);
    // and we will return the new state
  },
  [TodosMutationType.NEW_TODO]: (state: State, todo: Todo) =>
    state.todos.unshift(todo),
  [TodosMutationType.REMOVE_TODO]: (state: State, id: number) =>
    (state.todos = state.todos.filter((todo: any) => todo.id != id)),
};

export default mutations;
