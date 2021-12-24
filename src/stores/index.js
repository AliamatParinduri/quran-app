import axios from "axios";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
    plugins: [createPersistedState()],
    state(){
        return {
            idSurah: 0,
            surah: '',
            kota: [],
            jadwalSholat: [],
        }
    },
    mutations: {
        changeIdSurah(state, value) {
            state.idSurah = value
        },
        setSurah(state, payload) {
            state.surah = payload
        },
        setKota(state, payload) { 
            state.kota = payload;
        },
        setJadwalSholat(state, payload) { 
            state.jadwalSholat = payload;
        },
    },
    actions: {
        async getSurah({commit}) { 
            const response = await axios.get('https://api.quran.sutanlab.id/surah').then(e => e.data.data).catch(e => console.log("Error: " +e));
            commit('setSurah', response);
        },
        async getKota({commit}){
            const response = await axios.get('https://api.banghasan.com/sholat/format/json/kota').then(e => e.data.kota).catch(e => console.log("Error: " +e));
            commit('setKota', response);
        },
        async getJadwalSholat({commit}, res){
            let now = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
            const response = await axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${res.id}/tanggal/${now}`).then(e => e.data.jadwal.data).catch(e => 'Error '+e);
            commit('setJadwalSholat', response);
        },
    }
}) 