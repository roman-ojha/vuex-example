import { State as TodosState } from "./modules/todos/type";

export type RootState = {
  todos: TodosState;
};
