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
import ProductService from "@/services/product.service";

// const products = ref([]);

// const objectFromHome = {
//     name: "Tai",
//     age: 22
// };

// const productStrings = computed(() => {
//     return products.value.map((product) => {
//         const { name, price, salePercent, type, material } = product;
//         return [name, price, salePercent, type, material].join("").toLowerCase();
//     });
// });

// // const mostSaleProducts = computed(() => {
// //     return [...products.value].sort((a, b) => b.salePercent - a.salePercent)
// //         .slice(0, 10);
// // });

// const retrieveProducts = async () => {
//     try {
//         products.value = await ProductService.getAll();
//     } catch (error) {
//         console.log(error);
//     }
// };

// const refreshList = () => {
//     retrieveProducts();
// };

// onMounted(() => {
//     refreshList();
// });
</script>

<template>
    <!-- <main> -->
    <Header />
    <Carousel />
    <ProductList />
    <!-- <ProductList :products="products" :myObject="objectFromHome"/> -->

    <Banner />
    <ProductListFixed />

    <Banner />
    <ProductListFixed />

    <Banner />
    <ProductListFixed />

    <CareShare />

    <CollectionList />

    <CategoryList />

    <Footer />
    <!-- </main> -->
</template>
