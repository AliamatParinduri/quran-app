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
    import { computed, reactive, ref } from 'vue';
    import { useStore } from "vuex";
    import axios from "axios";
    import Multiselect from '@vueform/multiselect'
    import Table from '../components/Table.vue'

        const store = useStore();
        const kota = ref(null);
        const data = reactive({
            nama_surah: [],
            jadwal_sholat: [],
        })
        
        store.dispatch('getKota');
        const result = store.state.kota;
        data.nama_surah = result.map(e => e.nama);
        
        const getWaktu = params => {
            const id = result.filter(async res => {
                if (res.nama == params) {
                    store.dispatch('getJadwalSholat', res);
                    data.jadwal_sholat = store.state.jadwalSholat;
                    kota.value = res.nama;
                }
            })
        }

</script>

<style src="@vueform/multiselect/themes/default.css"></style>