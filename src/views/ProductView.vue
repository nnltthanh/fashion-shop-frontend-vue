<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import ProductService from "@/services/product.service";

const materialList = reactive([
    {
        name: "Áo",
        isActive: false
    },
    {
        name: "Quần",
        isActive: false
    },
    {
        name: "Áo khoác",
        isActive: false
    },
    {
        name: "Phụ kiện",
        isActive: false
    },
]);

const toggleActive = (index) => {
    const item = materialList[index];
    item.isActive = !item.isActive;
}

</script>

<template>
    <Header />
    <main class="site-collections">
        <div class="site-collections__container">
            <h1 class="collections-filter__heading">Tất cả sản phẩm</h1>
            <div class="running-products__head">
                <a href="#" id="hideLeftContentButton" class="tab-header__item">
                    <span>
                        <i class="fa-solid fa-sliders"></i>
                        Ẩn bộ lọc
                    </span>
                </a>
                <div class="tab-header tab-collection-get-header" style="display: none;">
                    <a href="#" data-param="ao" class="tab-header__item is-active">Áo</a>
                    <a href="#" data-param="quan" class="tab-header__item">Quần</a>
                    <a href="#" data-param="ao-khoac" class="tab-header__item">Áo khoác</a>
                    <a href="#" data-param="tat-ca-phu-kien" class="tab-header__item">Phụ kiện</a>
                </div>
            </div>
        </div>
        <div class="collection-grid">
            <div class="collection-left-filter__desktop">
                <div class="collection-left-filter__wrapper">
                    <div class="collection-left-filter__action">
                        <div class="collection-left-filter__count-item">
                            188 kết quả
                        </div>
                        <div class="collection-left-filter__empty" style="">
                            <a href="https://www.coolmate.me/collections?sort=new" id="removeAllFilterSticky">
                                Xoá lọc
                            </a>
                        </div>
                    </div>
                    <div class="collection-left-filter__select">
                        <div class="collection-left-filter__item">
                            <h5 class="collection-left-filter__heading">
                                Danh mục
                            </h5>
                            <ul class="filter-select-material">
                                <li v-for="(item, index) in materialList" :key="index" data-value="ao" class="filter-select-material__item" :class="{ selected: item.isActive }" @click="toggleActive(index)">
                                    <div class="filter-select-material__checkbox">
                                        <input type="checkbox" value="false">
                                        <label>{{ item.name }}</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');

html {
    -webkit-text-size-adjust: 100%;
}

body {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #231f20;
    text-align: left;
}

.site-collections__container {
    padding-left: 64px;
    padding-right: 64px;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    margin-top: 132px;
}

.collections-filter__heading {
    font-family: 'Prompt', sans-serif;
    padding: 0 10px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 10px;
    margin-right: 15px;
}

.running-products__head {
    display: flex;
    align-items: center;
}

#hideLeftContentButton {
    min-width: 130px;
    margin-bottom: 20px;
}

#hideLeftContentButton span {
    display: flex;
    align-items: center;
}

#hideLeftContentButton span i {
    margin-right: 5px;
}

.tab-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.tab-header__item {
    background: #DBDBDB;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-width: 100px;
    padding: 10px 12px;
    border-radius: 41px;
    margin: 0 10px;
    color: #000;
    text-align: center;
    font-size: 14px;
}

.tab-header__item.is-active,
.tab-header__item:hover {
    background-color: #000;
    color: #fff;
}

.collection-grid {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.collection-left-filter__desktop {
    padding-left: 64px;
    position: sticky;
    top: 20px;
    transition: all .3s;
    transform: translateY(0px);
}

.collection-left-filter__wrapper {
    overflow: auto;
    max-height: calc(100vh - 50px);
    min-width: 273px;
    padding-right: 15px;
}

.collection-left-filter__action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aebbc1;
    padding: 0.5rem 0;
}

.collection-left-filter__count-item {
    font-weight: 600;
}

.collection-left-filter__empty {
    padding: 0.375rem 0.75rem;
    gap: 0.5rem;
    border-radius: 1.5rem;
    border: 1px solid #000;
    font-weight: 600;
}

.collection-left-filter__empty a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    transition: all .2s;
}

.collection-left-filter__heading {
    opacity: .5;
    font-weight: 500;
    font-size: .875rem;
    margin: 0.75rem 0;
}

.filter-select-material {
    padding-left: 0;
    transition: all .4s ease;
    overflow: hidden;
    list-style: none;
}

.filter-select-material__item {
    position: relative;
    margin-bottom: 6px;
    cursor: pointer;
}

.filter-select-material__checkbox {
    display: flex;
    align-items: center;
}

input {
    line-height: 1.15;
    appearance: none;
    box-shadow: none;
    border-radius: 0;
}

.filter-select-material__checkbox input:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 2px solid #bebebe;
    color: #2b9dd6;
    border-radius: 0.2rem;
}

.filter-select-material__item.selected input:before {
    background: #2f5acf;
}

.filter-select-material__checkbox label {
    letter-spacing: 0;
    display: flex;
    align-items: center;
    vertical-align: middle;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    padding-left: 30px;
}
</style>