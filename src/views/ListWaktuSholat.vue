<template>
    <div class="mt-4"><label>Cari Nama Kota:</label></div>
    <div class="mt-2">
        <Multiselect @change="getWaktu($event)"
            placeholder="Click Untuk Mencari Kota Tujuan"
            :filterResults="true"
            :minChars="1"
            :resolveOnLoad="true"
            :delay="0"
            :searchable="true"
            :options="data.nama_surah"
        />
    </div>
    <div v-if="kota">
        <section class="container mx-auto p-3 font-mono">
            <center class="text-xl">
                    <div class="mb-2">Jadwal Sholat Daerah</div>
                    <div class="mb-1 font-semibold">{{ kota }}</div>
                    <div class="mb-1 font-semibold">{{ data.jadwal_sholat.tanggal }}</div>
                </center>

                <Table :data="data.jadwal_sholat" />
        </section>
    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import axios from "axios";
    import Multiselect from '@vueform/multiselect'
    import Table from '../components/Table.vue'

        const kota = ref(null);
        const data = reactive({
            nama_surah: [],
            jadwal_sholat: [],
        })
        
        const result = await axios.get('https://api.banghasan.com/sholat/format/json/kota').then(e => e.data.kota).catch(e => console.log("Error: " +e))
        data.nama_surah = result.map(e => e.nama);
        
        const getWaktu = params => {
            let now = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

            const id = result.filter(async res => {
                if (res.nama == params) {
                    data.jadwal_sholat = await axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${res.id}/tanggal/${now}`).then(e => e.data.jadwal.data).catch(e => 'Error '+e);
                    kota.value = res.nama;
                }
            })
        }

</script>

<style src="@vueform/multiselect/themes/default.css"></style>