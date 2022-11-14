<script>
import {store} from "../store";

export default {
  name: "SearchBar",
  data() {
    return {
        store
    }
  }
}
</script>

<template>
    <div>
        <label for="search">Cerca cosa guardare: </label>
        <input type="text" id="search"
        v-model="store.searchKey">
        <button class="btn-search" @click="$emit('searchClicked')">Cerca</button>
    </div>
</template>

<style></style>