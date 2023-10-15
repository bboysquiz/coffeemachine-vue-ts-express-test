import { defineStore } from 'pinia';
import { reactive } from 'vue'
import { Data, Config, CountAction } from '../types';
import axios from 'axios';


const data: Data = reactive({
    savedConfigs: [],
    configs: []
});

export const useCoffeeMachineStore = defineStore('coffeeMachine', () => {
    const addConfigs = (config: Config) => {
        console.log(config)
        data.savedConfigs.push(config)
    }
    const editCounter = (action: CountAction, id: number) => {
        const config = data.savedConfigs.find(config => config.id === id)
        if (config) {
            action === 'increment' ? config.drinksCount += 1 : config.drinksCount -= 1;
        } else {
            console.error(`Config with id ${id} does not exist.`);
        }
    }
    const getConfigs = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/default-configurations');
            if (response) {
                data.configs = await response.data;
            } else {
                console.error('Failed to fetch configurations');
            }
        } catch (error) {
            console.error('Error fetching configurations:', error);
        }
    }
    return { addConfigs, data, editCounter, getConfigs }
}, {
    persist: true
});