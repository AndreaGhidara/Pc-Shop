<script>
import {store} from '../../data/store'

export default {
    name: "CardCustom",
    components: {

    },
    data() {
        return {
            store,
            quantity:1,
        }
    },
    props: {
        product: Object,
    },
    methods: {
        sortBy: function(e) {
        this.quantity = Number(e.target.value);
    },
    },
    mounted() {
    }
}
</script>

<template>
    <div class="card">
        <div class="containerImg w-100 p-3">
            <img class="img-fluid" :src="product.imgPath" alt="" />
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
            <!-- Title Card -->
            <div class="cardTitle">
                <h3>{{ product.title }}</h3>
                <hr />
            </div>
            <!-- Description Card -->
            <div>
                {{ product.description }}
                <hr />
            </div>
            <!-- Button and Price Card -->
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
                    <div class="d-flex">
                        <select v-on:change="sortBy" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option disabled>Quantity</option>
                            <template v-for="n in 10" :key="n">
                                <option>{{ Number(n) }}</option>
                            </template>
                        </select>
                        <div @click="store.addToCart(product,quantity)" class="btn ms-3 btnShopNow">
                            <div data-tooltip="Price:-$20" class="button">
                                <div class="button-wrapper">
                                    <div class="text">Buy Now</div>
                                    <span class="icon">
                                        <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16"
                                            width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <strong class="text-white">
                        {{ (product.price).toFixed(2) }}€
                    </strong>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerImg {
    background-color: white !important;
    border-radius: 5px;
    border-bottom: 2px solid #000;
}

.card {
    background-color: rgba(255, 255, 255, 0.288) !important;
    height: 550px;
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

.btnShopNow {
    .button {
        --width: 100px;
        --height: 35px;
        --tooltip-height: 35px;
        --tooltip-width: 90px;
        --gap-between-tooltip-to-button: 18px;
        --button-color: #222;
        --tooltip-color: #fff;
        width: var(--width);
        height: var(--height);
        background: var(--button-color);
        position: relative;
        text-align: center;
        border-radius: 0.45em;
        font-family: "Arial";
        transition: background 0.3s;
    }

    .button::before {
        position: absolute;
        content: attr(data-tooltip);
        width: var(--tooltip-width);
        height: var(--tooltip-height);
        background-color: #555;
        font-size: 0.9rem;
        color: #fff;
        border-radius: .25em;
        line-height: var(--tooltip-height);
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
        left: calc(50% - var(--tooltip-width) / 2);
    }

    .button::after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: #555;
        left: calc(50% - 10px);
        bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
    }

    .button::after,
    .button::before {
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
    }

    .text {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-wrapper,
    .text,
    .icon {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        color: #fff;
    }

    .text {
        top: 0
    }

    .text,
    .icon {
        transition: top 0.5s;
    }

    .icon {
        color: #fff;
        top: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon svg {
        width: 24px;
        height: 24px;
    }

    .button:hover {
        background: #222;
    }

    .button:hover .text {
        top: -100%;
    }

    .button:hover .icon {
        top: 0;
    }

    .button:hover:before,
    .button:hover:after {
        opacity: 1;
        visibility: visible;
    }

    .button:hover:after {
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
    }

    .button:hover:before {
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
    }

}
</style>