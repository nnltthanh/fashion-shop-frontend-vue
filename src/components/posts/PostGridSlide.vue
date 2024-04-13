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

    <div class="posts-grid-slide">
        <div class="posts-grid-slide__container container--medium"
            style="background-color: rgb(249, 248, 108); border-radius: 20px;">
            <div class="posts-grid-slide__heading">
                <a href="#">BT Có Gì Mới</a>
            </div>
            <div class="posts-grid-slide__slide">
                <Carousel class="posts-slide" :items-to-show="3" :wrap-around="true" :autoplay="2000">
                    <Slide v-for="(post, index) in postsList" :key="index">
                        <div class="grid__column">
                            <div class="post-grid post-grid--listing">
                                <div class="post-grid__thumbnail">
                                    <router-link :to="{
                                        name: 'post',
                                        params: {
                                            id: post.id,
                                        },
                                    }">
                                        <img :src="post.imagesURL"
                                            alt="VỤN Art: Quay về tuổi thơ với bộ sưu tập Vietnamese Joy">
                                    </router-link>
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
                                        <a href="https://www.coolmate.me/blog/coolmate-co-gi-moi" tabindex="0">
                                            {{ post.type }}
                                        </a> | {{ moment(post.publicAt).format('DD.MM.YYYY') }}
                                    </span>
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

.posts-grid-slide {
    margin-top: 2em;
    padding: 0 60px;
}

@media (min-width: 1440px) {
    .container--medium {
        padding-left: 0;
        padding-right: 0;
    }
}

.posts-grid-slide__container {
    width: 100%;
    margin: 0 auto;
}

.container--medium {
    max-width: 1280px;
}


.posts-grid-slide__heading {
    font-size: 30px;
    font-weight: 700;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 20px;
}


.posts-grid-slide__slide {
    max-width: 1200px;
    margin: auto;
}

.carousel__slide {
    position: relative;
    box-sizing: border-box;
    min-height: 1px;
    vertical-align: top;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 9px;
    width: 100%;
}

.posts-grid-slide__slide .post-grid--listing {
    display: flex;
    flex-flow: column;
    padding-left: 0;
}

.posts-grid-slide__slide .post-grid--listing .post-grid__thumbnail {
    width: 100%;
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

.posts-grid-slide .post-grid__content {
    flex-flow: column-reverse;
    display: flex;
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
</style>