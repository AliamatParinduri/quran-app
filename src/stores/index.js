import { createStore } from "vuex";

export default createStore({
    state(){
        return {
            idSurah: 0,
        }
    },
    mutations: {
        changeIdSurah(state, value) {
            state.idSurah = value
        }
    }
}) 