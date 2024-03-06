import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        allProducts: [],
        filteredType: null,
        activeIndex: -1,
        productCount: Number,
    }),
    getters: {

    },
    actions: {
        setAllProduct(products) {
            this.allProducts = products;
        },
        setFilteredType(type) {
            this.filteredType = type;
        },
        clearFilteredType() {
            this.filteredType = null; // Clear the currentProduct data
        },
        setActiveIndex(index) {
            this.activeIndex = index;
        },
        setProductCount(number) {
            this.productCount = number;
        },
    }
})