<template>
<!-- 首页 -->
<div class="home">
  <!-- 搜素 -->
  <div class="home_search_bar">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> 
  </div>   
  <!-- 轮播 -->
  <div class="home_swipe">
    <mt-swipe :auto="2000" @change="handleChange">
      <mt-swipe-item class="swip-item-1 item"><img src="../assets/images/01.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="swip-item-2 item"><img src="../assets/images/02.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="swip-item-3 item"><img src="../assets/images/03.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>

  <!-- 流行 -->
  <div class="ab">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  
    <ul>
      <!-- <li v-for="item in activityList.locs">{{ item.name }}</li> -->
      <li v-for="item in popular_books_list.books">
      <span>{{item.id}}</span>
      <img :src="item.image" alt="">
       <!--  <p v-for="item2 in item.books"><img :src="item2.images" alt=""></p> -->
      </li>
    </ul>


 </mt-loadmore>
  </div>
 <!--  <div>
   <img v-model="image">{{image}}</img>
   <p>{{loc_name}}</p>
 </div> -->

 </div> 
</template>

<script>
import {api} from '../global/api';
export default {
  name: 'Home',
  data () {
    return {
      /*要搜索的值*/
      value:' ',
      allLoaded:false, //全部加载
      page:0, //默认的流行内容起始页
      popular_books_list:{
        books:[]
      }
      //activityList
    }
  },
  mounted() {
    var vm = this;
    /*活动列表*/
    vm.getList();
  },
  methods: {
    /*请求活动列表*/
    getList (page) {
        var vm = this;
        vm.$http.get(api.popular_books_list).then((response) => {
        // 响应成功回调       
        console.log(response)
        let data= response.body;
        vm.popular_books_list = data.data;
        console.log(vm.popular_books_list)
      }, (response) => {
        // 响应错误回调
        console.log('失败回调')    
      })
    },   
    //return false;
    /*轮播*/
    handleChange(index) {
      //console.log(index)
    },
    loadTop:function(){
      console.log(this.page);
      //默认是第三页，下拉刷新的时候获取第一页
      //this.page=1;
      this.getList(this.page);
      this.$refs.loadmore.onTopLoaded(); //手动调用，组件定位
      this.$refs.loadmore.onBottomLoaded();
      console.log("上拉执行");
    },
    loadMore:function(){
      console.log("loadMore");                 
    },
    loadBottom:function() {
      console.log("下拉在执行");
      this.page=this.page+1;             
      console.log("this.page:"+this.page);
      this.getList(this.page);
      if(this.page==20){
        this.allLoaded=true;  //当所有数据 全部读取完成的时候 停止下拉读取数据 
        //this.$refs.loadmore.onBottomLoaded();
      }  
    }
  }
}
</script>
<style scoped>
.home{
	width: 50%;
  height: 50%;
  position: position
}
.home_search_bar{
  position: fixed;
  width: 100%;
  height: 10%;
  margin: auto;
  top: 5%;
} 
.mint-search{
  position: relative;
  width: 96%;
  top: 10%;  
}
.mint-searchbar {
 color: #f3f1f1 ;
}
.home_swipe {
  position: absolute;
  width: 96%;
  height: 30%;
  top: 14%;
}
.ab{
  position: absolute;
  width: 96%;
  height: 40%;
  top: 45%;
}
.ab ul{
  width: 96%;
  height: 100%;
}
.ab ul li{
  list-style: none;
}
 .ab img{
  width: 2rem;
  height: 2rem;
} 
.home_footer{
 position: fixed;
  width: 96%;
  height: 10%;
  bottom: 0;
}
div a:link{
  text-decoration: none;
  color: #2c3e50;
}

</style>