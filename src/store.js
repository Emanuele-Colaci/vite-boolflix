import { reactive } from 'vue'

export const store = reactive({
    //API DEI FILM E SERIE TV 
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=7eaec1b5e6bf5956c5972f2230cfc8c7',
    apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
    filmList: '',
    filmArrayList: [],
})

