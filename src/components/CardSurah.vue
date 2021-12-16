<template>
    <div class="border-2 p-4 h-36 shadow-md">
        <div class="flex font-semibold mb-1">
            <div class="w-1/6">{{ data.number }}</div>
            <div class="w-3/6">{{ data.name.transliteration.id }}</div>
            <div class="w-2/6 arabic">{{ data.name.short }}</div>
        </div>
        <div class="flex mb-3">
            <div class="w-1/6"></div>
            <div class="w-4/6">{{ data.name.translation.id }}</div>
        </div>
        <div class="flex">
            <div class="w-1/6"></div>
            <div class="w-4/6">{{ data.numberOfVerses }} ayat | {{ data.revelation.id }}</div>
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