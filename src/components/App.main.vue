<script>
//IMPORTO STORE
import { store } from '../store.js';
import AppFilms from './App.films.vue';
export default {
    components:{
        AppFilms
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
    <div class="container pt-2 pb-3">
        <ul>
            <!-- CICLO PER POPOLARE L'ARRAY DI FILM -->
            <li v-for="film in (store.filmArrayList)" :key="film.id">
                <AppFilms :Films="film" />
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    ul{
        list-style-type: none;
        margin-top: 100px;
    }
</style>