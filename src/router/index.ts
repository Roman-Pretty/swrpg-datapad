import {createRouter, createWebHistory} from 'vue-router'

import MainPage from '../pages/MainPage.vue';
import Maneuvers from "../pages/Maneuvers.vue";
import Actions from "../pages/Actions.vue";
import ItemQualitiesActive from "../pages/ItemQualitiesActive.vue";
import ItemQualitiesPassive from "../pages/ItemQualitiesPassive.vue";
import Environment from "../pages/Environment.vue";
import Recovery from "../pages/Recovery.vue";

let base = (import.meta.env.MODE == 'development') ? import.meta.env.BASE_URL : ''

const router = createRouter({
    history: createWebHistory(base),
    routes: [
        {path: '/', name: 'Main Page', component: MainPage},
        {path: '/maneuvers', name: 'Maneuvers', component: Maneuvers},
        {path: '/actions', name: 'Actions', component: Actions},
        {path: '/item-qualities-active', name: 'Item Qualities Active', component: ItemQualitiesActive},
        {path: '/item-qualities-passive', name: 'Item Qualities Passive', component: ItemQualitiesPassive},
        {path: '/environment', name: 'Environment', component: Environment},
        {path: '/recovery', name: 'Recovery', component: Recovery},
        {path: '/:pathMatch(.*)*', redirect: '/'}
    ]
})

export default router
