import { defineStore } from 'pinia';
import {reactive} from 'vue'
import { Data, Config, CountAction } from '../types';


const data: Data = reactive({
    configs: []
});

export const useCoffeeMachineStore = defineStore('coffeeMachine', () => {
    const addConfigs = (config: Config) => {
        data.configs.push(config)
    }
    const editCounter = (action: CountAction, id: number) => {
        const config = data.configs.find(config => config.id === id)
        if (config) {
            action === 'increment' ? config.drinksCount += 1 : config.drinksCount -= 1;
        } else {
            console.error(`Config with id ${id} does not exist.`);
        }
    }
    return { addConfigs, data, editCounter }
});