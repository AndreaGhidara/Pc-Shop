import { reactive } from 'vue'

import axios from 'axios';


export const store = reactive({

    //recupero Dati
    products : [],

    callApi(routeApi, elementApi){

        axios.get(routeApi + elementApi)
        .then(response => {
            this.products = response.data.results
        })
        .catch(error =>{
            console.error(error);
        })
    },

    //Shopping

    cart:[],

    addToCart(product,n){
        product.quantity = Number(n)
        this.cart.push(product);
        this.totalPrice()
        // console.log(product,n);
    },

    calcPrice() {
        //Inizializzo un totale che parte da 0
        let total = 0;
        //Ciclo tutti gli elementi nel carrello e prendo i prezzi somandoli al totale
        for (let i = 0; i < this.cart.length; i++) {
            let singlePrice = this.cart[i].price * this.cart[i].quantity;
        total = this.somma(total, singlePrice);
    }
    }
    

});