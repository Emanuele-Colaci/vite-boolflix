<script>
export default {
    props:{
        Films: Object
    },
}
</script>
<template>
    <div class="card">
          <!-- Titolo, Titolo Originale, Lingua, Voto-->
        <div class="card-body">
            <h1><strong>Titolo:</strong> {{ Films.title }}</h1>
            <h1><strong>Titlo originale:</strong> {{ Films.original_title }}</h1>
            <h1><strong>Lingua:</strong> {{ Films.original_language }}</h1>
            <h1><strong>Voto:</strong> {{ Films.vote_average }}</h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>