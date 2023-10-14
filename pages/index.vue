<template>
  <div>
    <Nuxt />
    <header>
      <TheHeader />
    </header>
    <main>
      <div class="banner" id="banner">
        <bannerslider :info_products="info_products" />
        <div class="pagination_banner">
          <div v-on:click="slide_banner_left()" class="pagination_left" id="button_back_banner"><img
              src="~/static/pag_left.svg" alt=""></div>
          <div v-on:click="slide_banner_right()" class="pagination_right" id="button_next_banner"><img
              src="~/static/pag_right.svg" alt=""></div>
        </div>
      </div>
      <div class="popular_manufacturers">
        <h2>Популярные производители</h2>
      </div>
      <div class="main_slider_line">
        <theslidermanufacturers :manufacturers="manufacturers.data" />
      </div>
      <div class="pagination">
        <div v-on:click="slide_elements_left()" class="pagination_left" id="button_back"><img
            src="~/static/pag_left.svg" alt=""></div>
        <div class="pagination_point pagination_active" id="point1"></div>
        <div class="pagination_point" id="point2"></div>
        <div class="pagination_point" id="point3"></div>
        <div class="pagination_point" id="point4"></div>
        <div v-on:click="slide_elements_right()" class="pagination_right" id="button_next"><img
            src="~/static/pag_right.svg" alt=""></div>
      </div>
      <div class="popular_manufacturers">
        <h2>Популярные товары</h2>
      </div>
      <productslider :products_popular="products_popular" />
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>
<style>
* {
  margin: 0%;
  padding: 0%;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner {
  display: flex;
  border-radius: 12px;
  width: 1188px;
  height: 570px;
  background-image: URL("~/static/banner_background.svg");
  margin-top: 56px;
  overflow: hidden;
}

.pagination_banner {
  display: flex;
  position: absolute;
  top: 80%;
  left: 48%;
}

.popular_manufacturers {
  font-family: 'Montserrat Alternates';
  color: #201E45;
  font-size: 32px;
  margin-top: 56px;
}

.pagination {
  display: flex;
  align-items: center;
}

.pagination_point {
  width: 13px;
  height: 13px;
  background-color: #201E45;
  border-radius: 50%;
  margin: 4px;
}

.pagination_left,
.pagination_right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #B58206;
  cursor: pointer;
}

.pagination_active {
  background-color: #B58206;
}

.items_manufacturer {
  top: 3059px;
}
</style>
<script>
// import theslidermanufacturers from '~/components/theslidermanufacturers.vue';
import axios from 'axios'
import productslider from '../components/productslider.vue';
export default {
  name: 'IndexPage',
  components: { productslider },
  data: function () {
    return {
      info_manufacturers: null,
      manufacturers: [],
      info_products: [],
      images_urls: [],
      products_popular: [],
      slider_offset: -273,
      banner_offset: 0,
      pagination_count: null,
      slider_products_offset: 0
    };
  },
  methods: {
    slide_elements_right: function () {
      const slider_line = document.getElementById('slider_manufacturers');
      this.slider_offset += 102;
      // this.edit_paginationplus();
      if (this.slider_offset > 33) {
        this.slider_offset = -273
      };
      slider_line.style.right = this.slider_offset + '%';
      console.log(this.slider_offset);
    },
    slide_elements_left: function () {
      const slider_line = document.getElementById('slider_manufacturers');
      this.slider_offset -= 102;
      // this.edit_paginationminus();
      if (this.slider_offset < -273) {
        this.slider_offset = 33
      }
      slider_line.style.right = this.slider_offset + '%';
      console.log(this.slider_offset);
    },
    slide_banner_right: function () {
      let banner = document.getElementById('info_banner');
      this.banner_offset += 100;
      if (this.banner_offset > 200) {
        this.banner_offset = 0
      }
      banner.style.right = this.banner_offset + '%';
    },
    slide_banner_left: function () {
      let banner = document.getElementById('info_banner');
      this.banner_offset -= 100;
      if (this.banner_offset < 0) {
        this.banner_offset = 200
      }
      banner.style.right = this.banner_offset + '%';
    },
    // edit_pagination: function () {
    //   this.pagination_count = 1;
    //   let pagination1 = document.getElementById('point1');
    //   let pagination2 = document.getElementById('point2');
    //   let pagination3 = document.getElementById('point3');
    //   let pagination4 = document.getElementById('point4');
    //   if (this.pagination_count == 1) {
    //     this.pagination_count = 2;
    //     pagination1.classList.toggle('pagination_active');
    //     pagination2.classList.toggle('pagination_active');
    //     console.log(this.pagination_count)
    //   }
    //   if (this.pagination_count == 2) {
    //     this.pagination_count = 3;
    //     pagination2.classList.toggle('pagination_active');
    //     pagination3.classList.toggle('pagination_active');
    //     console.log(this.pagination_count)
    //   }
    //   if (this.pagination_count == 3) {
    //     this.pagination_count = 4;
    //     pagination3.classList.toggle('pagination_active');
    //     pagination4.classList.toggle('pagination_active');
    //     console.log(this.pagination_count)
    //   }
    //   if (this.pagination_count == 4) {
    //     this.pagination_count = 1;
    //     pagination4.classList.toggle('pagination_active');
    //     pagination1.classList.toggle('pagination_active');

    //   }
  },
  mounted() {
    axios
      .get("/api/v2/manufacturers")
      .then(response => (this.manufacturers = response));
    axios
      .get('/api/v2/products/?limit=3&offset=50')
      .then(response => (this.info_products = response.data.results));
    axios
      .get('/api/v2/products/?limit=10&offset=0')
      .then(response => (this.products_popular = response.data.results))
  },
}


</script>

