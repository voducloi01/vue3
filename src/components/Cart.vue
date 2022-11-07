<template>
    <div v-if="loading"> Loading .... </div>
    <div v-else-if="error">{{error}}</div>
    <div v-else-if="result && result.getAllCart" class="wrapper">   
    <div class="container">
        <h2 class="title_cart"> My Cart</h2>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name Product</th>
                <th scope="col">Price Product</th>
                <th>Số Lượng</th>
                <th scope="col">Image Product</th>
                <th scope="col">Quản lí</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" (product,index ) of result.getAllCart" :key="index">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}$</td>
                <td><input type="number" v-model="product.soluong"  min="1"/></td>
                <td>  <img :src="product.image"  alt="Girl in a jacket" class="img"  /></td>
                <td> <button class="btn btn-danger" @click="data.deleteId(product.id)"> Xóa </button>      
                </td>
              </tr>       
            </tbody>
          </table>
     
    </div>
    </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import {ALL_CART} from '@/graphql/allCart'
import {useBuy} from '@/store/useBuy'
export default {
    name: 'DemoCart',
    setup() {
        const { result, loading ,error   } = useQuery(ALL_CART)
        const data = useBuy() 
            return {
            data ,
            result,
            loading,
            error  
            }  
    }
};
</script>

<style>
.title_cart {
    text-align: center;
    margin: 15px 0;
   
    color: red ;
}
.img {
    width: 90px ;
    height: 90px;
}
</style>