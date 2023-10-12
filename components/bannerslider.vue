<template>
    <div class="info_banner" id="info_banner">
        <productbanner v-for="product in info_products" :key="product"
            :product_full_image="product.product_full_image">
        </productbanner>
    </div>
</template>
<style>
.info_banner{
    display: flex;
    position: relative;
    right: 0%;
    transition: all 1s;
}
</style>
<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            // info_products:[]
        }
    },
    props: {
        info_products: Array
    }

}
</script>