<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" 
            ref="back" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pullUpLoad = "true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-rec-views :recommends="recommends"></home-rec-views>
      <feature-view></feature-view>
      <!-- tabClick这个事件是自定义的，发送过来的时候，自带一个参数index -->
      <tab-control
        :titles="['流行', '样式', '新款']"
        class="tab-control"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackUp"></back-top>
  </div>
</template>

<script>
import HomeRecViews from "./childComps/HomeRecViews.vue";
import FeatureView from "./childComps/FeatureView.vue";
import HomeSwiper from "./childComps/HomeSwiper";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecViews,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  // 用data来保存请求过来的数据
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackUp:false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // 在组件创建好后就发送网络请求，用一个生命周期函数就好了
  created() {
    // 请求多个数据
    // 用 .then()就可以拿到数据了
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    backClick(){
      this.$refs.back.scrollTo(0,0)
    },
    contentScroll(position){
      // console.log(position);
      this.isShowBackUp = (-position.y) > 1000
    },
    loadMore(){
      // console.log('哈哈哈哈哈');
      this.getHomeGoods(this.currentType)
      this.$refs.back.scroll.refresh()
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.back.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content{
  height:calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
