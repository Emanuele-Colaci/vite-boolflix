<script>
export default {
    props:{
        Films: Object
    },
}
</script>
<template>
    <div class="container d-flex mb-3">
        <div class="card">
              <!-- Titolo, Titolo Originale, Lingua, Voto-->
            <div class="card-body">
                <!-- RESTITUISCE IL TITOLO DEL FILM SE PRESENTE, ALTRIMENTI RESTITUISCE IL NOME DEL FILM  -->
                <h1><strong>Titolo:</strong> {{Films.title || Films.name}}</h1>
                <!-- RESTITUISCE IL TITOLO ORIGINALE DEL FILM SE PRESENTE, ALTRIMENTI RESTITUISCE IL NOME ORIGINALE DEL FILM  -->
                <h2><strong>Titlo originale:</strong> {{Films.original_title || Films.original_name}}</h2>
                <img v-if="Films.poster_path == null" src="/public/no-image.jpeg" class="placeholder">
                <img v-else :src="'https://image.tmdb.org/t/p/w185/' + Films.poster_path" :alt="Films.title || Films.name">
                <!-- Films.original_language VISUALIZZA LA BANDIRA CORRISPONDENTE ALLA LINGUA, SE LA LINGUA ORIGINALE E' IN INGLESE VIENE APPLICATA UN'ALTRA TIPO DI BANDIERA IN CASO CONTRARIO VIENE MOSTRATA SEMPLICEMENTE SOLO LA LINGUA ORIGINALE -->
                <h3>Lingua: 
                    <span v-if="Films.original_language" :class="'fi fi-' + Films.original_language"></span>
                    <span v-if="Films.original_language === 'en'" :class="'fi fi-gb' "></span>
                    <span v-else>{{ Films.original_language }}</span>
                </h3>
                <h4><strong>Voto:</strong>  
                    <p v-for="(star, index) in Math.ceil(Films.vote_average / 2)" :key="index">
                        <i class="fa-solid fa-star"></i>
                    </p>
                    <p v-for="(star, index) in Math.floor(5 - Films.vote_average / 2)" :key="index">
                        <i class="fa-regular fa-star"></i>
                    </p>
                 </h4>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    .container{
        
        .card{
            background-color: $back-col;
            border: 1px solid gainsboro;
            width: calc(100% / 4 - 10px );
            img{
                width: 100%;
            }
        }
        p{
            display: inline-block;
            i{
                font-size: 1.3rem;
            }
        }
    }
</style>