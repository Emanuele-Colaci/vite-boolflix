<script>
export default {
    props:{
        Films: Object
    },
}
</script>
<template>
    <div class="my-container mb-3 w-100">
        <div class="card">
              <!-- Titolo, Titolo Originale, Lingua, Voto-->
            <div class="card-body">
                <img v-if="Films.poster_path == null" src="/public/no-image.jpeg">
                <img v-else :src="'https://image.tmdb.org/t/p/w185/' + Films.poster_path" :alt="Films.title || Films.name">
                <div class="info">
                    <!-- RESTITUISCE IL TITOLO DEL FILM SE PRESENTE, ALTRIMENTI RESTITUISCE IL NOME DEL FILM  -->
                    <h4><strong>Titolo:</strong> {{Films.title || Films.name}}</h4>
                    <!-- RESTITUISCE IL TITOLO ORIGINALE DEL FILM SE PRESENTE, ALTRIMENTI RESTITUISCE IL NOME ORIGINALE DEL FILM  -->
                    <h4><strong>Titlo originale:</strong> {{Films.original_title || Films.original_name}}</h4>
                    <!-- Films.original_language VISUALIZZA LA BANDIRA CORRISPONDENTE ALLA LINGUA, SE LA LINGUA ORIGINALE E' IN INGLESE VIENE APPLICATA UN'ALTRA TIPO DI BANDIERA IN CASO CONTRARIO VIENE MOSTRATA SEMPLICEMENTE SOLO LA LINGUA ORIGINALE -->
                    <h4>Lingua: 
                        <span v-if="Films.original_language" :class="'fi fi-' + Films.original_language"></span>
                        <span v-if="Films.original_language === 'en'" :class="'fi fi-gb' "></span>
                        <span>{{ Films.original_language }}</span>
                    </h4>
                    <h4><strong>Voto:</strong>  
                        <p v-for="(star, index) in Math.ceil(Films.vote_average / 2)" :key="index">
                            <i class="fa-solid fa-star"></i>
                        </p>
                        <p v-for="(star, index) in Math.floor(5 - Films.vote_average / 2)" :key="index">
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <div class="overview">
                            <h6>Overview:</h6>
                            <p>{{Films.overview}}</p>
                        </div>
                     </h4>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    .my-container{
        max-width: 1070px;
        margin: 0 auto;
        .card {
            cursor: pointer;
            padding: 1.5rem;
            background: grey;
            position: relative;
            display: flex;
            align-items: center;
            transition: 0.4s ease-out;
            box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5); 
            margin-bottom: 20px;
            width: 100%;
        }
        .card:hover {
            transform: translateY(20px); 
        }
        .card:hover:before {
            opacity: 1; 
        }
        .card:hover .info {
            opacity: 1;
            transform: translateY(0px); 
        }
        .card:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            z-index: 2;
            transition: 0.5s;
            opacity: 0; 
        }
        .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: contain;
        }
        .card .info {
            position: relative;
            z-index: 3;
            opacity: 0;
            transform: translateY(30px);
            transition: 0.5s; 
        }
        .overview{
            max-height: 200px;
            overflow-y: auto;
        }
        p{
            display: inline-block;
            i{
                font-size: 1.3rem;
            }
        }
    }
</style>