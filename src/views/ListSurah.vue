<template>
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
        </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import CardSurah from "../components/CardSurah.vue";
import AlertError from "../components/AlertError.vue";

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

    quran.list = await axios.get('https://api.quran.sutanlab.id/surah').then(e => e.data.data).catch(e => console.log("Error: " +e))

    const detailSurah = defineEmits('findSurah');

</script>

<style scoped>
    .hvrlist:hover {
        color: #0061a8 !important
    }
</style>