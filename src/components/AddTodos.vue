<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { useStore } from "@/store";
import { TodosActionType } from "@/store/modules/todos/types";

const store = useStore();

export default defineComponent({
  name: "AddTodos",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    // one way to access action methods
    // ...mapActions(["addTodo"]),
    async onSubmit(e: any) {
      e.preventDefault();
      // now here we will call the action function and pass new todo title
      // using 'mapActions'
      // this.addTodo(this.title);

      // other way to access action method using dispatch
      await store.dispatch(TodosActionType.ADD_TODO, this.title);
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
