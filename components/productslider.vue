<template>
    <div>
        <div class="slider_with_products">
            <div class="slider_name">ПРОИЗВОДИТЕЛЬ</div>
            <div class="pr_slider">
                <div v-on:click="slideproducts_banner_left1()">
                    <img src="~/static/Back.svg" alt="" id="back">
                </div>
                <div class="products">
                    <div class="slider_popular" id="slider_popular1">
                        <product v-for="product in products_popular" :key="product" :name="product.name"
                            :product_full_image="product.product_full_image"></product>
                    </div>
                </div>
                <div v-on:click="slideproducts_banner_right1()">
                    <img src="~/static/Next.svg" alt="" id="next">
                </div>
            </div>
        </div>
        <div class="slider_with_products">
            <div class="slider_name">ПРОИЗВОДИТЕЛЬ</div>
            <div class="pr_slider">
                <div v-on:click="slideproducts_banner_left2()">
                    <img src="~/static/Back.svg" alt="" id="back">
                </div>
                <div class="products">
                    <div class="slider_popular" id="slider_popular2">
                        <product v-for="product in products_popular" :key="product" :name="product.name"
                            :product_full_image="product.product_full_image"></product>
                    </div>
                </div>
                <div v-on:click="slideproducts_banner_right2()">
                    <img src="~/static/Next.svg" alt="" id="next">
                </div>
            </div>
        </div>
        <div class="slider_with_products">
            <div class="slider_name">ПРОИЗВОДИТЕЛЬ</div>
            <div class="pr_slider">
                <div v-on:click="slideproducts_banner_left3()">
                    <img src="~/static/Back.svg" alt="" id="back">
                </div>
                <div class="products">
                    <div class="slider_popular" id="slider_popular3">
                        <product v-for="product in products_popular" :key="product" :name="product.name"
                            :product_full_image="product.product_full_image"></product>
                    </div>
                </div>
                <div v-on:click="slideproducts_banner_right3()">
                    <img src="~/static/Next.svg" alt="" id="next">
                </div>
            </div>
        </div>
        <div class="slider_with_products">
            <div class="slider_name">ПРОИЗВОДИТЕЛЬ</div>
            <div class="pr_slider">
                <div v-on:click="slideproducts_banner_left4()">
                    <img src="~/static/Back.svg" alt="" id="back">
                </div>
                <div class="products">
                    <div class="slider_popular" id="slider_popular4">
                        <product v-for="product in products_popular" :key="product" :name="product.name"
                            :product_full_image="product.product_full_image"></product>
                    </div>
                </div>
                <div v-on:click="slideproducts_banner_right4()">
                    <img src="~/static/Next.svg" alt="" id="next">
                </div>
            </div>
        </div>
        <div class="slider_with_products">
            <div class="slider_name">ПРОИЗВОДИТЕЛЬ</div>
            <div class="pr_slider">
                <div v-on:click="slideproducts_banner_left5()">
                    <img src="~/static/Back.svg" alt="" id="back">
                </div>
                <div class="products">
                    <div class="slider_popular" id="slider_popular5">
                        <product v-for="product in products_popular" :key="product" :name="product.name"
                            :product_full_image="product.product_full_image"></product>
                    </div>
                </div>
                <div v-on:click="slideproducts_banner_right5()">
                    <img src="~/static/Next.svg" alt="" id="next">
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.slider_popular {
    display: flex;
    position: relative;
    right: 0%;
    transition: all 1s;
}

.main_slider_line {
    height: 420px;
    width: 1000px;
    position: relative;
    overflow: hidden;
}

.slider_popular {
    display: flex;
    position: relative;
    right: 0%;
    transition: all 1s;
}



.slider_with_products {
    margin-top: 56px;
}

.slider_name {
    display: flex;
    align-items: center;
    background-color: #E4E4Ef;
    color: #201E45;
    font-family: 'Montserrat Alternates';
    font-size: 32px;
    height: 50px;
    width: 400px;
    border-radius: 12px 12px 0px 0px;
    padding-left: 8px;
}

.pr_slider {
    display: flex;
    align-items: center;
    background-color: #E4E4Ef;
    border-radius: 0px 12px 12px 12px;
}

.products {
    display: flex;
    width: 1290px;
    overflow: hidden;
}
</style>
<script>
export default {

    data: function () {
        return {
            slider_products_offset: 0
        }
    },
    props: {
        products_popular: Array
    },
    methods: {
        slideproducts_banner_left1: function () {
            let productbanner = document.getElementById('slider_popular1');
            this.slider_products_offset -= 100;
            if (this.slider_products_offset < 0) {
                this.slider_products_offset = 200
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_right1: function () {
            let productbanner = document.getElementById('slider_popular1');
            this.slider_products_offset += 100;
            if (this.slider_products_offset > 200) {
                this.slider_products_offset = 0
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_left2: function () {
            let productbanner = document.getElementById('slider_popular2');
            this.slider_products_offset -= 100;
            if (this.slider_products_offset < 0) {
                this.slider_products_offset = 200
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_right2: function () {
            let productbanner = document.getElementById('slider_popular2');
            this.slider_products_offset += 100;
            if (this.slider_products_offset > 200) {
                this.slider_products_offset = 0
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_left3: function () {
            let productbanner = document.getElementById('slider_popular3');
            this.slider_products_offset -= 100;
            if (this.slider_products_offset < 0) {
                this.slider_products_offset = 200
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_right3: function () {
            let productbanner = document.getElementById('slider_popular3');
            this.slider_products_offset += 100;
            if (this.slider_products_offset > 200) {
                this.slider_products_offset = 0
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_left4: function () {
            let productbanner = document.getElementById('slider_popular4');
            this.slider_products_offset -= 100;
            if (this.slider_products_offset < 0) {
                this.slider_products_offset = 200
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_right4: function () {
            let productbanner = document.getElementById('slider_popular4');
            this.slider_products_offset += 100;
            if (this.slider_products_offset > 200) {
                this.slider_products_offset = 0
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_left5: function () {
            let productbanner = document.getElementById('slider_popular5');
            this.slider_products_offset -= 100;
            if (this.slider_products_offset < 0) {
                this.slider_products_offset = 200
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
        slideproducts_banner_right5: function () {
            let productbanner = document.getElementById('slider_popular5');
            this.slider_products_offset += 100;
            if (this.slider_products_offset > 200) {
                this.slider_products_offset = 0
            }
            productbanner.style.right = this.slider_products_offset + '%';
        },
    }

}
</script>