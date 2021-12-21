<template>
    <div class="bg-gray-100 py-0 lg:py-3 mt-2 px-0 lg:px-4 lg:mt-4 shadow-md rounded-md">
		<div class="flex flex-col lg:flex-row justify-between">
			<div class="flex items-center justify-between lg:w-auto py-3 lg:py-0 border-b lg:border-0 border-blue-100 px-2 lg:px-1">
				<div class="title-item text-xl">Digital Al-Qur'an</div>
				<div>
                    <button class="outline-none title-item block lg:hidden tmblnav">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
			</div>
			<div class="hidden lg:flex flex-col lg:flex-row py-2 lg:py-0 cha_dis">
				<div class="flex flex-col lg:flex-row">
					<router-link class="mr-0 lg:mr-3 text-gray-600 font-medium hover:font-bold hover:text-black px-2 lg:px-1 py-2 lg:py-1 " :to="{name: 'Home' }" >Beranda</router-link>
					<router-link class="mr-0 lg:mr-3 text-gray-600 font-medium hover:font-bold hover:text-black px-2 lg:px-1 py-2 lg:py-1 " :to="{name: 'Surah' }" >Al-Qur'an</router-link>
					<router-link class="text-gray-600 font-medium hover:font-bold hover:text-black px-2 lg:px-1 py-2 lg:py-1 " :to="{name: 'WaktuSholat' }" >Waktu Sholat</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
    import { onMounted } from "vue"

    onMounted(() => {
        const tmblnav =  document.querySelector('.tmblnav');
    
        tmblnav.addEventListener("click", function () {
            const cha_dis =  document.querySelector('.cha_dis');
            console.log(cha_dis.classList.toggle("hidden"));
            if (cha_dis.classList.toggle("hidden")) {
                cha_dis.classList.remove("hidden");
                cha_dis.classList.add("block");
            }else{
                cha_dis.classList.remove("block");
                cha_dis.classList.add("hidden");

            }
        })
    })
</script>

<style>

</style>