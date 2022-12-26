<template>
  <v-app>
    <NavBar />
    <v-main>
      <MainView />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import MainView from "./blocks/MainView.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>
