import { RootState } from "@/store/types";
import {
  ActionContext,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

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

export enum TodoGettersType {
  ALL_TODO = "ALL_TODO",
}

export interface Getters {
  // allTodos(state: State): Todo[];
  [TodoGettersType.ALL_TODO](state: State): Todo[];
}

export enum TodosActionType {
  FETCH_TODOS = "FETCH_TODOS",
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

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

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

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

export type TodosStore<S = State> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
