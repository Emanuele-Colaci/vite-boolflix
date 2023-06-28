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