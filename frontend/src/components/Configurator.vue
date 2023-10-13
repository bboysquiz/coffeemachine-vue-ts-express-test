<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useCoffeeMachineStore } from '../stores/index';

const { addConfigs } = useCoffeeMachineStore()

const size: Ref<string> = ref('стандартный');
const drinksCount: Ref<string> = ref('6');

const addToStorage = () => {
    addConfigs({
        size: size.value, 
        drinksCount: drinksCount.value
    })
};
</script>

<template>
    <div class="configurator__container">
        <h1 class="configurator__title">Конфигуратор кофемашины</h1>
        <h2 class="configurator__output">{{ size }} - {{ drinksCount }} напитков</h2>

        <div class="configurator__size-container">
            <label class="configurator__size-title">Размер:</label>
            <select class="configurator__size-select" v-model="size">
                <option class="configurator__size-option" value="стандартный">Стандартный</option>
                <option class="configurator__size-option" value="увеличенный">Увеличенный</option>
            </select>
        </div>

        <div class="configurator__counter-container">
            <label class="configurator__counter-title">Количество напитков:</label>
            <select class="configurator__counter-select" v-model="drinksCount">
                <option class="configurator__counter-option" value="6">6</option>
                <option class="configurator__counter-option" value="8">8</option>
                <option class="configurator__counter-option" value="12">12</option>
            </select>
        </div>

        <button class="configurator__button" @click="addToStorage">Добавить в хранилище</button>
    </div>
</template>

<style scoped></style>
