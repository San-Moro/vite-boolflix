<script>
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import {store} from "./store";

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=738c63774d45def498449172fbfdb41f&query=matrix`)
      .then((resp) => {
        this.store.movies = resp.data.results;
      } );
  },
  methods: {
    getMovies() {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
        .then((resp) => {
        this.store.movies = resp.data.results;
        console.log(this.store.movies);

      })
    }
  }
}
</script>

<template>
  <main>
    <section>
      <SearchBar @searchClicked="getMovies" />
    </section>
    <section class="search-result">
      <ul>
        <li v-for="movie in store.movies" :key="movie.id">
          <h2> Title: {{ movie.title }}</h2>
          <p> Original Title: {{ movie.original_title }}</p>
          <p> Original Language: {{ movie.original_language }}</p>
          <p> Vote: {{ movie.vote_average }}</p>

        </li>
      </ul>
    </section>
  </main>
</template>

<style></style>