<template>
    <div class="item_popular_slider" @click.prevent="openProduct(name)">
        <div><img :src="'https://rosar-l.ru/media/images/' + product_full_image" class="product_pic_slider"></div>
        <div class="description_product">{{ name }}</div>
    </div>
</template>
<style>
.item_popular_slider {
    right: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'raleway';
    min-width: 300px;
    min-height: 300px;
    border: 3px solid rgba(0, 128, 0, 0);
    border-radius: 8px;
    margin: 8px;
    background-color: white;
}

.item_popular_slider:hover {
    border: 3px solid #FBC33A;
}

.product_pic_slider {
    max-width: 170px;
    max-height: 170px;
}

.description_product {
    overflow: auto;
}
</style>
<script>
export default {
    data: function () {
        return {}
    },
    props: {
        product_full_image: String,
        name: String,
    },
    methods: {
        openProduct(product) {
            this.$router.push('/products/' + product);

        }
    }
}
</script>