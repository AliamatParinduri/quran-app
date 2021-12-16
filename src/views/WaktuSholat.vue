<template>
    <Suspense>
        <template #default>
            <ListWaktuSholat />
        </template>
        <template #fallback>
            <LoadingPage />
        </template>
    </Suspense>
</template>

<script setup>
    import ListWaktuSholat from "./ListWaktuSholat.vue";
    import LoadingPage from "../components/LoadingPage.vue";
</script>

<style scoped>
</style>