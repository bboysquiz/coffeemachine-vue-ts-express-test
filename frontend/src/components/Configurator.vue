<script setup lang="ts">
import { reactive, onMounted, Ref, ref } from 'vue';
import { useCoffeeMachineStore } from '../stores/index';
import { State } from '../types'
import Popup from './Popup.vue';
import ErrorPopup from './ErrorPopup.vue'

const { addConfigs, getConfigs, data, togglePopup, toggleErrorPopup } = useCoffeeMachineStore()

const state = reactive<State>({
    configurations: [],
    selectedOptions: { id: -1 }
});
const isCloseHovered: Ref<boolean> = ref(false);

const handleButtonMouseEnter = () => {
    isCloseHovered.value = true;
}
const handleButtonMouseLeave = () => {
    isCloseHovered.value = false;
}

const addToStorage = () => {
    if (state.selectedOptions.size && state.selectedOptions.drinksCount && state.selectedOptions.coffeeTypes) {
        addConfigs({
            id: Date.now(),
            size: state.selectedOptions.size,
            drinksCount: state.selectedOptions.drinksCount,
            coffeeTypes: state.selectedOptions.coffeeTypes
        })
        togglePopup()
    } else {
        toggleErrorPopup()
    }
};

onMounted(async () => {
    await getConfigs()
    state.configurations = data.configs
});

</script>

<template>
    <div class="configurator__container">
        <h1 class="configurator__title">Конфигуратор кофемашины</h1>
        <h2 class="configurator__output">{{ state.selectedOptions.drinksCount }} {{ state.selectedOptions.coffeeTypes }}
            напитков размера: {{ state.selectedOptions.size }}</h2>

        <div v-for="config in state.configurations" :key="config.id" class="configurator__config-container">
            <label class="configurator__config-title">{{ config.id }}:</label>
            <select class="configurator__config-select" v-model="state.selectedOptions[config.id]">
                <option class="configurator__config-option" v-for="option in config.options" :key="option" :value="option">
                    {{ option }}</option>
            </select>
        </div>

        <button :class="{ 'hovered': isCloseHovered }" @mouseenter="handleButtonMouseEnter"
            @mouseleave="handleButtonMouseLeave" class="configurator__button" @click="addToStorage">Добавить в
            хранилище</button>

        <Popup v-show="data.popupDisplay" />
        <ErrorPopup v-show="data.popupErrorDisplay" />
    </div>
</template>

<style scoped>
.configurator__container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
}

.configurator__title {
    width: 100%;
    text-align: center;
}

.configurator__output {
    width: 100%;
    text-align: center;
}

.configurator__config-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
}

.configurator__button {
    width: 200px;
    height: 30px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.2);
    margin-top: 30px;
}
.configurator__config-select {
    margin-left: 10px;
}

.configurator__button.hovered {
    transition: .5s;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.8);
}
</style>
