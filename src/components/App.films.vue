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
                <!-- Films.original_language VISUALIZZA LA BANDIRA CORRISPONDENTE ALLA LINGUA, SE LA LINGUA ORIGINALE E' IN INGLESE VIENE APPLICATA UN'ALTRA TIPO DI BANDIERA IN CASO CONTRARIO VIENE MOSTRATA SEMPLICEMENTE SOLO LA LINGUA ORIGINALE -->
                <h3>Lingua: 
                    <span v-if="Films.original_language" :class="'fi fi-' + Films.original_language"></span>
                    <span v-if="Films.original_language === 'en'" :class="'fi fi-gb' "></span>
                    <span v-else>{{ Films.original_language }}</span>
                </h3>
                <h4><strong>Voto:</strong> {{ Films.vote_average }}</h4>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>