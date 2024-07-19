<template>
  <component
    :is="login.currentPage.switchPage == 'LoginPage' ? LoginPage : RegisterPage"
  ></component>
</template>

<script setup>
import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import { loginStore } from "@/stores/login";
const login = loginStore();
</script>

<style scoped lang="scss">

</style>
