import { State as TodosState } from "./modules/todos/types";

export type RootState = {
  todos: TodosState;
};
