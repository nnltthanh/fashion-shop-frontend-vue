<script setup>
import PostMostViewed from './PostMostViewed.vue'
import PostSlider from './PostSlider.vue'
import { ref } from 'vue';

</script>

<template>

    <div class="posts-sections">
        <div class="posts-section__container container--medium">
            <div class="posts_top_sections">
                <PostSlider />
                <PostMostViewed />
            </div>
        </div>
    </div>

</template>

<style>
.posts-section__container {
    margin: 0 auto;
    width: 100%;
}

.container--medium {
    max-width: 1280px;
}

.posts_top_sections {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
}
</style>