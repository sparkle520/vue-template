<template>
  <div class="w-100vw h-100vh flex">
    <div
      class="fixed top-0 left-0 w-full h-[42px] f-c-c z-1000000000000000 bg-[#00aaf5] text-white text-sm font-bold tracking-widest"
    >
      映画『天気の子』関連場所訪問（聖地巡礼）についてのお願い
    </div>
    <div
      class="fixed right-10 bottom-10 flex z-1000000000000000"
      v-show="mainText"
    >
      <img
        class="w-full ml-auto w-148px h-148px object-cover mr-4 rounded-sm animate__animated animate-delay-[2000ms] animate-duration-2000"
        :class="{ animate__fadeInUp: mainText }"
        src="https://pic.imgdb.cn/item/674bac0cd0e0a243d4db866d.png"
        alt=""
      />
      <img
        class="w-full ml-auto w-148px h-148px object-cover mr-4 rounded-sm animate__animated animate-delay-[2200ms] animate-duration-2000"
        :class="{ animate__fadeInUp: mainText }"
        src="https://pic.imgdb.cn/item/674baab6d0e0a243d4db865c.jpg"
        alt=""
      />
      <img
        class="w-full ml-auto w-326px h-148px object-cover animate__animated animate-delay-[2400ms] animate-duration-2000"
        :class="{ animate__fadeInUp: mainText }"
        src="https://pic.imgdb.cn/item/674ba5f8d0e0a243d4db8614.png"
        alt=""
      />
    </div>
    <div
      class="nav w-[calc((365_/_1600)_*_100%)] h-100vh bg-white flex flex-col"
    >
      <ul class="p-4 f-c-c flex-col text-[#00aaf5] nav-ul mt-[53%]">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :style="{ animationDelay: index * 100 + 'ms' }"
          class="h-[45px] underline-hover cursor-pointer animate__animated animate__fadeInUp animate-delay-[100ms]"
          @click="navClick(index)"
        >
          <span>{{ navList[index] }}</span>
        </li>
      </ul>
      <div
        class="f-c-c mt-11 animate__animated animate__fadeInUp animate-delay-[800ms]"
      >
        <a
          href="https://sparkle520.top/"
          class="px-13 py-3.2 relative rounded group overflow-hidden font-medium bg-[#55acee] text-[#eff6fd] inline-block"
        >
          <span
            class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#eff6fd] group-hover:h-full opacity-90"
          ></span>
          <span class="relative group-hover:text-[#55acee]"
            >ふたたびの、雨</span
          >
        </a>
      </div>
    </div>
    <div
      ref="mainContent"
      class="main-content overflow-hidden relative w-[calc((1235_/_1600)_*_100%)] h-100vh"
    >
      <div class="sticky top-50% h-0 overflow-visible f-c-c z-10">
        <img
          class="top-text animate__animated animate-delay-[1000ms] animate-duration-1000"
          :class="{ animate__fadeIn: topText, animate__fadeOut: !topText }"
          src="https://pic.imgdb.cn/item/674b2a88d0e0a243d4db7dd2.png"
          alt=""
        />
      </div>
      <div></div>
      <div
        class="scroll-view w-full flex flex-col transition-duration-[10s]"
        :class="{ 'translate-y-[calc(-100vh-318px)] ': startAnimation }"
      >
        <div class="w-full h-100vh bg-[#1840a5]"></div>
        <div class="w-full relative">
          <div class="absolute right-42 w-35% top-91 flex">
            <img
              class="w-41% ml-auto"
              src="https://pic.imgdb.cn/item/674b29a8d0e0a243d4db7d91.png"
              alt=""
            />
          </div>
          <div
            class="absolute left-50% top-41% translate-[-50%,-40%] flex animate__animated animate-delay-[2000ms] animate-duration-3000"
            :class="{ animate__fadeIn: mainText }"
          >
            <img
              class="w-full ml-auto"
              src="https://pic.imgdb.cn/item/674b29f6d0e0a243d4db7db1.png"
              alt=""
            />
          </div>
          <img
            class="w-full min-h-[calc(100vh+318px)] h-auto object-cover"
            src="https://pic.imgdb.cn/item/674b2b17d0e0a243d4db7de0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";
const topText = ref(true);
const startAnimation = ref(false);
const mainText = ref(false);
const mainContent = ref<HTMLDivElement>();
onMounted(() => {
  mainContent.value = document.querySelector(".main-content");
  const mainContentLine =
    mainContent.value.scrollHeight - mainContent.value.clientHeight;
  mainContent.value.addEventListener("scroll", () => {
    let scrollTop = mainContent.scrollTop;
  });
  setTimeout(() => {
    startAnimation.value = true;
  }, 3000);
  setTimeout(() => {
    topText.value = false;
    mainText.value = true;
  }, 8000);
});
onUnmounted(() => {
  mainContent.value.removeEventListener("scroll", () => {});
});
const navList = [
  "NEWS",
  "THEATER",
  "TRAILER",
  "INTRODUCTION",
  "STORY",
  "CREDIT",
  "BLU-RAY&DVD",
];
let navDomList: HTMLLIElement[] = [];
const navClick = (index: number) => {
  if (navDomList.length > index) {
    navDomList[index].classList.add("animate-delay-important");
    navDomList[index].classList.add("animate__fadeOutDown");
  } else {
    navDomList = Array.from(document.querySelectorAll(".nav-ul li"));
    navDomList[index].classList.add("animate-delay-important");
    navDomList[index].classList.add("animate__fadeOutDown");
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Cardo";
  src: url("/src/assets/font/Cardo-Regular-4.ttf");
}
.nav-ul {
  font-family: "Cardo";
  font-size: 18px;
  letter-spacing: 0.1em;
  line-height: 2.5em;
}
.animate-delay-important {
  animation-delay: 100ms !important;
}
a {
  text-decoration: none;
}
.underline-hover span {
  background: linear-gradient(to right, #00aaf5, #00aaf5) no-repeat right bottom;
  background-size: 0 2px;
  transition: background-size 700ms;
}
.underline-hover span:hover {
  background-position-x: left;
  background-size: 100% 2px;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.main-content {
  scroll-behavior: smooth;
}
.scroll-view {
  transition: all 10s cubic-bezier(0.73, 0.02, 0.29, 1) 0s;
}
</style>