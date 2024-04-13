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
    <div class="posts-listings">
        <div class="posts-listings__container container--medium">
            <div class="posts-listings__heading">
                Bài mới mỗi ngày
            </div>
            <div class="grid-view">
                <div v-for="(post, index) in postsList" class="grid__column col-4">
                    <div class="post-grid post-grid--listing">
                        <div class="post-grid__thumbnail">
                            <router-link :to="{
                                name: 'post',
                                params: {
                                    id: post.id,
                                },
                            }">
                                <img :src="post.imagesURL" :alt="post.title">
                            </router-link>>
                        </div>
                        <div class="post-grid__content">
                            <h3 class="post-grid__title">
                                <router-link :to="{
                                    name: 'post',
                                    params: {
                                        id: post.id,
                                    },
                                }">
                                    {{ post.title }}
                                </router-link>
                            </h3>
                            <span class="post-grid__infomations">
                                <a href="https://www.coolmate.me/blog/chat-lieu-may-mac">{{ post.type }}</a>
                                | {{ moment(post.publicAt).format('DD.MM.YYYY') }}
                            </span>
                            <p class="post-grid__description">
                                {{ post.description }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="post-load-more-container">
                    <a href="javascript:void(0)" class="post-load-more btn">
                        Xem thêm
                    </a>
                    <span class="content-loading" style="display: none;"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    transition: all .2s;
}

.posts-listings {
    margin-top: 2em;
}

@media (min-width: 1440px) {
    .container--medium {
        padding-left: 0;
        padding-right: 0;
    }
}

.posts-listings__container {
    width: 100%;
    margin: 0 auto;
}

.container--medium {
    max-width: 1280px;
}

.posts-listings__heading {
    padding: 10px 0 10px 20px;
    background: #2f5acf;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1em;
}

.grid-view {
    display: flex;
    -moz-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -9px;
    margin-right: -9px;
    padding: 0;
    position: relative;
    float: none;
}

.post-grid {
    display: flex;
    flex-flow: column;
}

.post-grid__thumbnail {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 16px;
}

.post-grid--listing .post-grid__thumbnail:before {
    padding-top: 73.5802469136%;
}

.post-grid__thumbnail:before {
    content: "";
    display: block;
    padding-top: 121.6748768473%;
    height: 0;
    width: 100%;
}

.post-grid__thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.post-grid--listing .post-grid__content {
    flex: 1;
    padding-left: 8px;
}

.post-grid__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 114.6%;
    letter-spacing: .03em;
    color: #000;
    margin: 0 0 12px;
}

.post-grid__infomations {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 114.6%;
    letter-spacing: .03em;
    margin-bottom: 7px;
    color: #8e8e8e;
}

.post-grid__description {
    margin-top: 12px;
    margin-bottom: 9px;
    display: -webkit-box;
    text-align: justify;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.post-load-more-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 16px;
    border: 2px solid #000;
    background-color: #000;
    color: #fff;
    padding: 0 30px;
    transition: all .2s;
    cursor: pointer;
}

.post-load-more {
    background-color: #2f5acf;
    padding: 12px 40px;
    border: none;
}
</style>