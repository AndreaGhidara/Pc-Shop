<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './data/store'



export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<template>
  
  <header>
    <AppHeader />
  </header>

  <main>
    <router-view>
  
    </router-view>
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped>

</style>
