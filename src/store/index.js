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
        },
        updatedQuote: function ({ commit, getters }, form) {
            //form => {deductible:1233 }
            const payload = {
                "quote": {
                    "quoteId": getters.quote.quoteId,
                    "rating_address": getters.quote.rating_address,
                    "policy_holder": getters.quote.policy_holder,
                    "variable_selections": { ...getters.quote.variable_selections, ...form}
                }
            }
            axios.put(`https://fed-challenge-api.sure.now.sh/api/v1/quotes/${getters.quote.quoteId}`, payload)
                .then((response) => {
                    console.log('from api', response);
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
