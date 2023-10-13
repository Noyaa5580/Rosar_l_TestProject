<template>
    <div class="header">
        <div class="header_elem1">
            <a href="#">
                <p>Прайс-лист</p>
            </a>
            <a href="#">
                <p>Как сделать заказ?</p>
            </a>
            <a href="#">
                <p>О компании</p>
            </a>
            <a href="#">
                <p>Контакты</p>
            </a>
        </div>
        <div class="header_elem2">
            <div class="header_elem2__part_left">
                <div v-on:click.once="get_catalog()" @click="get_catalog_show()" class="header_elem2__button-catalog"
                    id="catalog_button">
                    <div></div>
                    <div id="button-catalog__point"></div>
                    <div></div>
                </div>
                <div class="elem2_catalog" id="catalog_all">
                    <div v-for="item in data_catalog" :key="item" class="item_catalog"><img
                            src="~static/catalog_drop_icon.svg" alt="">{{ item }}</div>
                </div>
                <div class="logo">
                    <img src="~/static/logo.svg" alt="">
                </div>
                <a href="#" class="link_header_1">
                    <div class="header_elem2__ring_button" id="ring_button">
                        <p id="ring_button__elem1">+7 (499) 248-09-09</p>
                        <p id="ring_button__elem2">Заказать звонок</p>
                    </div>
                </a>
            </div>
            <div class="null">
                <form action="" class="Searching-module" id="searching_module">
                    <div v-on:click="drop()" id="categories">
                        <p id="drop_main">{{ $data.all }}</p>
                        <div id="dropdown" class="dropdown-content">
                            <p v-on:click="change_cathegory1()" class="drop-content" id="drop1">{{ $data.name }}</p>
                            <p v-on:click="change_cathegory2()" class="drop-content" id="drop2">{{ $data.article }}</p>
                            <p v-on:click="change_cathegory3()" class="drop-content" id="drop3">{{ $data.cathegory }}</p>
                            <p v-on:click="change_cathegory4()" class="drop-content" id="drop4">{{ $data.manufacturer }}</p>
                            <p v-on:click="change_cathegory5()" class="drop-content" id="drop4">{{ $data.all }}</p>
                        </div>
                    </div>
                    <input type="text" v-model="value" id="searching_input"
                        placeholder="Поиск по артикулу/ названию/ категории/ производителю">
                    <p id="searched_text">{{ value }}</p>
                    <div class="search_button" id="s_btn"><img src="~static/icons/search.svg" alt=""></div>
                </form>
                <div class="searched_items_all">
                    <div v-for="item in search_name" :key="item" class="searched_item">
                        <div>{{ item.name }}</div>
                        <img :src="'https://rosar-l.ru/media/images/' + item.product_full_image" class="searched_pic">
                    </div>
                    <div v-for="item in search_categories" :key="item" class="searched_item">
                        <div>{{ item.category_name }}</div>
                    </div>
                    <div v-for="item in search_manufacturers" :key="item" class="searched_item">
                        <div>{{ item.mf_name}}</div>
                    </div>
                </div>
            </div>
            <div class="header_elem2__part_right">
                <a href="#"><img src="~static/icons/basket.svg" alt="">
                    <p id="part_right__2">Корзина</p>
                </a>
                <a href="#" id="link3"><img src="~static/icons/authorize.svg" alt="">
                    <p id="part_right__3"> Личный кабинет</p>
                </a>
            </div>
        </div>

    </div>
</template>
<style>
.header {
    width: 100%;
    background-color: #E4E4EF;
}

.header_elem1 {
    height: 80px;
    border-bottom: 1px solid #404267;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: "Montserrat Alternates";
    color: #201E45;
    font-size: 20px;
}

.header_elem1>a {
    margin: 0px 24px;
    text-decoration: none;
    color: #201E45;
}

.header_elem1>a :active :link :visited {
    text-decoration: none;
    color: #201E45;
}

