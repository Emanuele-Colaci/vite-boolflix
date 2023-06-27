<script>
//IMPORTO STORE
import { store } from '../store.js';
export default {
    data(){
        return{
          //CHIAMATA DELLO STORE
            store,
        }
    },
}
</script>
<template>
    <!-- CAMPO INPUT E BOTTON PER LA RICERCA DEL FILM -->
    <div class="container">
        <input @keyup.enter="$emit('search', store.filmList)" type="text" class="me-3" placeholder="Cerca" v-model="store.filmList">
        <button type="button" class="btn btn-info" @click="$emit('search', store.filmList)">Click</button>
    </div>
</template>
<style lang="scss" scoped>
    
</style>