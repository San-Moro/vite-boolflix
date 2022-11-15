<script>
export default {
    name: "AppCard",
    props: {
        item: Object
    }
}
</script>

<template>
    <ul>
        <li >
          <h2> Title: {{ item.title }}</h2>
          <p> Original Title: {{ item.original_title }}</p>
          <p> Original Language: {{ item.original_language }}</p>
          <p> Vote: {{ item.vote_average }}</p>

        </li>
      </ul>

</template>

<style></style>