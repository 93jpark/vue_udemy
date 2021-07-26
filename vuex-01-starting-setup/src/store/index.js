import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import rootActions from './actions.js';

import counterModule from './counter/index.js';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters 
});

export default store;