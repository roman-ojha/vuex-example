const getters = {
  // in order to get the state to vue component we need a getter
  allTodos: (state: any) => {
    // this will get the 'state' and now we can manipulate that state
    return state.todo;
    // and here we will just return the 'todos' state from the state
  },
};

export default getters;
