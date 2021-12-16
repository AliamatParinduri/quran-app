<template>
    <div class="flex flex-col-reverse lg:flex-row py-4 mt-5">
        <div class="flex flex-col justify-center leading-relaxed items-center px-2 w-full lg:w-5/12 mt-4 lg:mt-20">
            <div class="text-xl lg:text-3xl font-semibold text-center mb-5">
                Tenangkan hatimu dengan membaca Al-Qur'an
            </div>
            <div class="text-justify mb-3 text-sm lg:text-lg font-medium px-3 lg:px-0">
                “(yaitu) orang-orang yang beriman dan hati mereka manjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingati Allah-lah hati menjadi tenteram.” (QS. Ar-Ra’d: 28)
            </div>
            <router-link class="bg-gradient-to-tr from-indigo-500 to-blue-500 px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-md shadow-md rounded-md text-white" :to="{name: 'Surah' }">
                Baca Al-Qur'an
            </router-link>
        </div>
        <div class="flex flex-col w-full lg:w-7/12">
            <img src="../assets/img/hero.jpg" alt="" srcset="">
        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>