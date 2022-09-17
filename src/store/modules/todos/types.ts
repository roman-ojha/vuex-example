import { RootState } from "@/store/types";
import { ActionContext } from "vuex";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: boolean;
  // https://jsonplaceholder.typicode.com/todos
}

export type State = {
  todos: Todo[];
};

export type Getters = {
  allTodos(state: State): Todo[];
};

export enum TodosActionType {
  FETCH_TODOS = "FETCH_TODOS",
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [TodosActionType.FETCH_TODOS]({
    commit,
  }: AugmentedActionContext): Promise<void>;
  [TodosActionType.ADD_TODO](
    { commit }: AugmentedActionContext,
    title: Todo["title"]
  ): Promise<void>;
  [TodosActionType.DELETE_TODO](
    { commit }: AugmentedActionContext,
    id: Todo["id"]
  ): Promise<void>;
}

export enum TodosMutationType {
  SET_TODOS = "SET_TODOS",
  NEW_TODO = "NEW_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export type Mutations<S = State> = {
  [TodosMutationType.SET_TODOS](state: S, payload: Todo[]): Todo[];
  [TodosMutationType.NEW_TODO](state: S, payload: Todo): number;
  [TodosMutationType.REMOVE_TODO](state: S, payload: number): Todo[];
};
