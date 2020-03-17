import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        quote: {}
    },
    mutations: {
        SET_QUOTE(state, quote) {
            state.quote = quote;
        }
    },
    actions: {
        newForm: function ({ commit }, form) {
            axios.post('https://fed-challenge-api.sure.now.sh/api/v1/quotes', form)
                .then((response) => {
                    console.log(response);
                    commit('SET_QUOTE', response.data.quote);
                }, (error) => {
                    console.log(error);
                });
        }
    },
    getters: {
        quote: function (state) {
            return state.quote;
        }
    }
});
