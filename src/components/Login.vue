<template>
  <div class="container wrap_form">
    
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">User Name</label>
      <input type="text" class="form-control" id="username" placeholder="username"  v-model="data.users.username">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Pass word</label>
      <input type="text" class="form-control" id="password" placeholder="Pass word" v-model="data.users.password">
    </div>
    <div class="mb-3" style="display: flex; align-items: center;">
    <button class="btn btn-danger" @click="data.login(data.users)"> Đăng Nhập</button>
        <router-link class="nav-link " style="margin-left: 10px;" to="/resgister">Bạn chưa có tài khoảng ? </router-link> 
    </div>
  </div>
</template>

<script>
  import {useLogin } from '@/store/useLogin'

  export default {
    name:"demoLogin" ,
    setup() {
        const data = useLogin() ;
        return {data }
    }
   
  }
</script>

<style>
.wrap_form{
  width: 400px ;
}
</style>