.header_elem2 {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header_elem2__button-catalog {
    width: 42px;
    height: 42px;
    background-color: #201E45;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: 300ms;
}

.header_elem2__button-catalog:hover {
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-right: calc(-8px);
}

.header_elem2__button-catalog>div {
    width: 30px;
    height: 5px;
    border-radius: 4px;
    background-color: white;
}

#button-catalog__point {
    margin: 4px 0px;
}

.header_elem2__ring_button {
    font-family: "Montserrat Alternates";
    display: flex;
    flex-direction: column;
    align-items: center;
}

#ring_button__elem1 {
    font-size: 16px;
}

#ring_button__elem2 {
    font-size: 12px;
}

.link_header_1 {
    text-decoration: none;
    color: #201E45;
}

.link_header:active :link :visited {
    text-decoration: none;
    color: #201E45;
}

.header_elem2__part_left {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
}

.elem2_catalog {
    width: 350px;
    height: 950px;
    background-color: #404267;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 40px;
    top: 190px;
    z-index: 1;
    border-radius: 20px;
}

.item_catalog {
    background-color: #201E45;
    width: 320px;
    min-height: 50px;
    margin: 4px;
    color: white;
    font-family: 'Raleway';
    font-size: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
}

.item_catalog>img {
    margin: 16px;
}

.logo {
    margin-left: 40px;
    margin-right: 24px;
}

.header_elem2__part_right {
    display: flex;
    align-items: center;
}

.header_elem2__part_right>a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #201E45;
    font-family: "Montserrat Alternates";
    margin-left: 34px
}

#part_right__search {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #201E45;
    font-family: "Montserrat Alternates";
    margin-left: 34px;
    cursor: pointer;
}

.header_elem2__part_right>a:active,
:link,
:visited {
    text-decoration: none;
    color: #201E45;
}

.header_elem2__part_right>a>img {
    margin-right: 4px;
}

#link3 {
    margin-right: 24px;
}

#link3 :active :link :visited {
    text-decoration: none;
    color: #201E45;
}

.Searching-module {
    transition: all ease-in 300ms;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 840px;
    background-color: #fff;
    border: 1px solid #201E45;
    border-radius: 50px;
}

#categories {
    width: 150px;
    height: 35px;
    background-color: #EFEFEF;
    font-family: "Raleway";
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 40px;
    position: relative;
    margin-left: 24px;
    cursor: pointer;
}

#categories>p {
    margin-left: 8px;
}

#drop_main>img {
    margin-right: 12px;
}

.dropdown-content {
    display: none;
    z-index: 2;
    background-color: #EfEfEF;
    font-family: "Raleway";
    position: relative;
    width: 145px;
    top: 65px;
    right: 55px;
    border-radius: 8px;
    font-size: 12px;
    padding: 3px;

}

.dropdown-content>p {
    position: relative;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.show1 {
    display: flex;
    flex-direction: column;
}

.show2 {
    display: flex;
}

.show3 {
    display: none;
}

#searching_input {
    margin-left: 40px;
    border: none;
    outline: none;
    width: 500px;
}

.search_button {
    background-color: #EFEFEF;
    width: 100px;
    height: 60px;
    border-radius: 0px 50px 50px 0px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.toggle_elem {
    margin-right: 12px;
    cursor: pointer;
}

#searched_text {
    display: none;
}

.searched_items_all {
    display: flex;
    background-color: #E4E4EF;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    width: 818px;
    font-family: 'Raleway';
    color: #201E45;
    padding: 12px;
    border-radius: 12px;
}

.searched_pic {
    margin-left: 60px;
    max-height: 80px;
    max-width: 80px;
}

.searched_item {
    margin: 4px;
    padding: 4px;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-radius: 8px;
}
</style>

