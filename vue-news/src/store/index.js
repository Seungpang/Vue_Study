import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        aks: []
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
        FETCH_JOBS(context) {
            fetchJobsList()
            .then(response => {
                console.log(response);
                context.commit('SET_JOBS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_ASK(context) {
            fetchAskList()
            .then(response => {
                console.log(response);
                context.commit('SET_ASK', response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
});