<script setup lang="ts">
import AppSidebar from './components/layout/AppSidebar.vue';
</script>

<template>
  <div id="app" class="app">
    <div class="app-wrapper">
      <AppSidebar class="app-wrapper__sidebar" />
      <div class="app-wrapper__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-primary;
  height: 100vh;
  width: 100vw;
  position: relative;
  &-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    text-align: center;
    border-radius: 20px;
    width: 95%;
    height: 95%;
    background-color: rgba(255, 255, 255, 0.1);
    &__sidebar {
      margin-left: 20px;
      margin-top: 100px;
    }
    &__content {
      height: 100%;
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>