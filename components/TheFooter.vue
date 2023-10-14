<template>
    <div class="footer">
        <div class="logo">
            <img src="~/static/logo_f.svg" alt="">
        </div>
        <div class="about">
            <h2>О компании</h2>
            <a href="#" id="link">Прайс-лист</a>
            <a href="#" id="link">Как сделать заказ?</a>
            <a href="#" id="link">Доставка и оплата</a>
            <a href="#" id="link">О компании</a>
            <a href="#" id="link">Контакты</a>
        </div>
        <div class="Contacts">
            <h2>Контакты</h2>
            <p>info@rosar-l.ru</p>
            <p>+7(499)248-09-09</p>
            <div class="ring_button">Заказать звонок</div>
        </div>
        <div v-on:click.once="get_manufacturer()" @click="get_manufacturers()" class="manufacturer">Производители <img src="~/static/manufacturers.svg" alt=""></div>
        <div  class="items_manufacturer" id="items_in_manufacturer">
            <div v-for="item in manufacturer_footer" :key="item" class="man_items" id="manufacturer_items"><p>{{ item }}</p></div>
        </div>
        <div v-on:click="email_sending()" class="email_send">
            <p>Подпишитесь на рассылку</p>
            <div>Подписаться</div>
        </div>
    </div>
</template>
<style>
.footer {
    margin-top: 56px;
    width: 100%;
    height: 300px;
    background-color: #201e45;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-family: 'Raleway';
    font-size: 20px;
}

.about>h2 {
    font-family: 'Montserrat Alternates';
}

#link {
    margin: 4px 0px;
    color: white;
    font-family: 'Raleway';
    font-size: 20px;
}

.link:active,
:link,
:visited {
    text-decoration: none;
    color: white;
}

.Contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-family: 'Raleway';
    font-size: 20px;
}

.Contacts>p {
    margin: 4px 0px;
}

.Contacts>h2 {
    font-family: 'Montserrat Alternates';
}

.ring_button {
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #404267;
    color: white;
    font-family: 'Raleway';
}

.email_send {
    display: flex;
    align-items: center;
    color: white;
    font-family: 'Montserrat Alternates';
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
}

.email_send>p {
    width: 200px;
    display: flex;
    text-align: center;
    margin: 8px;
}

.email_send>div {
    width: 200px;
    height: 50px;
    background-color: #FBC33A;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 300ms;
}

.email_send>div:active {
    width: 210px;
    height: 60px;
}

.manufacturer {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat Alternates';
    font-size: 25px;
    cursor: pointer;
}

.items_manufacturer{
    background-color: #404267;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 385px;
    z-index: 1;
    border-radius: 20px;
    width: 360px;
    height: 760px;
}
.man_items{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
    background-color: #201e45;
    width: 330px;
    margin: 4px 0px;
    border-radius: 12px;
    color: white;
    font-size: 14px;
    font-family: "Raleway";
}
.man_items > p {
    margin-left: 4px;
}
.show{
    display: flex;
}
</style>
<script>
import axios from "axios";
export default {
    data: function () {
        return {
            manufacturer: null,
            manufacturer_footer: [],
        };
    },
    methods: {
        get_manufacturer: function () {
            let manufacturers = this.manufacturer.data;
            manufacturers.forEach((manufacturer) => {
                this.manufacturer_footer.push(manufacturer.mf_name);
            });
            console.log(this.manufacturer_footer);
        },
        email_sending: function () {
            console.log('timofeybarya2005@gmail.com');
        },
        get_manufacturers: function () {
            let items = document.getElementById('items_in_manufacturer');
            items.classList.toggle('show')
        }
    },
    mounted() {
        axios
            .get("/api/v2/manufacturers")
            .then((response) => (this.manufacturer = response));
    },
};
</script>