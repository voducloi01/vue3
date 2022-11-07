<template>
  <div class="container wrap_form">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" placeholder="name" v-model="users.name">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">User Name</label>
      <input type="text" class="form-control" id="username" placeholder="username" v-model="users.username">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Pass word</label>
      <input type="password" class="form-control" id="password" placeholder="Pass word" v-model="users.password">
    </div>
    <div class="mb-3" style="display: flex; align-items: center;">
    <button class="btn btn-danger" @click="data.dangKy(users)"> Đăng Ký</button>
    <router-link class="nav-link " style="margin-left: 10px;" to="/login">Đã có tài khoảng!</router-link>

    </div>
  </div>
</template>

<script>
  import {useRegister} from '@/store/useResgister'
  export default {
    name:"demoResgister" ,
    setup () {
      const data = useRegister() ;
        const users = data.users
     
        return {users,data }
    }
   
  }
</script>

<style>
.wrap_form{
  width: 400px ;
}
</style>