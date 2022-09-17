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
export default defineComponent({
  name: "AddTodos",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e: any) {
      e.preventDefault();
      // now here we will call the action function and pass new todo title
      this.addTodo(this.title);
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
