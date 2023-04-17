<template>
  <Header />
  <main>
    <!-- <div class="left"> -->
      <Nav />
    <!-- </div>
    <div class="right"> -->
      <router-view />
    <!-- </div> -->
  </main>
</template>

<script setup>
import Header from "./components/Header/index.vue";
import Nav from "./components/nav/index.vue";
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
    main{
        display: flex;
      .left{
        min-width: max-content;
        max-width: max-content;
        border: 1px solid black;
      }
    }
</style>
