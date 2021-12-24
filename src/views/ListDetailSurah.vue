<template>

    <div class="mt-4 lg:mt-6" @mousemove="move">
        <router-link class="border-2 px-2 py-1 shadow-md rounded border-blue-300 text-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-300 hover:text-white hover:bg-blue-400" :to="{name: 'Surah' }">Back</router-link>

        <div class="flex flex-col p-0 lg:p-4 mt-4 lg:mt-6 items-center justify-center">
            <div class="flex flex-col font-semibold text-2xl">{{ result.name.transliteration.id }} ({{ result.name.translation.id }}) </div>
            <div class="flex flex-col ">{{ result.numberOfVerses }} ayat | {{ result.revelation.id }}</div>
        </div>

        <div class="grid grid-cols-1 px-2 mt-4 lg:mt-0 lg:px-20">
            <div v-for="(data, index) in result.verses" :key="index" :class=" index%2==0 ? 'bg-gray-100' : 'bg-white'" class="border-b">
                <div class="p-5 text-sm font-medium text-gray-900 items-center">
                    <div class="flex justify-between">
                        <div>
                            <div class="flex justify-center items-center border-2 border-gray-500 w-8 h-8 rounded-full">
                                {{ (index+1) }}
                            </div>
                        </div>
                        <div class="text-2xl arabic leading-relaxed antialised text-right">{{ data.text.arab }}</div>
                    </div>
                    <div class="mt-5">
                        <div class="leading-relaxed antialised" >{{ data.translation.id }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-1 right-6 lg:right-14 bottom-12 lg:bottom-2 z-10" :class="{'btnatas' : showButtunScroll }">
            <a href="#atas" class="bg-gradient-to-tr items-center text-sm lg:text-md mb-3 lg:mb-0 justify-center from-blue-500 to-indigo-600 rounded-lg flex lg:inline-flex px-3 py-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import axios from 'axios';
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
    
    const store = useStore();
    const route = useRoute();

    const data =  store.state.idSurah || route.params.id;
    const surah = reactive({});
    const result = await axios.get(`https://api.quran.sutanlab.id/surah/${data}`).then(e => e.data.data).catch(e => 'Error '+ e);

    const showButtunScroll = ref(true);
    const lastScrollPosition = ref(550);

    const move = () => {
        window.addEventListener('scroll', onScroll)
    }
    
    const onScroll = () => {
        const currentScrollPosition  = window.pageYOffset;
        // Get the current scroll position
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
            return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
            return
        }
        // Here we determine whether we need to show or hide the navbar
        showButtunScroll.value = currentScrollPosition < lastScrollPosition.value
    }

</script>

<style>

</style>