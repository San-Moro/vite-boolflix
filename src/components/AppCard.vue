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
    computed: {
        getTitle() {
            // if(this.item.title) {
            //     return this.item.title;
            // } else {
            //     return this.item.name;
            // }
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            // if(this.item.original_title) {
            //     return this.item.original_title
            // } else {
            //     return this.item.original_name
            // }
            return this.item.original_title ? this.item.original_title : this.item.original_name;
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
          <h4> Title: {{ getTitle }}</h4>
          <p> Original Title: {{ getOriginalTitle }}</p>
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