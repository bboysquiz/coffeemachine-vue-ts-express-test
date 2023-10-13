<script setup lang="ts">
import { useCoffeeMachineStore } from '../stores/index';

const { data } = useCoffeeMachineStore()

</script>

<template>
    <div class="saved-configuration__container">
        <h1 class="saved-configuration__title">Сохраненные конфигурации</h1>
        <ul class="saved-configuration__list">
            <li v-for='item in data.configs' class="saved-configuration__list-item">
                <div class="item-size"><h2 class="item-title">Size:</h2><h2 class="item-value">{{item.size}}</h2></div>
                <div class="item-count"><h2 class="item-title">Count:</h2><h2 class="item-value">{{item.drinksCount}}</h2></div>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
