<template>
  <div>
    <h3>Todo</h3>
    <div class="todos">
      <!-- now here we will display all the todos getting from getters -->
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <iconify-icon icon="ant-design:delete-filled"></iconify-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
// this will get the map Getter from the vuex
// and also to perform some action into the vuex we need 'mapActions'

export default defineComponent({
  name: "Todos",
  computed: {
    ...mapGetters(["allTodos"]),
    // now we will implement the mapGetter into computed property
    // and we will pass the array of getter that we want to use
  },
  // to perform vuex action we need a method for that
  methods: {
    ...mapActions(["fetchTodos"]),
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
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
