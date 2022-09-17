import axios from "axios";

// now here we will going to make an action that will going to make a request on endpoint and get the response and the we will mutate that data
const actions = {
  async fetchTodos({ commit }: { commit: any }) {
    // inside the action we will get the commit as argument
    // we don't call the mutation directly from the action we will call 'commit'

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    // now here we will commit that data we will call the mutation function
    commit("setTodos", response.data);
    // commit('<name_of_mutation_you_want_to_call>',<new_data>)
  },
  async addTodo({ commit }: { commit: any }, title: any) {
    // now while calling this action we will pass the title as data to add todo

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false,
      }
    );
    commit("newTodo", response.data);
  },
};

export default actions;
