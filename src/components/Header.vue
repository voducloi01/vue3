<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
           
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item btn_wrap" >
                    <router-link class="nav-link" to="/">Product</router-link>

                  </li>
                  <li class="nav-item btn_wrap">
                    <router-link class="nav-link" to="/buy">Buy Product</router-link>
                  </li>
                  <li class="nav-item btn_wrap">
                    <router-link class="nav-link" to="/cart">Cart</router-link>
                  </li>
                  <li class="nav-item btn_wrap">
                    <router-link class="nav-link" to="/login">Login</router-link>
                  </li>
                  </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
export default {
    name: 'VuedemoHeader',


};
</script>

<style>
 .btn_wrap :hover{
  background-color: #9fb5ab
}
</style>