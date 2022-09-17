<template>
  <div>
    <h3>Todo</h3>
    <div class="todos">
      <!-- now here we will display all the todos getting from getters -->
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <iconify-icon
          @click="deleteTodo(todo.id)"
          icon="ant-design:delete-filled"
        ></iconify-icon>
        <!-- <iconify-icon
          @click="callCommitFunction(todo.id)"
          icon="ant-design:delete-filled"
        ></iconify-icon> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
// this will get the map Getter from the vuex
// and also to perform some action into the vuex we need 'mapActions'

import { useStore } from "@/store";
import {
  TodosActionType,
  TodoGettersType,
  TodosMutationType,
} from "@/store/modules/todos/types";
const store = useStore();

export default defineComponent({
  name: "Todos",
  computed: {
    // now we will implement the mapGetter into computed property
    // and we will pass the array of getter that we want to use
    // ...mapGetters(["ALL_TODO"]),
    // call getter function using 'mapGetters'

    // call getter function with another way
    allTodos() {
      return store.getters["allTodos"];
    },
  },
  // to perform vuex action we need a method for that
  methods: {
    // one way to access action methods
    // ...mapActions(["fetchTodos", "deleteTodo"]),

    async fetchTodos() {
      // other way to access action method using dispatch
      await store.dispatch(TodosActionType.FETCH_TODOS, undefined);
    },
    async deleteTodo(id: number) {
      await store.dispatch(TodosActionType.DELETE_TODO, id);
    },

    // and also we can directly access commit function which will change the state
    callCommitFunction(id: number) {
      store.commit(TodosMutationType.REMOVE_TODO, id);
    },
  },
  created() {
    // now we want to call the 'fetchTodos' action after component get mounted
    this.fetchTodos();
  },
});
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
iconify-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
