<script setup lang="ts">
import { useCoffeeMachineStore } from '../stores/index';
import { CountAction } from '../types'
import { Ref, ref } from 'vue'

const { data, editCounter, deleteItem } = useCoffeeMachineStore()

const changeCount = (action: CountAction, id: number) => {
    editCounter(action, id)
}

const isDelHovered: Ref<boolean> = ref(false);

const handleButtonMouseEnter = () => {
    isDelHovered.value = true;
}
const handleButtonMouseLeave = () => {
    isDelHovered.value = false;
}

</script>

<template>
    <div class="saved-configuration__container">
        <h1 class="saved-configuration__title">Сохраненные конфигурации</h1>
        <ul class="saved-configuration__list">
            <li v-for="(item, index) in data.savedConfigs" :key="index" class="saved-configuration__list-item">
                <div v-for="(value, key) in item" :key="key"  class="item-option">
                    <h2 class="item-title">{{ key }}:</h2>
                    <h2 class="item-value">{{ value }}</h2>
                    <div v-if="key === 'drinksCount'" class="item-button-wrapper">
                        <button class="item-count-button" @click="changeCount('increment', item.id)">+</button>
                        <button class="item-count-button" @click="changeCount('decrement', item.id)">-</button>
                    </div>
                </div>
                <button :class="{ 'hovered': isDelHovered }" @mouseenter="handleButtonMouseEnter"
                @mouseleave="handleButtonMouseLeave" @click='deleteItem(item.id)' class="item-delete">delete</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.saved-configuration__container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 1080px;
    flex-wrap: wrap;
}
.saved-configuration__title{
    width: 100%;
    text-align: center;
}
.saved-configuration__list {
    display: flex;
    justify-content: flex-start;
    width: 1000px;
    flex-wrap: wrap;
    list-style-type: none;
}
.saved-configuration__list-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.2);
    padding: 15px;
    width: 100%;
    margin-top: 15px;
    border-radius: 10px;
}
.item-size{
    display: flex;
    justify-content: space-between;
    width: 300px;
    align-items: center;
}
.item-count {
    display: flex;
    justify-content: space-between;
    width: 300px;
    align-items: center;
}
.item-button-wrapper {
    display: flex;
    justify-content: space-between;
    width: 70px;
    align-items: center;
    margin-left: 30px;
}
.item-count-button{
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.2);
    margin-top: 30px;
    text-transform: uppercase;
    font-weight: bold;
    transition: .5s;
}
.item-count-button:hover{
    transition: .5s;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.8)
}
.item-option{
    width: 100%;
    display: flex;
}
.item-value {
    margin-left: 20px;
}
.item-delete {
    width: 200px;
    height: 30px;
    background-color: #dd0a0a;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.2);
    margin-top: 30px;
    text-transform: uppercase;
    font-weight: bold;
    transition: .5s;
}
.item-delete.hovered {
    transition: .5s;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.8);
}
</style>
