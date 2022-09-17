const mutations = {
  // now after action commit that data we have to do mutation
  setTodos: function (state: any, todos: any) {
    // and mutation function will contain the 'state' of the current module and then todo that we commit from the action
    return (state.todos = todos);
    // and we will return the new state
  },
  newTodo: (state: any, todo: string) => state.todos.unshift(todo),
  removeTodo: (state: any, id: string) =>
    (state.todos = state.todos.filter((todo: any) => todo.id != id)),
};

export default mutations;
