<script setup lang="ts">
</script>

<template>
    <div class="main">
        <header class="header">
            <nav class="header-nav">
                <ul class="header-list">
                    <li class="header__list-item">
                        <router-link class="saved-configuration-link" :to="{ name: 'configurator' }"></router-link>
                    </li>
                    <li class="header__list-item">
                        <router-link class="saved-configuration-link" :to="{ name: 'savedconfigs' }"></router-link>
                    </li>
                </ul>
            </nav>
        </header>

        <router-view></router-view>
    </div>
</template>

<style scoped></style>
