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
    getMovies() {
      axios
        .get(`${this.store.apiMoviesURL}?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
        .then((resp) => {
        this.store.movies = resp.data.results;
        console.log(this.store.movies);

      })
    }
  }
}
</script>

<template>
  <header>
    <div class="search-bar">
      <SearchBar @searchClicked="getMovies" />
    </div>
  </header>
  <main>
    <section class="movies">
      <h2>Movies</h2>
      <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie"/>
    </section>
    <section class="series"></section>
  </main>
</template>

<style></style>