import { State as TodosState } from "./modules/todos/types";
import { TodosStore } from "./modules/todos/types";

export type RootState = {
  todos: TodosState;
};

export type Store = TodosStore<Pick<RootState, "todos">>;

// fore more store:
// export type Store = TodosStore<Pick<RootState, "todos">> & ProfileStore<Pick<RootState, "profile">>;
