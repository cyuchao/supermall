<template>
  <div class="wrapper" ref="aaaa">
    <ul class="content">
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
      <li>aaaaaa</li>
    </ul>
  </div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  data(){
    return {
      scroll:null
    }
  },
  created(){
    // const scroll = document.querySelector('.wrapper')
    // this.scroll = new BS(scroll,{
       
    // })
  },
  mounted(){
    // console.log(this.$refs.aaaa);
    // console.log(document.querySelector('.wrapper'));

    this.scroll = new BScroll(this.$refs.aaaa,{
      
    }) 
    // console.log(this.scroll)

  },
  components: {
    BScroll
  }
};
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: red;
    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>
