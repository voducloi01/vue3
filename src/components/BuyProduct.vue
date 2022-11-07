<template>
    <div v-if="loading"> <Preloader color="red" scale="0.6"/></div>
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
                                </div> 
                                <button class="btn btn-success" @click="data.handleBuy(product)">Buy</button>   
                            </div>   
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    </div>
</template>

<script> 
import {useBuy} from '@/store/useBuy'
import { useQuery } from '@vue/apollo-composable'
import {ALL_PRODUCT_QUERY} from '@/graphql/allProducts'
import Preloader from '@/loading/Preloader'


export default {
    name : "demoBuyProduct" , 
    components:{
        Preloader
    },
  setup () { 
    const { result, loading ,error   } = useQuery(ALL_PRODUCT_QUERY)
      const data = useBuy()  ;
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