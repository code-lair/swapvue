import Vue from 'vue';
import Vuex from 'vuex';
import Gallery from './components/Gallery';

Vue.use(Vuex);

const app = new Vue({
    el: '#app',

    data: {

    },

    components: {'gallery': Gallery}
});