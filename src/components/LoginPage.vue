<template>
  <div class="all">
    <div class="login">
      <div class="pic">
        <p>Handy</p>
        <img src="@/assets/loginPic.png" />
      </div>

      <template v-if="login.mode == 'login'">
        <div class="usrInfo">
          <div>
            <input type="text" placeholder="帳號" />
          </div>
          <div>
            <input type="password" placeholder="密碼" />
            <p @click="login.changeMode('fpw')">忘記密碼</p>
          </div>
        </div>

        <div class="loginBtn">
          <button class="btn me-4" @click="login.isLogin(router)">登入</button>
          <button class="btn" @click="login.switchPage('RegisterPage')">
            註冊
          </button>
        </div>
      </template>

      <template v-else>
        <ForgetPassword></ForgetPassword>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { loginStore } from "@/stores/login";
import ForgetPassword from "@/components/ForgetPassword.vue";

const router = useRouter();
const login = loginStore();

</script>

<style lang="scss" scoped>
.all {
  background-color: #f8d6aa;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  .login {
    margin: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 315px;
    height: 550px;
    border-radius: 10px;
    padding: 10px;
    background-color: papayawhip;
    box-shadow: 0 0 5px inset #de6a67, 5px 11px 5px #a1865c;
    .pic {
      width: 200px;
      margin-top: 10px;
      p {
        text-align: center;
        font-size: 2.5rem;
        color: #de6a67;
        font-family: monospace;
      }
      img {
        width: 100%;
      }
    }
    .usrInfo {
      margin-top: 40px;
      div {
        margin-bottom: 10px;
        input {
          border-radius: 16px;
          border: 1px solid burlywood;
          padding: 5px;
          background-color: #f0f0f0;
        }
        input[type="text"]::placeholder,
        input[type="password"]::placeholder {
          font-size: 14px;
        }
      }
      p {
        text-align: end;
        font-size: 0.9rem;
      }
    }
    .loginBtn {
      display: flex;
      width: 100%;
      justify-content: center;
      button {
        width: 15%;
        border: none;
        padding: 5px;
      }
      button:nth-child(1) {
        margin-right: 20px;
        background-color: #add8e6;
      }
      button:nth-child(2) {
        background-color: #f8b8b4;
      }
    }
  }
}
</style>
