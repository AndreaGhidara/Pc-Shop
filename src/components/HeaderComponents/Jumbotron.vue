<script>


export default {
    name: "Jumbotron",
    components: {

    },
    data() {
        return {
            
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>

<template>
    <div class="containerCustom p-0">
        <div class="img_container">
            <img class="img-fluid"
                src="https://images.everyeye.it/img-notizie/offerte-pc-computer-gaming-streamer-creator-pronta-consegna-gaming-art-v13-632063.jpg"
                alt="">
            <div class="filigrane">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
}

.img_container {
    position: relative;
    width: 100%;
    height: 20rem;

}

.filigrane {
    width: 100%;
    height: 20rem;
    position: absolute;
    background-color: rgba(233, 233, 233, 0.247);
    top: 0;
    left: 0;
}
</style>