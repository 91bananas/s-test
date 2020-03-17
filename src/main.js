import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import router from './router';
import store from './store';
import numeral from 'numeral';

Vue.config.productionTip = false

Vue.filter('formatDollar', function (value) {
    if (value) {
        return numeral(value).format('$0,0');
    }
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
