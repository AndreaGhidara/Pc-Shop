<script>

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "AppMain",
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
    <div class="container bg-black">
        <h1 class="text-white">Main</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;

</style>