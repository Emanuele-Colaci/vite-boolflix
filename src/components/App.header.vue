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
    <div class="container">
        <input type="text" class="me-3" placeholder="Cerca" v-model="store.filmList">
        <button type="button" class="btn btn-info" @click="$emit('search', this.store.filmList)">Click</button>
    </div>
</template>
<style lang="scss" scoped>
    
</style>