<template>
  <div>
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todos from "./components/Todos.vue";

export default defineComponent({
  name: "App",
  components: {
    Todos,
  },
});
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
