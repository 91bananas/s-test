import Vue from 'vue';
import VueRouter from 'vue-router';

import RatingInformation from '../components/RatingInformation.vue';
import QuoteView from '../components/QuoteView.vue';
// import store from '../store';

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: RatingInformation,
            name: 'RatingInformation',
        },
        {
            path: '/quote',
            component: QuoteView,
            name: 'QuoteView',
            // beforeEnter: (to, from, next) => {
            //     console.log(store.getters.quote);
            //     if (!store.getters.quote) {
            //         next('/');
            //     }
            // }
        }
    ]
});

export default router;