<script>
import axios from 'axios';
//IMPORTO HEADER E MAIN
import AppHeader from './components/App.header.vue';
import AppMain from './components/App.main.vue';

//IMPORTO STORE
import { store } from './store.js';

export default {
    components: {
        AppHeader,
        AppMain
    },
    data(){
        return{
          //CHIAMATA DELLO STORE
            store
        }
    }
}
</script>
<template>
  <div>
    <!-- HEADER -->
    <AppHeader />
    <!-- MAIN -->
    <AppMain />
  </div>
</template>
<style lang="scss">
    @use './styles/generals.scss' as *;
    @use './styles/partials/variables' as *;
  
</style>