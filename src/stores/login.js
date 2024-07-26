import { defineStore } from "pinia";

export const loginStore = defineStore("login", {
  state: () => ({
    currentPage: {
      switchPage: "LoginPage",
    },
    mode: "login",
  }),
  actions: {
    /**
     * 切換註冊及登入頁
     * @param {String} page 
     */
    switchPage(page) {
      this.currentPage.switchPage = page;
    },
    /**
     * 切換忘記密碼及登入模式
     * @param {String} mode 
     */
    changeMode(mode) {
      this.mode = mode;
    },
    /**
     * 
     */
    isLogin(router){
        router.push('/user')
    },
    /** 
     * 
    */
    EditPwd(router){
      router.push('/editpsw')
    }
  },
});
