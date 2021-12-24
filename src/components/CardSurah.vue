<template>
    <div class="border-l-8 border-teal-400 text-lg p-4 h-36 shadow-md rounded-md ">
        <div class="flex font-semibold">
            <div class="w-1/6 -ml-2 mr-2">
                <div class="flex justify-center items-center border-2 border-gray-500 w-10 h-10 rounded-full">
                    {{ data.number }}
                </div>
            </div>
            <div class="w-3/6">{{ data.name.transliteration.id }}</div>
            <div class="w-2/6 arabic flex justify-evenly ">{{ data.name.short }}</div>
        </div>
        <div class="flex mb-3 -mt-2">
            <div class="w-1/6"></div>
            <div class="w-4/6">{{ data.name.translation.id }}</div>
        </div>
        <div class="flex">
            <div class="w-1/6"></div>
            <div class="w-5/6">{{ data.numberOfVerses }} ayat | {{ data.revelation.id }}</div>
        </div>
    </div>
</template>

<script setup>

    defineProps({
        data: {
            type: Object,
            default: {}
        }
    }) 

</script>

<style>

</style>