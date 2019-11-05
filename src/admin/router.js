import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import aboutme from './components/aboutme.vue';
import workVue from './components/adminworks.vue';
import commentVue from './components/comment.vue';

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
        path: '/comments',
        component: commentVue
    },    
];

export default new VueRouter({ routes });