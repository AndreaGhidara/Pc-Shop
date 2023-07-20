<script>

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "AppAbout",
    components: {
    },
    data() {
        return {
            store,
            apiUrl: "http://127.0.0.1:8000/api/",
            apiWord: "projects",
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <section>
        <div class="container py-5">
            <div class="row">
                <template v-for="n in 10">
                    <div class="col">
                        <!-- Card -->
                        <div class="card">
                            <div class="containerImg w-100 p-3">
                                <img class="img-fluid"
                                    src="https://cdn.nexths.it/scheda_prodotto/image/med/4719331309312.jpg" alt="" />
                            </div>
                            <div class="card-body">
                                <h3>titolo</h3>
                                <hr />
                                <div>
                                    Karta graficzna GeForce RTX 3060 Gaming OC 8GB GDDR6 128bit
                                    2DP/2HDMI
                                </div>
                                <hr>
                                <div>
                                    <div>
                                        <button class="button" type="button">
                                            <span class="button__text">See Product</span>
                                            <span class="button__icon">
                                                <i class="fa-solid fa-arrow-up"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div class="d-flex justify-content-between pt-3">
                                        <div>
                                            <SelectCustom />
                                        </div>
                                        <strong>
                                            1000.00€
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.containerImg {
    background-color: white !important;
    border-radius: 5px;
    border-bottom: 2px solid #323232;
}

.card {
    background-color: rgba(255, 255, 255, 0.288) !important;
}

.button {
    --main-focus: #2d8cf0;
    --font-color: #323232;
    --bg-color-sub: #dedede;
    --bg-color: #eee;
    --main-color: #323232;
    position: relative;
    width: 200px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    background-color: var(--bg-color);
    border-radius: 10px;
    overflow: hidden;
}

.button,
.button__icon,
.button__text {
    transition: all 0.3s;
}

.button .button__text {
    transform: translateX(22px);
    color: var(--font-color);
    font-weight: 600;
}

.button .button__icon {
    position: absolute;
    transform: translateX(155px);
    height: 100%;
    width: 39px;
    background-color: var(--bg-color-sub);
    display: flex;
    align-items: center;
    justify-content: center;
}

.button .svg {
    width: 20px;
    fill: var(--main-color);
}

.button:hover {
    background: var(--bg-color);
}

.button:hover .button__text {
    color: transparent;
}

.button:hover .button__icon {
    width: 100%;
    transform: translateX(0);
}

.button:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px var(--main-color);
}
</style>