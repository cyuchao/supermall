<template>
  <div class="recommends">
      <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>      
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecViews",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>

<style>
    .recommends{
        display: flex;
        text-align: center;
        font-size: 14px;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .recommends-item{
        width: 100%;
    }
    .recommends-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
    }
</style>
