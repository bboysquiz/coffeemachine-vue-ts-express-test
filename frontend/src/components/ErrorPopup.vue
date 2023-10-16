<script setup lang="ts">
import { Ref, ref } from 'vue'
import { useCoffeeMachineStore } from '../stores/index';

const isCloseHovered: Ref<boolean> = ref(false);
const isButtonHovered: Ref<boolean> = ref(false);

const { toggleErrorPopup } = useCoffeeMachineStore()

const handleCloseMouseEnter = () => {
    isCloseHovered.value = true;
}
const handleCloseMouseLeave = () => {
    isCloseHovered.value = false;
}
const handleOkMouseEnter = () => {
    isButtonHovered.value = true;
}
const handleOkMouseLeave = () => {
    isButtonHovered.value = false;
}
</script>

<template>
        <div class="popup">
            <div class="popup__container">
                <img src="../assets/delete.svg" alt="delete" class="popup__close" :class="{ 'hovered': isCloseHovered }"
                    @mouseenter="handleCloseMouseEnter" @mouseleave="handleCloseMouseLeave" @click="toggleErrorPopup">
                <h2 class="popup__text">Необходимо выбрать все настройки конфигурации</h2>
                <button :class="{ 'hovered': isButtonHovered }" @mouseenter="handleOkMouseEnter"
                    @mouseleave="handleOkMouseLeave" class="popup__button" @click="toggleErrorPopup">
                    OK
                </button>
            </div>
        </div>
</template>

<style scoped>

.popup {
    position: fixed;
    width: 700px;
    height: 350px;
    top: 50%;
    left: 50%;
    margin-left: -350px;
    margin-top: -175px;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.8);
    background-color: #fff;
    z-index: 11;
    border-radius: 10px;
}

.popup__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    flex-wrap: wrap;
    padding-top: 7px;
}

.popup__close {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: .5s;
}

.popup__close.hovered {
    transition: .5s;
    transform: rotate(90deg);
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.8);
}

.popup__text {
    width: 100%;
    text-align: center;
}

.popup__button {
    width: 70px;
    height: 30px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 10px;
}

.popup__button.hovered {
    transition: .5s;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.8);
}
</style>