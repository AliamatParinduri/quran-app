<template>
  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
            <table class="w-full">
                <thead>
                <tr class="text-md font-semibold tracking-wide text-center text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th class="px-4 py-3">Sholat </th>
                    <th class="px-4 py-3">Waktu </th>
                </tr>
                </thead>
                <tbody class="bg-white font-medium">
                    <tr class="text-gray-700">
                        <td class="px-4 py-3 border text-md">imsak</td>
                        <td class="px-4 py-3 border text-md">{{ data.imsak }}</td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="px-4 py-3 border text-md">Subuh</td>
                        <td class="px-4 py-3 border text-md">{{ data.subuh }}</td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="px-4 py-3 border text-md">Dzuhur</td>
                        <td class="px-4 py-3 border text-md">{{ data.dzuhur }}</td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="px-4 py-3 border text-md">Ashar</td>
                        <td class="px-4 py-3 border text-md">{{ data.ashar }}</td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="px-4 py-3 border text-md">Maghrib</td>
                        <td class="px-4 py-3 border text-md">{{ data.maghrib }}</td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="px-4 py-3 border text-md">Isya</td>
                        <td class="px-4 py-3 border text-md">{{ data.isya }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    defineProps(['data'])
</script>

<style>

</style>