<template></template>
<script>
import axios from 'axios';
export default {
    methods: {
        openProduct(product){
            this.$router.push('/products/' + product)
        }
    },
}
</script>