<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carouselList in list"
        :key="carouselList.id"
      >
        <img :src="carouselList.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      //不管数据有没有变化，上来立即监听一次
      immediate: true,
      //因为这个list数据是父组件给的，所以list监听不到变化
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.floor1Swiper, {
            loop: true,
            //如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球的时候也切换图片
              clickable: true,
            },
            //如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>