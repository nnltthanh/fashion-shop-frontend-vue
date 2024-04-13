<script setup>
import { ref } from 'vue';
import PostService from '@/services/post.service.js'
import moment from 'moment';

const props = defineProps({
    postsList: Object
});

</script>

<template>

    <div class="posts-mostviewed">
        <div class="posts-mostviewed__heading">
            <div class="posts-mostviewed__heading-title">
                Xem nhiều nhất
            </div>
        </div>
        <div class="posts-mostviewed__lists">
            <div v-for="(item, index) in postsList" :key="index" class="posts-mostviewed__lists-item">
                <div class="item-img">
                    <router-link :to="{
                        name: 'post',
                        params: {
                            id: item.id,
                        },
                    }">
                        <img :src="item.imagesURL" :alt="item.title">
                    </router-link>
                </div>
                <div class="item-info">
                    <div class="item-info__cate">
                        <a href="https://www.coolmate.me/blog/phoi-do">{{ item.type }}</a>
                        |
                        <span class="item-info__postdate">{{ moment(item.publicAt).format('DD.MM.YYYY') }}</span>
                    </div>
                    <div class="item-info__title">
                        <router-link :to="{
                            name: 'post',
                            params: {
                                id: item.id,
                            },
                        }">
                            {{ item.title }}
                        </router-link>
                    </div>
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

.posts-mostviewed {
    width: 40%;
}

.posts-mostviewed__heading {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
}

.posts-mostviewed__lists {
    display: flex;
    flex-flow: column;
    width: 100%;
    row-gap: 10px;
}

.posts-mostviewed__lists-item {
    display: flex;
    gap: 0 10px;
}

.posts-mostviewed__lists-item .item-img {
    display: flex;
    min-height: 127px;
    border-radius: 10px;
    overflow: hidden;
    max-width: 167px;
    max-height: 55px;
    height: 100%;
}

.posts-mostviewed__lists-item .item-info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    gap: 5px 0;
}

.posts-mostviewed__lists-item .item-info__cate {
    color: #8e8e8e;
    font-size: 14px;
}

.posts-mostviewed__lists-item .item-info__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3em;
}
</style>