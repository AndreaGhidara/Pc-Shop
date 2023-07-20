import { reactive } from "vue";

import axios from "axios";
import { end } from "@popperjs/core";

export const store = reactive({
    //Data CALL API
    apiUrl: "http://127.0.0.1:8000/api/",
    apiWord: "products",

    //recupero Dati
    products: [],
    lastPage: 0,
    currentPage: 1,
    loading: false,

    //Paginazione
    callFirstPageApi(routeApi, elementApi) {
        this.loading = true;
        axios
            .get(routeApi + elementApi)
            .then((response) => {
                //console.log(response.data);
                this.products = response.data.results.data;
                //console.log(this.products);
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.loading = false;
            })
            .catch((err) => {
                console.error(error);
                this.loading = false;
            });
    },

    getproductsPage(pageNumber) {
        console.log(pageNumber && pageNumber > 0 && pageNumber <= this.lastPage);

        if (pageNumber && pageNumber > 0 && pageNumber <= this.lastPage) {
            let config = {
                params: {
                    page: pageNumber,
                },
            };

            this.loading = true;
            axios
                .get(this.apiUrl + this.apiWord, config)
                .then((response) => {
                    console.log(response.data);
                    this.products = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                })
                .catch((err) => {
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
    test: "",

    addToCart(product, quantity) {
        let singleProduct = []
        let productVerified = false;
        console.log(singleProduct);
    //Creo una coppia del oggetto (MAI LASCIARE | singleProduct=product | i due oggetti saranno collegati e le modifche su uno dei due comportera le modifiche anche nel altro)
        singleProduct = Object.assign({},product);

        singleProduct.quantity = quantity;


        this.cart.forEach((el) => {
            //controllo che il prodotto che sto aggiungendo non sia gia presente nel carrello, tramite ID.
            if (el.id == singleProduct.id) {
                //aggiorno la quantita e il prezzo
                el.quantity += singleProduct.quantity;
                productVerified = true;
            }
        });

        if (!productVerified) {
            console.log("push " + singleProduct.title);
            this.cart.push(singleProduct)
        }
    }
});

