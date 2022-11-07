<template>
   <div>
      <div class="mt-5">    
          <div class="container">        
              <section class="panel panel-default">   
                  <div class="panel-heading">    
                      <h3 class="panel-title">Thêm sản phẩm </h3>   
                  </div>  
                  <form class="wrap_input">
                    <label>Tên sản phẩm</label>
                    <input type="text" name="name" v-model="product.name">
                   
                    <label>Gía Tiền</label>
                    <input type="number" name="price" v-model="product.price">
              
                    <label>Hình ảnh</label>
                    <input type="text" name="image" v-model="product.image">      
                      <input  type="button" class="btn btn-success mt-2" @click="data.AddProduct(product)" value="Add">
                      <input  type="button" class="btn btn-success mt-2" @click="data.CapNhap(product)" value="Update">          
                  </form>
              </section>   
          </div>   
      </div>
   </div>
</template>

<script>
import {useProduct} from '@/store/useProduct'
export default {
    name: 'VueBootstrapInsertProduct',
  setup () {
   const data = useProduct() ;
   const product = data.product ;
    return {product ,data }
  } 
}
</script>

<style>
.wrap_input{
  display: flex ; 
  flex-direction: column ; 
  width: 30%
}

</style>