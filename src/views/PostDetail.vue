<script setup>
import { ref, reactive, computed, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import PostService from '@/services/post.service.js'
import moment from 'moment'

const route = useRoute();

const postId = parseInt(route.params.id);

const post = ref({});

const formattedDate = computed(() => moment(post.value.publicAt).format('DD.MM.YYYY'));

const retrievePost = async (id) => {
    try {
        post.value = await PostService.get(id);
    } catch (error) {
        console.log(error);
    }
};

retrievePost(postId);
</script>

<template>
    <Header />
    <main class="post-single">
        <section class="post-detail-header">
            <div class="post-detail-header__container container--medium">
                <div class="breadcrumb" style="padding-bottom: 10px;">
                    <ol class="page-breadcrumb breadcrumb__list">
                        <li><a href="https://www.coolmate.me" class="breadcrumb__item">Trang chủ</a></li>
                        <li><a href="https://www.coolmate.me/blog" class="breadcrumb__item">Tin tức</a></li>
                        <li><a href="https://www.coolmate.me/blog/phoi-do" class="breadcrumb__item">{{ post.type }}</a>
                        </li>
                    </ol>
                </div>
                <div class="post-detail-header__inner">
                    <div class="post-detail-header__content">
                        <div class="post-detail-header__title">
                            <h1>{{ post.title }}</h1>
                        </div>
                        <div class="post-detail-header__description">
                            <p>
                                Tìm hiểu bí kíp phối đồ tập gym nam cực chất để mang lại sự thoải mái và phong cách cho
                                các chàng trai. Xem các gợi ý và nguyên tắc phối đồ tốt nhất để tạo nên một phong cách
                                tập luyện ấn tượng.
                            </p>
                            
                        </div>
                        <div class="post-detail-header__date">
                            <p class="time" style="color: rgba(0, 0, 0, 0.533);">
                                Ngày đăng: <span>{{ formattedDate }}</span>
                            </p>
                        </div>
                        <p v-if="post.source" class="post-src"><i>Nguồn: <a :href="post.source">{{ post.source }}</a></i></p>
                    </div>
                </div>
            </div>
        </section>
        <div v-html="post.content">
        </div>
    </main>
    <Footer />
</template>

<style>
body {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #231f20;
    text-align: left;
    background-color: #fff;
}

.post-detail-header__container {
    margin: 0 auto;
    width: 100%;
}

.container--medium {
    max-width: 1280px;
}

.post-detail-header {
    margin-top: 8em;
}

.breadcrumb {
    padding-left: 10px;
}

.breadcrumb .page-breadcrumb {
    display: flex;
    padding: 0;
    margin: 0;
}

.breadcrumb .page-breadcrumb li {
    list-style: none;
}

.breadcrumb .page-breadcrumb li+li:before {
    content: "/";
    display: inline-block;
    margin: 0 5px;
}

.breadcrumb .page-breadcrumb li:last-of-type a {
    color: #000;
}

.post-detail-header__title h1 {
    font-weight: 700;
    font-size: 35px;
    line-height: 115%;
    letter-spacing: .01em;
    margin-top: 0;
    margin-bottom: 30px;
}

.post-detail-header__description p {
    font-weight: 400;
    font-size: 20px;
    line-height: 143%;
    letter-spacing: .03em;
    color: #000;
    flex: 1;
    margin: 0;
}

.post-detail-header__description span {
    margin-top: 16px;
}

.post-detail-header__date p {
    font-weight: 400;
    font-size: 16px;
    line-height: 143%;
    letter-spacing: .03em;
    color: #8e8e8e;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.post-src a {
    color: #0000EE;
    cursor: pointer;
    text-decoration: underline;
}

.article-single-content {
    display: flex;
}

.article-single-content,
.article-single-content * {
    font-family: Pangea, sans-serif !important;
}

.article-single-content {
    padding-bottom: 28px;
    border-bottom: 1px solid #d9d9d9;
    letter-spacing: .03em;
}

.article-single-content,
.article-single-content * {
    font-family: Pangea, sans-serif !important;
}

@media (min-width: 1440px) {
    .container--medium {
        padding-left: 0;
        padding-right: 0;
    }
}

.container--medium {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
}

.article-single-content__wrapper {
    display: flex;
    justify-content: space-between;
}

@media screen and (min-width: 821px) {
    .blogs-promotion-banner__inner {
        padding-bottom: 0;
    }
}

.blogs-promotion-banner__inner {
    max-width: 730px;
    padding-bottom: 1em;
}

.blogs-promotion-banner__hide {
    display: flex;
    justify-content: flex-end;
}

.blogs-promotion-banner__hide .banner-hide {
    font-size: 10px;
    background-color: #d9d9d9;
    border-radius: 3px;
    padding: 3px 8px;
    margin-bottom: 0.5em;
}

.article-single-content a {
    color: #2f5acf;
}



@media (min-width: 1440px) {
    .container--detail {
        padding-left: 0;
        padding-right: 0;
    }
}

.container--detail {
    max-width: 750px;
}

div[rel-script="blog-detail"] {
    font-size: 16px;
}

.article-single-content p {
    font-size: 16px;
    line-height: 160%;
    margin: 15px 0;
}


.article-single-content h2 {
    font-size: 24px;
}

.article-single-content h3 {
    font-size: 20.5px;
    line-height: 1.25em;
    margin-left: 0 !important;
    text-indent: 0 !important;
}

.article-single-content ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-left: 40px !important;
}

