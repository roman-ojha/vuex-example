<template>
  <div>
    <h3>Todo</h3>
    <div class="todos">
      <!-- now here we will display all the todos getting from getters -->
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
// this will get the map Getter from the vuex

export default defineComponent({
  name: "Todos",
  // computed: {
  //   // ...mapGetters(["allTodos"]),
  //   // now we will implement the mapGetter into computed property
  //   // and we will pass the array of getter that we want to use
  // },
  computed: mapGetters(["allTodos"]),
});
</script>

<style scoped></style>
