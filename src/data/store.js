import { reactive } from 'vue'

import axios from 'axios';


export const store = reactive({

    apiUrl: "http://127.0.0.1:8000/api/",
    apiWord: "products",
    //recupero Dati
    products: [],
    lastPage: 0,
    currentPage: 1,
    loading: false,
    admin: [],

    //Paginazione
    callFirstPageApi(routeApi, elementApi) {

        this.loading = true;
        axios.get(routeApi + elementApi).then(response => {
            console.log(response.data);
            this.products = response.data.results.data;
            console.log(this.products);
            this.currentPage = response.data.results.current_page;
            this.lastPage = response.data.results.last_page;
            this.loading = false;
        }).catch(err => {
            console.error(error);
            this.loading = false;
        });

    },

    getproductsPage(pageNumber) {
        console.log(pageNumber && pageNumber > 0 && pageNumber <= this.lastPage);

        if (pageNumber && pageNumber > 0 && pageNumber <= this.lastPage) {

            let config = {
                params: {
                    page: pageNumber
                }
            };

            this.loading = true;
            axios.get(this.apiUrl + this.apiWord, config).then(response => {
                console.log(response.data);
                this.products = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
            });

        } else {
            console.error("Non ci sono più pagine");
        }

    },

    //Shopping

    cart: [],
    totalPrice: 0,
    productVerified: false,

    ObjInCart: {
        title: "",
        description: "",
        price: 0,
        quantity: 0,
    },

    addToCart(product, n) {
        product.quantity = Number(n)
        console.log(this.products);
        this.checkCart(product, n)
        if (!this.productVerified) {
            this.cart.push(product);
        }
        this.calcPrice();
    },

    checkCart(product, quantity) {

        this.productVerified = false;

        this.ObjInCart = {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: quantity,
        };
        console.log(this.ObjInCart.quantity);

        //ciclo il carrello(ARRAY),passo "el" che è l' oggetto singolo.
        this.cart.forEach((el) => {
            //controllo che il prodotto che sto aggiungendo non sia gia presente nel carrello, tramite ID.
            if (el.id == this.ObjInCart.id) {
                //aggiorno la quantita e il prezzo
                el.quantity += this.ObjInCart.quantity;
                el.price = el.price + (this.ObjInCart.price * quantity);

                console.log(this.ObjInCart.quantity);

                this.productVerified = true;
            } //else {
            //     product.quantity = Number(n)
            // }
        });
    },

    somma(num1, num2) {
        return num1 + num2;
    },

    calcPrice() {
        //Inizializzo un totale che parte da 0
        let total = 0;
        //Ciclo tutti gli elementi nel carrello e prendo i prezzi somandoli al totale
        for (let i = 0; i < this.cart.length; i++) {
            let singlePrice = this.cart[i].price * this.cart[i].quantity;
            total = this.somma(total, singlePrice);
        }

        this.totalPrice = Number(total).toFixed(2);
    },
});