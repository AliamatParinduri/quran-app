<template>
    <div class="py-5">
        <Suspense>
            <template #default>
                <ListSurah @findSurah="findSurah" />
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
    import router from "../router";
    import { useStore } from "vuex";

    const store = useStore();

    const findSurah = e => {
        store.commit('changeIdSurah', e);
        router.push({ name: 'DetailSurah', params: { id: e } })
    }

</script>

<style>

</style>