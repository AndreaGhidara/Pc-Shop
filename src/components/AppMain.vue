<script>
import Card from './MainComponents/Card.vue';
import CardCustom from './MainComponents/CardCustom.vue';

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "AppMain",
    components: {
        Card,
        CardCustom,
    },
    data(){
        return {
            store,
            apiUrl:"http://127.0.0.1:8000/api/",
            apiWord:"projects",
        }
    },
    methods:{

    },
    mounted(){
        store.callApi(this.apiUrl,this.apiWord)
        console.log(store.products);
    }
}
</script>

<template>
    <div class="backgroudCustom">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-5">
                <div class="col" v-for="product in store.products">
                        <CardCustom :product="product"/>
                </div>
            </div>
            <!-- <div class="CardProductContainer">
                
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;

.CardProductContainer{
    height: 20rem;
    background-image: url(https://wallpapercave.com/wp/wp6130674.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 85%;
}

.backgroudCustom{
    background-image: url(https://wallpaperaccess.com/full/7459.jpg);
}
</style>