<script setup>
import { ref, computed } from 'vue';
import PostMostViewed from './PostMostViewed.vue'
import PostSlider from './PostSlider.vue'
import PostGridSlide from './PostGridSlide.vue'
import PostListings from './PostListings.vue'
import PostService from '@/services/post.service.js'
const posts = ref([]);

const postsMostViewed = computed(() => {
    return posts.value.slice(0, 4);
})

const retrievePosts = async () => {
    try {
        posts.value = await PostService.getAll();
    } catch (error) {
        console.log(error);
    }
};

retrievePosts();
</script>

<template>

    <div class="posts-sections">
        <div class="posts-section__container container--medium">
            <div class="posts_top_sections">
                <PostSlider :posts-list="posts" />
                <PostMostViewed :posts-list="postsMostViewed" />

            </div>
        </div>
        <PostGridSlide :posts-list="posts" />
        <PostListings :posts-list="posts" />
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