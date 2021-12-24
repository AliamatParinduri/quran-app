<template>
    <div @mousemove="move">
        <label>Cari Surah:</label>
        <input type="text" v-model="searchSurah" @keyup="searchOfSurah" class="border w-full h-10 px-3 focus:outline-none rounded mt-2 focus:ring focus:ring-blue-300 shadow-sm" placeholder="Ketikkan Nama Surah">
        <div v-if="resultSearch.list.length > 0">
            <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 mt-5">
            <div v-for="(list, index) in resultSearch.list" :key="index">
                <!-- <router-link :to="{name: 'DetailSurah', params: {id: list.number} }" class="hvrlist"> -->
                    <a href="#" @click="detailSurah('findSurah', list.number)" class="hvrlist">
                        <CardSurah :data="list" />
                    </a>
                <!-- </router-link> -->
            </div>
            </div>
        </div>
        <div v-else-if="statusSearch">
            <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 mt-5">
                <AlertError :message="statusSearch" />
            </div>
        </div>
        <div v-else>
            <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 mt-5">
                <div v-for="(list, index) in quran.list" :key="index">
                    <!-- <router-link :to="{name: 'DetailSurah', params: {id: list.number} }" class="hvrlist"> -->
                        <a href="#" @click="detailSurah('findSurah', list.number)" class="hvrlist">
                            <CardSurah :data="list" />
                        </a>
                    <!-- </router-link> -->
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
    </div>
</template>

<script setup>
import { computed, onBeforeMount, onUnmounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import CardSurah from "../components/CardSurah.vue";
import AlertError from "../components/AlertError.vue";

    const store = useStore();
    const searchSurah = ref('');
    const statusSearch = ref('');
    const resultSearch = reactive({
        list: [],
    })
    const quran = reactive({
        list: [],
    })

    const searchOfSurah = () => {
        const mencari = quran.list.filter(e => {
            return e.name.transliteration.id.toLowerCase().includes(searchSurah.value.toLowerCase());
        })
        
        if (mencari.length > 0 && searchSurah.value != "") {
            resultSearch.list = mencari;
            statusSearch.value =  "";
            return resultSearch.list;
        }else if (mencari.length == 0 && searchSurah.value != "") {
            resultSearch.list = [];
            statusSearch.value =  "Maaf, Surah Tidak Ditemukan...!";
        }else{
            statusSearch.value =  "";
            resultSearch.list = [];
            return quran.list;
        }
    }

    store.dispatch('getSurah');
    quran.list = computed(() => {
        return store.state.surah;
    });

    const detailSurah = defineEmits('findSurah');

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

<style scoped>
    .hvrlist:hover {
        color: #0061a8 !important
    }
</style>