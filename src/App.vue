<script>
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import AppCard from "./components/AppCard.vue";
import {store} from "./store";

export default {
  components: {
    SearchBar,
    AppCard
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getAll() {
      this.getMovies()
      this.getSeries()
    },
    getMovies() {
      axios
        .get(`${this.store.apiMoviesURL}?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
        .then((resp) => {
        this.store.movies = resp.data.results;
        console.log(this.store.movies);

      })
    },
    getSeries() {
      axios
        .get(`${this.store.apiSeriesURL}?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
        .then((resp) => {
        this.store.series = resp.data.results;
        console.log(this.store.series);

      })
    }
  }
}
</script>

<template>
  <header>
    <div class="search-bar">
      <SearchBar @searchClicked="getAll" />
    </div>
  </header>
  <main>
    <section class="movies">
      <h1>Movies</h1>
      <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie"/>
    </section>
    <section class="series">
      <h1>Series</h1>
      <AppCard v-for="serie in store.series" :key="serie.id" :item="serie"/>
    </section>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>