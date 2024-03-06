<script setup>
import { ref, computed, onMounted } from 'vue';
import Header from '@/components/common/Header.vue';
import Carousel from '@/components/common/Carousel.vue';
import Banner from '@/components/common/Banner.vue';
import ProductList from '../components/products/ProductList.vue';
import ProductListFixed from '@/components/products/ProductListFixed.vue';
import CareShare from '@/components/common/CareShare.vue';
import CollectionList from '@/components/common/CollectionList.vue';
import CategoryList from '@/components/common/CategoryList.vue';
import Footer from '@/components/common/Footer.vue';

const collectionList = [
    {
        id: 1,
        material: "FABRIC",
        title: "SẢN PHẨM THU ĐÔNG",
        banner: {
            src: "https://media.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/February2024/mceclip8_38.png",
            text: "ĐỒ THU ĐÔNG",
        },
    },
    {
        id: 2,
        material: "COTTON",
        title: "SẢN PHẨM CHẠY BỘ",
        banner: {
            src: "https://media.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/February2024/mceclip6_85.png",
            text: "ĐỒ CHẠY BỘ",
        }
    },
    {
        id: 3,
        material: "CANVAS",
        title: "SẢN PHẨM ÁO THUN",
        banner: {
            src: "https://media.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/February2024/mceclip7_14.png",
            text: "ÁO THUN NAM",
        }
    }
];

</script>

<template>
    <!-- <main> -->
    <Header />
    <Carousel />
    <ProductList />

    <div v-for="(item, index) in collectionList">
        <Banner :banner="item.banner" :key="index"/>
        <ProductListFixed :collection="item" :key="index" />
    </div>

    <CareShare />

    <CollectionList />

    <CategoryList />

    <Footer />
    <!-- </main> -->
</template>
