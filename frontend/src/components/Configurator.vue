<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCoffeeMachineStore } from '../stores/index';

const { addConfigs } = useCoffeeMachineStore()

const configurations = ref([]);
const selectedOptions = ref({})

const addToStorage = () => {
    addConfigs({
        id: Date.now(),
        size: selectedOptions.value.size,
        drinksCount: selectedOptions.value.drinksCount,
        coffeeTypes: selectedOptions.value.coffeeTypes
        
    })
};

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/api/default-configurations');
        if (response.ok) {
            configurations.value = await response.json();
        } else {
            console.error('Failed to fetch configurations');
        }
    } catch (error) {
        console.error('Error fetching configurations:', error);
    }
});

</script>

<template>
    <div class="configurator__container">
        <h1 class="configurator__title">Конфигуратор кофемашины</h1>
        {{ configurations }}
        <h2 class="configurator__output">{{ selectedOptions.size }} {{  selectedOptions.drinksCount }} {{ selectedOptions.coffeeTypes }} напитков</h2>

        <div v-for="config in configurations" :key="config.id" class="configurator__config-container">
            <label class="configurator__config-title">{{ config.id }}:</label>
            <select class="configurator__config-select" v-model="selectedOptions[config.id]">
                <option class="configurator__config-option" v-for="option in config.options" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>

        <button class="configurator__button" @click="addToStorage">Добавить в хранилище</button>
    </div>
</template>

<style scoped></style>
