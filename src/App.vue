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
    },
    methods:{
        searchFilms(){
            const myUrl = store.apiUrl

            axios.get(myUrl, {
            params:{
                query: store.filmList // Passa il valore di ricerca come parametro alla chiamata API
              }
            }).then(film => {
              store.filmArrayList = film.data.results;
            })
            .catch(error => {
              console.error(error);
            });
          }
    },
}
</script>
<template>
  <div>
    <!-- HEADER -->
    <AppHeader @search="searchFilms"/>
    <!-- MAIN -->
    <AppMain />
  </div>
</template>
<style lang="scss">
    @use './styles/generals.scss' as *;
    @use './styles/partials/variables' as *;
  
</style>