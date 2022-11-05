<template>
  <div>
    <Header/>
    <Product />
    <InsertProduct />
  </div>
</template>

<script>

import Product from './components/Product'
import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from '../apollo.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.vue';
import InsertProduct from './components/InsertProduct.vue';


export default {
  name: 'App',
  components: {
    Product,
    Header,
    InsertProduct
},
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
