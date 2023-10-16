<script setup lang="ts">
</script>

<template>
    <div class="main">
        <header class="header">
            <nav class="header-nav">
                <ul class="header-list">
                    <router-link :to="{ name: 'configurator' }" class="saved-configuration-link">
                        <li class="header__list-item">Configurator</li>
                    </router-link>
                    <router-link :to="{ name: 'savedconfigs' }" class="saved-configuration-link">
                        <li class="header__list-item">Configs</li>
                    </router-link>
                </ul>
            </nav>
        </header>
        
        <router-view></router-view>
    </div>
</template>

<style scoped>
.header-list {
    display: flex;
    width: 500px;
    justify-content: space-between;
    list-style-type: none;
}
.header__list-item {
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.2);
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;
}
.header__list-item:hover{
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.8);
    transition: .5s;
}
.saved-configuration-link {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    
}
.header__list-item:hover .saved-configuration-link{
    transition: .5s;
    text-shadow: 1px 1px 1px #000;
}
</style>
