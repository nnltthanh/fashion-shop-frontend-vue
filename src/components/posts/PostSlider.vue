<script setup>
import { ref } from 'vue';
import PostService from '@/services/post.service.js'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const posts = ref([]);

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

    <div class="posts-slider">
        <div class="posts-slider__heading">
            Bài viết nổi bật
        </div>
        <Carousel class="posts-slide" :items-to-show="1" :wrap-around="true" :autoplay="0">
            <Slide v-for="(post, index) in posts" :key="index">
                abc
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>

</template>

<style>
a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    transition: all .2s;
}

.posts_top_sections .posts-slider {
    order: 0;
    width: 50%;
}

.posts-slider__heading {
    font-size: 36px;
    font-weight: 700;
}
</style>