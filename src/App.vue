<template>
  <main class="h-[100dvh] w-screen overflow-x-hidden overflow-y-auto">
    <Header/>
    <div class="w-full flex justify-center items-center relative">
      <figure class="relative md:h-200 w-142">
        <RouterView/>
        <div class="absolute top-0 -z-20 h-full flex items-center justify-center">
          <div class="loading absolute left-1/2 top-1/2 -z-10"/>
          <img src="./assets/bg.png" class="h-full object-contain" alt="Combat Actions">
        </div>
        <div class="flex flex-row justify-start absolute sm:flex hidden left-14 bottom-[1.56rem]">
          <div v-for="(link, index) in links" :key="link.path" class="tooltip tooltip-bottom" :data-tip="link.name">
            <RouterLink
                :to="link.path"
                class="btn btn-square w-[1.66rem] h-[1.66rem] text-[#a0bed6]"
                :class="route.path === link.path ? 'bg-[#0c0d0f]' : 'bg-[#202328] hover:bg-[#0c0d0f]'"
            >
              {{ index + 1 }}
            </RouterLink>
          </div>
        </div>
        <div class="flex flex-row justify-start absolute right-41 bottom-[1.56rem] sm:flex hidden">
          <!-- Left Navigation -->
          <div class="tooltip tooltip-bottom" :data-tip="'Previous: ' + prevRoute.name">
            <RouterLink
                :to="prevRoute.path"
                class="btn btn-square w-[2.46rem] h-[1.66rem] text-[#a0bed6] bg-[#202328] hover:bg-[#0c0d0f]"
            >
              <ChevronLeft/>
            </RouterLink>
          </div>

          <!-- Right Navigation -->
          <div class="tooltip tooltip-bottom" :data-tip="'Next: ' + nextRoute.name">
            <RouterLink
                :to="nextRoute.path"
                class="btn btn-square w-[2.46rem] h-[1.66rem] text-[#a0bed6] bg-[#202328] hover:bg-[#0c0d0f]"
            >
              <ChevronRight/>
            </RouterLink>
          </div>
        </div>
      </figure>
    </div>
    <div class="w-full text-xs p-2 lg:pr-48 pr-6 flex flex-row justify-end items-center">
      <a href="https://buymeacoffee.com/romanpretty" target="_blank"
         class="flex flex-row gap-2 items-center cursor-pointer hover:bg-accent/60 rounded-md p-2 inria-sans-light transition">
        <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy Roman a coffee">
        Buy me a coffee</a>
    </div>

  </main>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {useRoute} from "vue-router";
import Header from "@/components/Header.vue";
import {ChevronLeft, ChevronRight} from "lucide-vue-next";

export default defineComponent({
  components: {Header, ChevronRight, ChevronLeft},
  setup() {
    const route = useRoute();

    const links = [
      {path: "/", name: "Contents"},
      {path: "/maneuvers", name: "Maneuvers"},
      {path: "/actions", name: "Actions"},
      {path: "/item-qualities-passive", name: "Passive Item Qualities"},
      {path: "/item-qualities-active", name: "Active Item Qualities"},
      {path: "/environment", name: "Environment"},
      {path: "/recovery", name: "Recovery"},
    ];

    const currentIndex = computed(() => links.findIndex(link => link.path === route.path));

    const prevRoute = computed(() => {
      return currentIndex.value > 0 ? links[currentIndex.value - 1] : links[links.length - 1];
    });

    const nextRoute = computed(() => {
      return currentIndex.value < links.length - 1 ? links[currentIndex.value + 1] : links[0];
    });

    return {route, links, prevRoute, nextRoute};
  },
});
</script>

<style>
@import "./app.css";
</style>
