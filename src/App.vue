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
            const apiUrlTv = store.apiUrlTv

            axios.get(myUrl, {
            params:{
                api_key: store.apiKey,
                query: store.filmList // Passa il valore di ricerca come parametro alla chiamata API
              }
            }).then(film => {
              store.filmArrayList = film.data.results;
              console.log('Film' + film.data.results)
            })
            .catch(error => {
              console.error(error);
            });
            axios.get(apiUrlTv, {
              params:{
                  api_key: store.apiKey,
                  query: store.filmList // Passa il valore di ricerca come parametro alla chiamata API
                }
              }).then(film => {
                store.filmArrayList = film.data.results;
                console.log('serie' + film.data.results)
              })
              .catch(error => {
                console.error(error);
              });
            },
            searchCast() {
              const movieId = store.filmArrayList.id; // Ottieni l'ID del film
              console.log(movieId)
              axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
                params: {
                  api_key: store.apiKey,
                },
              })
            .then((response) => {
              store.castList = response.data.cast;
            })
            .catch((error) => {
              console.error(error);
            });
        },
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