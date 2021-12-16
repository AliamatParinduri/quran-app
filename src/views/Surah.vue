<template>
    <div class="py-5">
        <Suspense>
            <template #default>
                <ListSurah />
            </template>
            <template #fallback>
                <LoadingPage />
            </template>
        </Suspense>
    </div>
</template>

<script setup>
    import ListSurah from "../views/ListSurah.vue";
    import LoadingPage from "../components/LoadingPage.vue";
</script>

<style>

</style>