import { defineStore } from 'pinia';
import {reactive} from 'vue'
import { Data, Config } from '../types';


const data: Data = reactive({
    configs: []
});

export const useCoffeeMachineStore = defineStore('coffeeMachine', () => {
    const addConfigs = (config: Config) => {
        data.configs.push(config)
    }
    return { addConfigs, data }
});