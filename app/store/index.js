import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import cheesedata from '~/assets/cheesetypes.json';
import * as http from 'http';

Vue.use(Vuex);

const state = {
    wines: null,
    wine: null,
    cheese: null,
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
        http.getJSON('https://wineup.azurewebsites.net/api/getTopWines?type=' + payload).then(
            result => {
                commit('displayWines', result);
            },
            error => {
                alert(error);
            }
        );
    },
    fetchDailyWine({ commit }) {
        http.getJSON('https://wineup.azurewebsites.net/api/getDailyWine').then(
            result => {
                commit('displayDailyWine', result.data);
            },
            error => {
                alert(error);
            }
        );
    },
    fetchCheese({ commit }, payload) {
        //display type from .json
        for (var i = 0; i < cheesedata.length; i++) {
            if (cheesedata[i].type == payload) {
                var cheese = cheesedata[i];
                console.log(cheese);
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
