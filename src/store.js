import {reactive} from "vue";

export const store = reactive({
    apiMoviesURL: "https://api.themoviedb.org/3/search/movie",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv",
    apiKey: "738c63774d45def498449172fbfdb41f",
    searchKey: "",
    movies: [],
    series: [],
});