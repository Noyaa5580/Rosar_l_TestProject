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
                <div class="header_elem2__button-catalog">
                    <div></div>
                    <div id="button-catalog__point"></div>
                    <div></div>
                </div>
                <div class="logo">
                    <img src="~/static/logo.svg" alt="">
                </div>
                <a href="#" class="link_header_1">
                    <div class="header_elem2__ring_button">
                        <p id="ring_button__elem1">+7 (499) 248-09-09</p>
                        <p id="ring_button__elem2">Заказать звонок</p>
                    </div>
                </a>
            </div>
            <div class="null"></div>
            <div class="header_elem2__part_right">
                <a href="#"><img src="~static/icons/search.svg" alt="">Поиск</a>
                <a href="#"><img src="~static/icons/basket.svg" alt="">Корзина</a>
                <a href="#" id="link3"><img src="~static/icons/authorize.svg" alt="">Личный кабинет</a>
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

.logo {
    margin-left: 40px;
    margin-right: 24px;
}

.null {
    width: 20%;
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

.header_elem2__part_right>a:active :link :visited {
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
}</style>