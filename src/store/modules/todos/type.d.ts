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

export enum TodosActionType {
  FETCH_TODOS = "FETCH_TODOS",
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export enum TodosMutationType {
  SET_TODOS = "SET_TODOS",
  NEW_TODO = "NEW_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

// export type Mutation<S = State> = {};
