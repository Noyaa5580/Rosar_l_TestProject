<template>
    <div class="manufacturer_slider_element">
        <div><img :src="'https://rosar-l.ru/media/images/' + mf_image_url" class="manufacturer_logo"></div>
        <div class="manufacturer_name">{{ this.mf_name }}</div>
    </div>
</template>
<style>
    .manufacturer_slider_element{
        background-color: #E4E4EF;
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:56px 20px 24px 20px;
        border-radius: 8px;
        text-align: center;
        font-family: 'Raleway';
        font-size: 20px;
        position: relative;
    }
    .manufacturer_logo{
        width: 180px;
        mix-blend-mode: darken;
        margin-bottom: 24px;
        object-fit: cover;
    }
</style>
<script>
export default {
    data() {
        return {
        }
    },
    props: {
        mf_name: String,
        mf_image_url: String
    }
}
</script>