<script>
import * as bootstrap from "bootstrap";
import { store } from "../../data/store";

export default {
    name: "Navbar",
    components: {

    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>

<template>
    <nav class="container">
        <div class="d-flex justify-content-between align-items-center py-3">
            <!-- Link di navigazione -->
            <div class="d-flex align-items-center py-3">
                <p class="m-0 pe-3">home</p>
                <p class="m-0 pe-3">home</p>
                <p class="m-0">home</p>
            </div>
            <!-- Logo -->
            <div class="div logo">
                <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-m-design_460848-10168.jpg?w=826&t=st=1687818132~exp=1687818732~hmac=a4af8af0ac0066162aa7ade0b6948053ad7d533b59a965b8d956ce4e0b451045"
                    alt="">
            </div>
            <!-- Menu -->
            <div class="div">
                <div class="iconContiner btn">
                    <i class="fa-solid fa-computer fa-lg"></i>
                </div>
                <div class="iconContiner btn">
                    <i class="fa-solid fa-bookmark fa-lg"></i>
                </div>
                <!-- OFFCANVAS ShopCarrel START -->
                <button class="btn fs-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    <i class="fa-solid fa-cart-shopping fa-lg"></i>
                </button>
            </div>
            <!-- ZONE SHOP -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <!-- Title -->
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">BASKET</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <!-- main -->
                    <div>
                        <h6>Your order</h6>
                        <!-- Products in Cart -->
                        <div class="order d-flex flex-column">
                            <div v-for="product in store.cart">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12 d-flex align-items-center">
                                            <div class="imgContainer w-25 px-2">
                                                <img class="img-fluid" :src="product.imgPath" alt="" />
                                            </div>
                                            <div class="w-75">
                                                <div class="titleContainer">
                                                    <p class="m-0 text-start">{{ product.title }}</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="p-2 w-100 text-start">
                                                        <i class="fa-solid fa-boxes-stacked"></i>
                                                        {{ product.quantity }}
                                                    </div>
                                                    <div class="p-2 d-flex align-items-center flex-shrink-1">
                                                        <p class="m-0">{{ Number(product.price * product.quantity) }}€</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- Total Price in Cart -->
                        <div class="d-flex align-items-center justify-content-between p-2">
                            <p class="m-0">Total Price:</p>
                            {{ store.totalPrice }} €
                        </div>
                    </div>
                    <div class="dropdown mt-3">
                        <button class="Btn">
                            Pay
                            <svg class="svgIcon" viewBox="0 0 576 512">
                                <path
                                    d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
a {
    color: #fffcfc;
}

ul {
    list-style: none;
}

li {
    padding: 0 0.5rem;
    text-transform: uppercase;
}

.logo {

    img {
        width: 50px;
        border-radius: 50%;
    }
}

.bgNavbar {
    background-color: red;
    height: 5rem;
}

.user {
    width: 60px;

    img {
        border-radius: 50%;
    }
}

.offcanvas {
    .imgContainer {
        width: 80px;

    }

    .Btn {
        width: 130px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(15, 15, 15);
        border: none;
        color: white;
        font-weight: 600;
        gap: 8px;
        cursor: pointer;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
        position: relative;
        overflow: hidden;
        transition-duration: 0.3s;
    }

    .svgIcon {
        width: 16px;
    }

    .svgIcon path {
        fill: white;
    }

    .Btn::before {
        width: 130px;
        height: 130px;
        position: absolute;
        content: "";
        background-color: white;
        border-radius: 50%;
        left: -100%;
        top: 0;
        transition-duration: 0.3s;
        mix-blend-mode: difference;
    }

    .Btn:hover::before {
        transition-duration: 0.3s;
        transform: translate(100%, -50%);
        border-radius: 0;
    }

    .Btn:active {
        transform: translate(5px, 5px);
        transition-duration: 0.3s;
    }
}

.order {
    .card {
        width: 190px;
        height: 254px;
        padding: .8em;
        background: #f5f5f5;
        position: relative;
        overflow: visible;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .card-img {
        // background-color: #ffcaa6;
        width: 100%;
        height: 40%;
        border-radius: .5rem;
        transition: .3s ease;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-info {
        padding-top: 10%;
    }

    svg {
        width: 20px;
        height: 20px;
    }

    .card-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        border-top: 1px solid #ddd;
    }

    /*Text*/
    .text-title {
        font-weight: 900;
        font-size: 1.2em;
        line-height: 1.5;
    }

    .text-body {
        font-size: .9em;
        padding-bottom: 10px;
    }

    /*Button*/
    .card-button {
        border: 1px solid #252525;
        display: flex;
        padding: .3em;
        cursor: pointer;
        border-radius: 50px;
        transition: .3s ease-in-out;
    }

    /*Hover*/
    .card-img:hover {
        transform: translateY(-25%);
        box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
    }

    .card-button:hover {
        border: 1px solid #ffcaa6;
        background-color: #ffcaa6;
    }

}
</style>