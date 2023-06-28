<script>
import { store } from '../store.js';

export default {
    data(){
        return{
            store,
        }
    },
    props:{
        cast: Object
    },
    methods: {
        searchFilms() {
            const movieId = film.id; // Ottieni l'ID del film
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
    }
}
</script>
<template>
    <div>
        <h4><strong>Generi:</strong> {{ cast.name }} </h4>
    </div>
</template>
<style lang="scss" scoped>
    
</style>