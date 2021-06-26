import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', component: TeamsList }
        { path: '/', redirect: '/teams' },
        // { path: '/teams',component: TeamsList, alias: '/' }
        { name:'teams', path: '/teams',component: TeamsList, children: [
                { name:'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
            ] 
        },
        { path: '/users',component: UsersList },// our-domain.com/teams => TeamsList
        // { path: '/teams/:teamId', component: TeamMembers, props: true }, // :teamId is route parameter
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

const app = createApp(App)

app.use(router); // use() method for using third-party package

app.mount('#app');
