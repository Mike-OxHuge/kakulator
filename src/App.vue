<template>
  <v-app>
    <NavBar />
    <v-main>
      <MainView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainView from "./blocks/MainView.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",

  components: {
    MainView,
    NavBar,
  },

  data() {
    return {
      //
    };
  },
});
</script>
