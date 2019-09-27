import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import * as http from 'http';

Vue.use(Vuex);

const state = {
    wines: null,
    wine: null,
};

const mutations = {
    displayWines: (state, wines) => {
        state.wines = wines;
    },
};

const actions = {
    fetchWines({ commit }, payload) {
        http.getJSON('https://wineup.azurewebsites.net/api/getTopWines?type=' + payload).then(
            result => {
                commit('displayWines', result);
            },
            error => {
                alert(error);
            }
        );
    },
};

const storeConf = {
    state,
    mutations,
    actions,
};

export default new Vuex.Store(storeConf);
