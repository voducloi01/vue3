<template>
    <div v-if="loading">loading....</div>
    <div v-else-if="error">{{error}}</div>
    <div v-else-if="result && result.getAllProduct" class="wrapper">      
        <div  class="container">    
            <div class="row g-1">   
                <div class="col-md-3" v-for=" ( product) of result.getAllProduct" :key="product.id"> 
                    <div class="card p-4" >   
                        <div class="text-center">  
                            <img :src="product.image"  alt="Girl in a jacket" class="img"/>
                        </div>   
                        <div class="product-details"> 
                            <span class="font-weight-bold d-block">{{product.price}}$</span>    
                            <span>{{product.name}}</span>   
                            <div class="buttons d-flex flex-row">   
                                <div class="cart">                                       
                                </div> <button class="btn btn-success" @click="data.handleId(product)">  Edit</button>   
                                <button class="btn btn-success ml-5" @click="data.DeleteId(product.id)">  delete</button>                                                                       
                            </div>   
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
        <InsertProduct />
    </div>
</template>

<script> 
import {useProduct} from '@/store/useProduct'
import { useQuery } from '@vue/apollo-composable'
import {ALL_PRODUCT_QUERY} from '@/graphql/allProducts'
import InsertProduct from '@/components/InsertProduct.vue'

export default {
    name : "demoProduct" , 
    components:{
        InsertProduct
    },
  setup () { 
    const { result, loading ,error   } = useQuery(ALL_PRODUCT_QUERY)

   
      const data = useProduct()  
            return {
            data ,
            result,
            loading,
            error
         
            }  

  },
}
</script>

<style>
.img{
    width: 200px ;
    height: 130px;
}
</style>