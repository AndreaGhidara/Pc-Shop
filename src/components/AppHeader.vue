<script>

import { store } from '../data/store';
import axios from 'axios';

export default {
    name: "AppHeader",
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
        <h1>Header</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;

</style>