<script setup lang="ts">
import { useCoffeeMachineStore } from '../stores/index';
import { CountAction } from '../types'

const { data, editCounter } = useCoffeeMachineStore()

const changeCount = (action: CountAction, id: number) => {
    editCounter(action, id)
}
</script>

<template>
    <div class="saved-configuration__container">
        <h1 class="saved-configuration__title">Сохраненные конфигурации</h1>
        <ul class="saved-configuration__list">
            <li v-for='item in data.savedConfigs' :key="item.id" class="saved-configuration__list-item">
                <div class="item-size">
                    <h2 class="item-title">Size:</h2>
                    <h2 class="item-value">{{item.size}}</h2>
                </div>
                <div class="item-count">
                    <h2 class="item-title">Count:</h2>
                    <h2 class="item-value">{{item.drinksCount}}</h2>
                    <div class="item-button-wrapper">
                        <button class="item-count-button" @click="changeCount('increment', item.id)">+</button>
                        <button class="item-count-button" @click="changeCount('decrement', item.id)">-</button>
                    </div>
                </div>
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
}
.item-count-button{
    width: 30px;
    height: 30px;
}
</style>
