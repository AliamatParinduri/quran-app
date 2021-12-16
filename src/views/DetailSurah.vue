<template>
    <Suspense>
        <template #default>
            <ListDetailSurah />
        </template>
        <template #fallback>
            <LoadingPage />
        </template>
    </Suspense>
</template>

<script setup>
import LoadingPage from "../components/LoadingPage.vue";
import ListDetailSurah from "./ListDetailSurah.vue";

</script>

<style>

</style>