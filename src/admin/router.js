import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import aboutme from './components/aboutme.vue';
import workVue from './components/adminworks.vue';
import reviewsVue from './components/reviews.vue';

const routes = [    
    {
        path: '/aboutme',
        component: aboutme
    },

    {
        path: '/myworks',
        component: workVue
    },

    {
        path: '/reviews',
        component: reviewsVue
    },    
];

export default new VueRouter({ routes });