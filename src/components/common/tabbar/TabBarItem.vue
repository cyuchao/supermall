<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // 表示传进来的path是字符串类型
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  components: {},
  data() {
    return {
      // isActive:true,
    };
  },
  computed: {
    isActive() {
      // $route指的是当前活跃的路由
      // 下面是判断，当前活跃的路由中是否含有props中传进来的path
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // replace里面的值不可以写死，用props，让别人传进来
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>
