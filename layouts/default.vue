<template>
  <div>
    <Nuxt />
    <header>
      <TheHeader />
    </header>
    <main>
      <div v-on:click="check()" class="banner" id="banner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
    </main>
    <footer>
      <TheFooter/>
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
  border-radius: 12px;
  width: 1188px;
  height: 570px;
  background-image: URL("~/static/banner_background.svg");
  margin-top: 56px;
}
</style>
<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      info_manufacturers: null,
      manufacturer_img: []
    };
  },
  methods: {
    check: function () {
      console.log(JSON.stringify(this.info_manufacturers));
      let manufacturers = this.info_manufacturers.data;
      manufacturers.forEach(manufacturer => {
        this.manufacturer_img.push(manufacturer.mf_image_url);
      });
      console.log(this.manufacturer_img);
    },
    photo: function (){
      var img1 = new Image();
      img1.src=this.manufacturer_img[0];
      let a = document.getElementById('banner');
      a.appendChild(img1);
    }
  },
  mounted() {
    axios
      .get('https://www.rosar-l.ru/api/v2/manufacturers')
      .then(response => (this.info_manufacturers = response));
  }
}
</script>

