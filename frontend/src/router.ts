import { createRouter, createWebHistory } from 'vue-router'
import Configurator from './components/Configurator.vue'
import SavedConfigs from './components/SavedConfigs.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Configurator, name: 'configurator'},
        { path: '/savedconfigs', component: SavedConfigs, name: 'savedconfigs' },
    ]
})