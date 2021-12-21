<template>

    <div class="mt-4 lg:mt-6">
        <router-link class="border-2 px-2 py-1 shadow-md rounded border-blue-300 text-blue-400 focus:outline-none focus:ring focus:ring-blue-300 hover:text-white hover:bg-blue-400" :to="{name: 'Surah' }">Back</router-link>

        <div class="flex flex-col p-0 lg:p-4 mt-4 lg:mt-6 items-center justify-center">
            <div class="flex flex-col font-semibold text-2xl">{{ result.name.transliteration.id }} ({{ result.name.translation.id }}) </div>
            <div class="flex flex-col ">{{ result.numberOfVerses }} ayat | {{ result.revelation.id }}</div>
        </div>

        <div class="grid grid-cols-1 px-2 mt-4 lg:mt-0 lg:px-20">
            <div v-for="(data, index) in result.verses" :key="index" :class=" index%2==0 ? 'bg-gray-100' : 'bg-white'" class="border-b">
                <div class="p-5 text-sm font-medium text-gray-900 items-center leading-relaxed antialised">
                    <div class="flex justify-between">
                        <div>
                            <div class="flex justify-center items-center border-2 border-gray-500 w-8 h-8 rounded-full">
                                {{ (index+1) }}
                            </div>
                        </div>
                        <div class="text-2xl arabic text-right">{{ data.text.arab }}</div>
                    </div>
                    <div class="mt-5">
                        <div>{{ data.translation.id }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import axios from 'axios';
import { useStore } from "vuex";
    const store = useStore();
    const data = store.state.idSurah;
    const surah = reactive({});
    const result = await axios.get(`https://api.quran.sutanlab.id/surah/${data}`).then(e => e.data.data).catch(e => 'Error '+ e);

</script>

<style>

</style>