.article-single-content img {
    border-radius: 20px;
}

.info-box {
    font-size: 16px;
    background-color: #f1f1f1;
    padding: 24px;
    border-radius: 16px;
}

.article-author {
    border-radius: 20px;
    padding: 15px;
    border: 1px dashed #d9d9d9;
    background-color: hsla(0, 0%, 85.1%, .3);
}

.article-author__inner {
    display: flex;
    align-items: center;
}

.article-author__thumbnail {
    flex: 0 0 120px;
    width: 120px;
    height: 120px;
    position: relative;
}

.article-author__thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 14px !important;
    -o-object-fit: cover;
    object-fit: cover;
}

.article-author__content {
    padding-left: 25px;
}

.article-single-content h6 {
    line-height: 1.25em;
    margin-left: 0 !important;
    text-indent: 0 !important;
}

.article-author__name {
    font-size: 24px !important;
    line-height: 1.25em !important;
    margin: 0 0 15px !important;
}

.article-author__description {
    font-size: 14px !important;
    margin: 0 !important;
}

.article-single-content .left-side-content-wrapper {
    padding-left: 2%;
}

.article-single-content .left-side-content {
    position: sticky;
    top: 120px;
}

.article-single-content .left-side-content {
    max-width: 386px;
    width: 386px;
    gap: 20px;
}

.left-side-content {
    display: flex;
    flex-flow: column-reverse;
    transition: all .3s;
}

.blog-table-of-content {
    width: 100%;
}

.blog-table-of-content {
    background: #f1f1f1;
    padding: 20px 24px 24px;
    border-radius: 16px;
    transition: all .3s;
}

@media screen and (min-width: 768px) {
    .blog-table-of-content__inner {
        max-height: 325px;
        overflow-x: hidden;
        overflow-y: auto;
    }
}

.blog-table-of-content__heading {
    position: absolute;
    top: 0;
    width: calc(100% - 40px);
    padding-top: 20px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 0;
    background: #f1f1f1;
    border-bottom: 1px solid #d9d9d9;
}

.blog-table-of-content__heading a {
    font-size: 60%;
    color: #2F5ACF;
}

.blog-table-of-content a {
    color: #000 !important;
    border-radius: 16px;
    transition: all .3s;
}

.article-single-content a {
    color: #2f5acf;
}

.blog-table-of-content ul {
    margin-top: 30px !important;
    list-style: none;
    padding: 0 !important;
    margin: 0;
}

.blog-table-of-content ol {
    list-style: none;
    padding: 0 0 0 15px;
}

.blog-table-of-content li+li {
    margin-top: 5px;
}
</style>