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
    <header class="z-3 position-fixed w-100">
        <div class="my-container d-flex justify-between p-3 ">
            <!-- LOGO DI BOOLFIX -->
            <div class="logo">
                <img src="/public/logo.png" alt="logo">
            </div>
            <!-- CAMPO INPUT E BOTTON PER LA RICERCA DEL FILM -->
            <input @keyup.enter="$emit('search', store.filmList)" type="text" class="me-3" placeholder="Cerca" v-model="store.filmList">
            <button type="button" class="btn btn-info" @click="$emit('search', store.filmList)">Click</button>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    header{
        background-color: $back-col;
        input{
            color: #000;
        }
        .logo{
            width: 10vw;
            img{
                max-width: 100%;
            }
        }
    }
</style>