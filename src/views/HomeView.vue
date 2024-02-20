<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import Carousel from '@/components/common/Carousel.vue';
import Banner from '@/components/common/Banner.vue';
import ProductList from '@/components/products/ProductList.vue';
import ProductListFixed from '@/components/products/ProductListFixed.vue';
import CareShare from '@/components/common/CareShare.vue';
import CollectionList from '@/components/common/CollectionList.vue';
import CategoryList from '@/components/common/CategoryList.vue';
</script>

<template>
  <!-- <main> -->
  <!-- <Header /> -->
    <Carousel />
    <ProductList />

    <Banner />
    <ProductListFixed />

    <Banner />
    <ProductListFixed />

    <Banner />
    <ProductListFixed />

    <CareShare />

    <CollectionList />

    <CategoryList />
  <!-- </main> -->
</template>
