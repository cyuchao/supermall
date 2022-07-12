<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-rec-views :recommends="recommends"></home-rec-views>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecViews from "./childComps/HomeRecViews.vue";

import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecViews
  },
  // 用data来保存请求过来的数据
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  // 在组件创建好后就发送网络请求，用一个生命周期函数就好了
  created(){
    // 请求多个数据
    // 用 .then()就可以拿到数据了
    getHomeMultidata().then(res=>{
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
