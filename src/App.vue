<template>
  <v-app>
    <NavBar />
    <v-main>
      <ThemeToggler />
      <LocaleToggler />
      <HelloWorld :foo="'imma prop!'" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import ThemeToggler from "./components/ThemeToggler.vue";
import LocaleToggler from "./components/LocaleToggle.vue";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld,
    NavBar,
    ThemeToggler,
    LocaleToggler,
  },

  data() {
    return {
      //
    };
  },
});
</script>
