<script>
import CardCustom from '../components/MainComponents/CardCustom.vue';

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "AppHome",
    components: {
        CardCustom,
    },
    data() {
        return {
            store,
            apiUrl: "http://127.0.0.1:8000/api/",
            apiWord: "products",
        }
    },
    methods: {

        getProducsPrevPage() {
            store.getproductsPage(store.currentPage - 1);
        },

        getProducsNextPage() {

            store.getproductsPage(store.currentPage + 1);
        },
        isThisPage(n) {
            if (n == store.currentPage) {
                return true
            }
        }

    },
    mounted() {
        store.callFirstPageApi(this.apiUrl,this.apiWord);
    }
}
</script>

<template>
    <div class="backgroudCustom">
        <div class="container">
            <div class="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-5">
                <div class="col" v-for="product in store.products">
                    <CardCustom :product="product" />
                </div>
            </div>
        </div>
        <nav class="py-3" aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item btn p-0">
                    <a class="page-link" @click="getProducsPrevPage" >Previous</a>
                </li>
                <div v-for="n in store.lastPage">
                    <li class="page-item btn p-0">
                        <a class="page-link" :class="{ 'bg-warning': isThisPage(n), }" href="#">
                            {{n}}
                        </a>
                    </li>
                </div>
                <!-- <li class="page-item btn p-0"><a class="page-link" href="#">2</a></li>
                <li class="page-item btn p-0"><a class="page-link" href="#">3</a></li> -->

                <li class="page-item btn p-0">
                    <a class="page-link" @click="getProducsNextPage" >Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;


.backgroudCustom {
    background-image: url(https://wallpaperaccess.com/full/7459.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>