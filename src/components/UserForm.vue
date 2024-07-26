<template>
  <div class="all">
    <div class="usrSetting">
      <div class="settingContent">
        <div class="text-center mt-2">
          <h2>會員資料</h2>
        </div>
        <table>
          <tbody>
            <tr>
              <th>會員名稱</th>
              <td>
                <input type="text" />
                <p></p>
              </td>
            </tr>
            <tr>
              <th>帳號</th>
              <td>
                <input type="text" disabled />
                <p></p>
              </td>
            </tr>
            <tr>
              <th>密碼</th>
              <td>
                <button class="btn btn-primary" @click="login.EditPwd(router)">
                  修改密碼
                </button>
              </td>
            </tr>
            <tr>
              <th>信箱</th>
              <td>
                <input type="text" />
                <p>密碼不得為空</p>
                <p>與新密碼不一致</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="editSubmit">
          <button class="btn me-4 submit">確認修改</button>
          <nuxt-link to="/usr"
            ><button class="btn cancel">取消</button></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { loginStore } from "@/stores/login";
import { useRouter } from "vue-router";

const login = loginStore();
const router = useRouter();


</script>

<style scoped lang="scss">
.all {
  width: 100%;
  height: 100vh;
  padding: 25px;
  .usrSetting {
    padding: 20px;
    width: 75%;
    height: 100%;
    margin: 0 auto;
    background-color: #fff8f1;
    .settingContent {
      position: relative;
      width: 100%;
      h2 {
        margin-bottom: 50px;
      }
      table {
        width: 70%;
        margin: 0 auto;
        tr th {
          line-height: 85px;
          width: 20%;
          color: #bd5858;
          padding: 5px 7px;
        }
        td {
          width: 455px;
          border-bottom: 2px dashed #ceb2b2;
          padding: 10px 5px;
          input[type="text"] {
            width: 100%;
            border-radius: 5px;
            border: 0px solid #ffdbd6;
            padding: 5px;
            background-color: #f0f0f0;
          }
          input[type="text"]:disabled {
            background-color: #d3d2d2;
          }
          input[type="file"] {
            width: 40%;
          }
        }

        .photo {
          width: 25%;
          height: 150px;
          overflow: hidden;
          border: 1px solid black;
          margin-bottom: 10px;
          img {
            width: 100%;
            object-fit: contain;
          }
        }
        .editPassword {
          background-color: #ffb0ad66;
        }
      }
      .editSubmit {
        position: absolute;
        left: 42%;
        top: 112%;
        .submit {
          background-color: #e4c69d;
        }
        .cancel {
          background-color: #cacaca;
        }
      }
    }
  }
}
</style>
