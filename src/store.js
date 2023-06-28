import { reactive } from 'vue'

export const store = reactive({
    //API DEI FILM E SERIE TV 
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '7eaec1b5e6bf5956c5972f2230cfc8c7',
    filmList: '',
    filmArrayList: [],
    castList: []
})

