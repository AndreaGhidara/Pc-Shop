<script>
import { store } from '../data/store';
import axios from 'axios';

import Navbar from './HeaderComponents/Navbar.vue';
import Jumbotron from './HeaderComponents/Jumbotron.vue'


export default {
    name: "AppHeader",
    components: {
        Navbar,
        Jumbotron,
    },
    data(){
        return {
            store
        }
    },
    methods:{

    },
    mounted(){
    }
}
</script>

<template>
    <div class="background">
        <Navbar />
        <Jumbotron />
    </div>
</template>

<style lang="scss" scoped>

@use '../variables.scss' as *;

.background{
    background-color: #0d88e6;
}
</style>