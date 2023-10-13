import { defineStore } from 'pinia';
import {reactive} from 'vue'
import { Data } from '../types';


const data: Data = reactive({
    configs: []
});

export const useCoffeeMachineStore = defineStore('coffeeMachine', () => {
    const getConfigs = async () => {

    }
    return { getConfigs, data }
});