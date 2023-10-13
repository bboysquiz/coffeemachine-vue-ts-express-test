<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useCoffeeMachineStore } from '../stores/index';
import { State } from '../types'

const { addConfigs, getConfigs, data } = useCoffeeMachineStore()

const state = reactive<State>({
    configurations: [],
    selectedOptions: {id: -1}
});

const addToStorage = () => {
    addConfigs({
        id: Date.now(),
        size: state.selectedOptions.size,
        drinksCount: state.selectedOptions.drinksCount,
        coffeeTypes: state.selectedOptions.coffeeTypes
        
    })
};

onMounted(async () => {
    await getConfigs()
    state.configurations = data.configs
});

</script>

<template>
    <div class="configurator__container">
        <h1 class="configurator__title">Конфигуратор кофемашины</h1>
        {{ state.configurations }}
        <h2 class="configurator__output">{{ state.selectedOptions.size }} {{  state.selectedOptions.drinksCount }} {{ state.selectedOptions.coffeeTypes }} напитков</h2>

        <div v-for="config in state.configurations" :key="config.id" class="configurator__config-container">
            <label class="configurator__config-title">{{ config.id }}:</label>
            <select class="configurator__config-select" v-model="state.selectedOptions[config.id]">
                <option class="configurator__config-option" v-for="option in config.options" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>

        <button class="configurator__button" @click="addToStorage">Добавить в хранилище</button>
    </div>
</template>

<style scoped></style>
