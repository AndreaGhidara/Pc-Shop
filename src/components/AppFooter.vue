<script>

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "AppFooter",
    components: {

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
    <div class="container bg-white">
        <h1>Footer</h1>
    </div>
</template>

<style lang="scss" scoped>

@use '../variables.scss' as *



</style>