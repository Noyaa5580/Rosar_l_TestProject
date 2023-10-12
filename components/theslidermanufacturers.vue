<template>
    <div class="slider_manufacturers" id="slider_manufacturers">
        <manufacturer v-for="manufacturer in manufacturers" :key="manufacturer" :mf_name="manufacturer.mf_name" :mf_image_url="manufacturer.mf_image_url"></manufacturer>
    </div>
</template>
<style>
.slider_manufacturers{
    height: 420px;
    width: 3740px;
    display: flex;
    position: absolute;
    right: -273%;
    transition: 1s;
}
</style>
<script>
export default {
    props: {
        manufacturers: Array,
    }
}
</script>