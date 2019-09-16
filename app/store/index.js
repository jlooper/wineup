import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import cheese from '~/assets/cheesetypes.json';
import * as http from 'http';

Vue.use(Vuex);

const state = {
    wines: [],
    wine: [],
    cheese: [],
};

const mutations = {
    displayWines: (state, wines) => {
        state.wines = wines;
    },
    displayDailyWine: (state, wine) => {
        state.wine = wine;
    },
    displayCheese: (state, cheese) => {
        state.cheese = cheese;
    },
};

const actions = {
    fetchWines({ commit }, payload) {
        http.getJSON('https://wineup.azurewebsites.net/api/getTopWines').then(
            result => {
                this.result = result.data;
                console.log(this.result);
            },
            error => {
                console.log(error);
            }
        );
        commit('displayWines', this.result);
    },
    fetchDailyWine({ commit }, payload) {
        //commit('displayDailyWine', payload);
    },
    fetchCheese({ commit }, payload) {
        //display type from .json
        for (var i = 0; i < cheese.length; i++) {
            if (cheese[i].type == payload) {
                console.log(cheese);
                let cheese = JSON.stringify(cheese[i]);
                commit('displayCheese', cheese);
                break;
            }
        }
    },
};

const storeConf = {
    state,
    mutations,
    actions,
};

export default new Vuex.Store(storeConf);
