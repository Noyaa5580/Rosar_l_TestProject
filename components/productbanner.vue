<template>
    <div class="banner_item">
        <div><img :src="'https://rosar-l.ru/media/images/' + product_full_image" class="product_pic"></div>
        <div class="banner_text">
            <div class="banner_text">СКИДКА НА ПРОДУКЦИЮ 15% </div>
            <div class="link">Перейти</div>
        </div>
    </div>
</template>
<style>
.banner_item {
    min-width: 1188px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'montserrat Alternates';
    color: white;
    font-size: 36px;
    
}

.product_pic {
    min-width: 400px;
    max-height: 400px;
}
.banner_text{
    display: flex;
    flex-direction: column;
}
.link{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: #201E45;
    font-family: 'Raleway';
    font-size: 24px;
    min-height: 70px;
    max-width: 200px;
    background-color: #E4E4EF;
    margin-top: 200px;
    margin-left: 200px;
}
</style>
<script>
export default {
    data: function () {
        return {}
    },
    props: {
        product_full_image: String,
        name: String
    }
}
</script>