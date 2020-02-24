import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        aks: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }           
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(response => {
                console.log(response);
                context.commit('SET_NEWS', response.data);
                // state.news = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        FETCH_ASK({ commit }) {
            fetchAskList()
            .then(({ data }) => {
                console.log(response);
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
});