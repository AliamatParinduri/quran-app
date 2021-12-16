<template>
    <div class="flex text-lg font-semibold rounded justify-evenly text-white items-center bg-gradient-to-tr from-red-500 to-rose-500 py-2 px-4 w-full">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div>
            {{ message }}
        </div>
    </div>
</template>

<script setup>
    defineProps({
        message: {
            type: String,
            default: '',
        }
    });
</script>

<style>

</style>