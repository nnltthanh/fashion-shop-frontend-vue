<script setup>
import { ref, reactive, computed } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ProductCard from './ProductCard.vue';
import ProductService from "@/services/product.service";

const productStore = useProductStore()

const products = ref([]);

const productPerRow = 'col-3';

const productSize = computed(() => {
    let size = products.value.length;
    productStore.setProductCount(size);
    return size;
});

const retrieveProducts = async () => {
    try {
        products.value = await ProductService.getAll();
    } catch (error) {
        console.log(error);
    }
};

const refreshList = () => {
    retrieveProducts();
};

refreshList();
</script>

<template>
    <section>
        <div class="collection-grid__container">
            <div class="collection-filter-selected">
                <div class="collection-filter-selected__wrapper">
                    <h5 class="collection-filter-selected__count">{{ productSize }} kết quả</h5>
                    <div class="collection-filter-selected__box">
                        <button class="collection-filter-selected__item">
                            Áo
                            <span>x</span>
                        </button>
                        <a href="https://www.coolmate.me/collections?sort=new" id="removeAllFilterSelected"
                            style="color: rgb(47, 90, 207); margin-left: 12px;">
                            Xóa lọc
                        </a>
                    </div>
                </div>
                <div class="filter-sortby">
                    <h5 class="filter-sortby__heading">
                        PHÂN LOẠI
                    </h5>
                    <div class="filter-sortby__item">
                        <div class="custom-select">
                            <select name="sort">
                                <option value="">Sắp xếp</option>
                                <option value="new" selected="selected">Mới nhất</option>
                                <option value="bestseller">Bán chạy</option>
                                <option value="price-asc">Giá thấp đến cao</option>
                                <option value="price-desc">Giá cao đến thấp</option>
                                <option value="percent">% giảm giá nhiều</option>
                            </select>
                            <div class="select-selected">Mới nhất</div>
                            <div class="select-items select-hide" style="display: none;">
                                <div data-value="new"><span>Mới nhất</span></div>
                                <div data-value="bestseller"><span>Bán chạy</span></div>
                                <div data-value="price-asc"><span>Giá thấp đến cao</span></div>
                                <div data-value="price-desc"><span>Giá cao đến thấp</span></div>
                                <div data-value="percent"><span>% giảm giá nhiều</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collection-products">
                <div class="collection-products__wrapper">
                    <div class="collection-products__content">
                        <div class="collection-products__grid row">
                            <ProductCard v-for="product in products" :product="product" :gridCol="productPerRow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.collection-grid__container {
    padding-left: 64px;
    padding-right: 64px;
    width: 100%;
    margin: 0 auto;
}

.collection-filter-selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}

.collection-filter-selected__wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: unset;
}

.collection-filter-selected__count {
    margin-bottom: 0;
    margin-right: 10px;
    font-size: 13.5px;
    color: #231f20;
    font-weight: 400;
}

.collection-filter-selected__box {
    display: flex;
    align-items: center;
    max-width: 700px;
    flex-wrap: wrap;
}

.collection-filter-selected__item {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #bebebe;
    border-radius: 0.375rem;
    background: #fff;
    line-height: 22px;
    text-transform: capitalize;
    white-space: nowrap;
    opacity: .6;
    padding: 1px 6px;
    margin: 3px 5px;
    font-weight: 400;
}

.collection-filter-selected__item:first-child {
    margin-left: 0;
}

.collection-filter-selected__item span {
    font-size: .7rem;
    margin-left: 8px;
    cursor: pointer;
}

.filter-sortby {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filter-sortby__heading {
    margin-right: 10px;
    margin-bottom: 0;
    font-size: .875rem;
    opacity: .5;
}

.filter-sortby__item {
    max-width: 235px;
}

.custom-select {
    height: 40px;
    position: relative;
    box-sizing: border-box;
}

.custom-select select {
    display: none;
}

.filter-sortby__item .custom-select .select-selected {
    height: 36px;
    width: 156px;
    line-height: 36px;
    border: none;
    background: #f1f1f1;
    border-radius: 1.8125rem;
}

.select-selected {
    position: relative;
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 1px solid #d9d9d9;
    color: #000;
    cursor: pointer;
    padding: 0 37px 0 17px;
    z-index: 2;
    border-radius: 16px;
    background-color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    background-image: url(https://www.coolmate.me/images/select.svg?f982d2d6ec9d2393538facf180ac5104);
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: 50%;
    transition: all .3s;
}

.select-hide {
    display: none;
}

.select-items {
    position: absolute;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    top: 100%;
    left: 0;
    right: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding-top: 20px;
    margin-top: -20px;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.select-items div,
.select-items label {
    color: #000;
    padding: 8px 16px;
    cursor: pointer;
    position: relative;
}
</style>