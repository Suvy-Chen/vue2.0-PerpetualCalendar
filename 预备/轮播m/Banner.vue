<template>
    <div class="banner"><!--需要在最外层包一个div，否则会报错-->
        <!-- 轮播 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>

    </div>
</template>

<script>    
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    // 通过props获取父组件传递过来的属性listImg （vue官方api）
    // mounted类似react中的componentDidMount方法，实例化swiper必须等到dom渲染完成才能操作
    export default {
        props: ['listImg'],
        mounted() {  
            /* 轮播 */
            console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 2000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        },
        methods: {  
            /* 固定在顶部更多 */ 
            more: function(){  
                console.log("更多")  
            }  
        }  
    }
</script>

<!-- 
    报错Cannot find module "less" !!!
    需要安装 npm install less less-loader 
    解决OK
-->
<style lang="less">
    .banner{
        position:fixed;
        top: 9.2%;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .swiper-container {
        width: 100%;
        height: 30%;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>