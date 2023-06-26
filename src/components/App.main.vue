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
    <div class="container">
        <ul>
           <li v-for="(film, index) in store.filmArrayList" :key="index">
                <AppFilms :Films="film"/>
           </li> 
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    ul{
        list-style-type: none;
    }
</style>