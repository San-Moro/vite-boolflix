<script>
export default {
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            availableFlags : ['en', 'it']
        }
    },
    methods: {
        getFlagsImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.jpg`, import.meta.url).href;
        }
    }

}
</script>

<template>
    <ul>
        <li >
          <h2> Title: {{ item.title }}</h2>
          <p> Original Title: {{ item.original_title }}</p>
          <div class="language">
            <img v-if="availableFlags.includes(item.original_language)" :src="getFlagsImgUrl(item.original_language)" alt="">
            <p v-else> Original Language: {{ item.original_language }}</p>
          </div>
          <p> Vote: {{ item.vote_average }}</p>
        </li>
      </ul>

</template>

<style lang="scss" scoped>
.language {
    img {
        width: 50px;
    }
}
</style>