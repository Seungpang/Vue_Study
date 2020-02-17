import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import Jobsview from '../views/Jobsview.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {// path: url주소
            path: '/news',
            //component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: Jobsview,
        }

    ]
})