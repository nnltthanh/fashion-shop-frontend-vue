<script setup>
import { ref } from 'vue';
import PostService from '@/services/post.service.js'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import moment from 'moment';

const props = defineProps({
    postsList: Object
});

</script>

<template>
    <div class="posts-slider">
        <div class="posts-slider__heading">
            Bài viết nổi bật
        </div>
        <Carousel class="posts-slide" :items-to-show="1" :wrap-around="true" :autoplay="2000">
            <Slide v-for="(post, index) in postsList" :key="index">
                <div class="post-slide__thumbnail">
                    <router-link :to="{
                        name: 'post',
                        params: {
                            id: post.id,
                        },
                    }">
                        <img :src="post.imagesURL" :alt="post.title">
                    </router-link>
                </div>
                <div class="post-slide__content">
                    <div class="post-slide__wrapper">
                        <div class="post-slide__category">
                            <a href="https://www.coolmate.me/blog/trend-moi-coolmate" tabindex="-1">
                                {{ post.type }} | Ngày đăng: {{ moment(post.publicAt).format('DD.MM.YYYY') }}
                            </a>

                        </div>
                        <h3 class="post-slide__title">
                            <router-link :to="{
                                name: 'post',
                                params: {
                                    id: post.id,
                                },
                            }">
                                {{ post.title }}
                            </router-link>
                        </h3>
                        <div class="post-slide__description">
                            <p>
                                {{ post.description }}
                            </p>
                        </div>
                        <div class="post-slide__viewcount">
                            Số lượt xem: 270871
                        </div>
                    </div>
                </div>
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

.carousel__slide {
    display: flex;
    flex-flow: column;
    border-radius: 10px;
    overflow: hidden;
    text-align: left;
}

.post-slide__thumbnail {
    width: 100%;
    max-height: 422px;
    min-height: 422px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.post-slide__thumbnail img {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.post-slide__content {
    width: 100%;
    padding: 14px 0;
}

.post-slide__wrapper {
    display: flex;
    flex-flow: column;
    height: 100%;
}

.post-slide__category {
    font-size: 15px;
    margin-bottom: 16px;
    color: #8e8e8e;
}

.post-slide__title {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 11px;
}

.post-slide__author,
.post-slide__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: .03em;
}

.post-slide__description {
    color: #000;
    flex: 1;
    margin-bottom: 10px;
    display: -webkit-box;
    text-align: justify;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.post-slide__viewcount {
    font-weight: 400;
    font-size: 15px;
    color: #8e8e8e;
}
</style>