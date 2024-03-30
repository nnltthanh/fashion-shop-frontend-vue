import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        allProducts: [],
        searchResults: [],
        filterList: {},
        filteredType: null,
        activeIndex: -1,
        productCount: Number,
        searchText: String,
    }),
    getters: {

    },
    actions: {
        setAllProduct(products) {
            this.allProducts = products;
        },
        setFilterList(filters) {
            this.filterList = filters;
        },
        setFilteredType(type) {
            this.filteredType = type;
        },
        clearFilteredType() {
            this.filteredType = null; // Clear the currentProduct data
        },
        setSearchText(text) {
            this.searchText = text;
        },
        setSearchResults(results) {
            this.searchResults = results;
        },
        setActiveIndex(index) {
            this.activeIndex = index;
        },
        setProductCount(number) {
            this.productCount = number;
        },
    }
})