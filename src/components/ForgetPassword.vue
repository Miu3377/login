<template>
  <div>
    <p>忘記密碼</p>
    <input type="text" placeholder="電子郵件" />
    <div class="fpwButton">
      <button @click="login.changeMode('login')">回前頁</button>
      <button>送出</button>
    </div>
  </div>
</template>

<script setup>
import { loginStore } from "@/stores/login";
const login = loginStore();

</script>

<style scoped lang="scss">
input {
  border-radius: 16px;
  border: 1px solid burlywood;
  padding: 5px;
  background-color: #f0f0f0;
}

.fpwButton {
  display: flex;
  width: 100%;
  justify-content: center;
  button {
    width: 40%;
    border: none;
    padding: 5px;
    margin-top: 40px;
  }
  button:nth-child(1) {
    margin-right: 20px;
    background-color: #add8e6;
  }
  button:nth-child(2) {
    background-color: #f8b8b4;
  }
}
</style>
