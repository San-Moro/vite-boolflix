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
        },
        getStarsNumber() {
            return Math.ceil(this.item.vote_average / 2);
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

    <img v-if="item.poster_path" :src="`http://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
    <img v-else src="../assets/img/no-image.jpg" alt="">

    <ul>
        <li >
            <h4> Title: {{ getTitle }}</h4>
            <p> Original Title: {{ getOriginalTitle }}</p>
            <div class="flag">
                <img v-if="availableFlags.includes(item.original_language)" :src="getFlagsImgUrl(item.original_language)" alt="">
                <p v-else> Original Language: {{ item.original_language }}</p>
            </div>
            <div class="stars">
                <i v-for="n in 5" :key="n" :class="n <= getStarsNumber ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
            </div>
        </li>
    </ul>
 
</template>

<style lang="scss" scoped>
.flag {
    img {
        width: 50px;
    }
}
</style>