<script>
import axios from "axios";
export default {
    data: function () {
        return {
            all: 'Везде',
            name: 'По наименованию',
            article: 'По артикулу',
            cathegory: 'По категории',
            manufacturer: 'Производитель',
            info: null,
            data_catalog: [],
            search_name: [],
            search_categories: [],
            search_manufacturers: [],
            value: ''
        };
    },
    methods: {
        drop: function () {
            var a = document.getElementById('dropdown');
            a.classList.toggle('show1')
        },
        change_cathegory1: function () {
            let droppoint = document.getElementById('drop_main');
            droppoint.innerHTML = this.$data.name;
            let a = document.getElementById('dropdown');
            a.style.right = '145px';
        },
        change_cathegory2: function () {
            let droppoint = document.getElementById('drop_main');
            droppoint.innerHTML = this.$data.article;
            let a = document.getElementById('dropdown');
            a.style.right = '100px';
        },
        change_cathegory3: function () {
            let droppoint = document.getElementById('drop_main');
            droppoint.innerHTML = this.$data.cathegory;
            let a = document.getElementById('dropdown');
            a.style.right = '107px';
        },
        change_cathegory4: function () {
            let droppoint = document.getElementById('drop_main');
            droppoint.innerHTML = this.$data.manufacturer;
            let a = document.getElementById('dropdown');
            a.style.right = '122px';
        },
        change_cathegory5: function () {
            let droppoint = document.getElementById('drop_main');
            droppoint.innerHTML = this.$data.all;
            let a = document.getElementById('dropdown');
            a.style.right = '50px';
        },
        search: function () {
            let button_s = document.getElementById("part_right__search");
            let form_container = document.querySelector('.null');
            let search_string = document.getElementById('searching_module');
            search_string.classList.add('show2');
            let ring = document.getElementById('ring_button');
            ring.style.display = 'none'
            button_s.style.display = 'none'
            form_container.style.width = '55%';
            let menu_button_text;
            for (let i = 2; i <= 3; i++) {
                menu_button_text = document.getElementById("part_right__" + i);
                menu_button_text.style.display = 'none';
            }
        },
        close_search: function () {
            let button_s = document.getElementById("part_right__search");
            let form_container = document.querySelector('.null');
            let search_string = document.getElementById('searching_module');
            search_string.classList.remove('show2');
            let ring = document.getElementById('ring_button');
            ring.style.display = 'flex'
            button_s.style.display = 'flex'
            form_container.style.width = '40%';
            let menu_button_text;
            for (let i = 2; i <= 3; i++) {
                menu_button_text = document.getElementById("part_right__" + i);
                menu_button_text.style.display = 'flex';
            }
        },
        get_catalog: function () {
            let manufacturers = this.info.data.results;
            manufacturers.forEach(manufacturer => {
                this.data_catalog.push(manufacturer.category_name)
            });
            console.log(this.data_catalog)
        },
        get_catalog_show: function () {
            let catalog = document.getElementById('catalog_all');
            catalog.classList.toggle('show2')
        },

    },
    mounted() {
        this.$watch('value', function () {
            let drop_main = document.getElementById('drop_main');
            if (drop_main.innerHTML == "Везде") {
                axios
                    .get('/api/v2/search/?type=all&text=' + this.value)
                    .then(response => {
                        this.search_name = response.data.products;
                        this.search_categories = response.data.categories;
                        this.search_manufacturers = response.data.manufacturers;
                    });
            };
            if (drop_main.innerHTML == "По наименованию") {
                axios
                    .get('/api/v2/search/?type=name&text=' + this.value)
                    .then(response => {
                        this.search_name = response.data.products;
                    });
            };
            if (drop_main.innerHTML == "По артикулу") {
                axios
                    .get('/api/v2/search/?type=article&text=' + this.value)
                    .then(response => {
                        this.search_data = response.data.products;
                    });
            };
            if (drop_main.innerHTML == "Производитель") {
                axios
                    .get('/api/v2/search/?type=manufacturers&text=' + this.value)
                    .then(response => {
                        this.search_manufacturers = response.data.manufacturers;
                    });
            };
            if (drop_main.innerHTML == "По категории") {
                axios
                    .get('/api/v2/search/?type=categories&text=' + this.value)
                    .then(response => {
                        this.search_categories = response.data.categories;
                    });
            };
        }),
            axios
                .get('/api/v2/categories')
                .then(response => (this.info = response));
    }
} 
</script>

