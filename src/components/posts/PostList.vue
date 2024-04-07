<script setup>
import { ref } from 'vue';
const seclectList_1 = [
    {
        label: "Thuật ngữ thời trang",
        isActive: false,
    },
    {
        label: "Phối đồ",
        isActive: false,
    },
    {
        label: "Thương hiệu thời trang",
        isActive: false,
    },
    {
        label: "Xu hướng - phong cách",
        isActive: false,
    },
    {
        label: "Mua gì ở đâu",
        isActive: false,
    },
];

const showSelectList_1 = ref(false);

const toggleSelectList_1 = () => {
    showSelectList_1.value = !showSelectList_1.value;
    console.log(seclectList_1);
}
</script>

<template>
    <section class="news-menu">
        <div class="large--visible">
            <div class="news-menu__container container--medium">
                <div class="menu-select">
                    <div class="menu-custom-select">
                        <div class="menu-select-selected" @click="toggleSelectList_1()" :class="showSelectList_1 ? 'is-active' : ''">
                            Mặc đẹp
                        </div>
                        <div class="menu-select-items" :class="showSelectList_1 ? 'd-block': 'd-none'">
                            <div v-for="(item, index) in seclectList_1" :key="index" class="menu-select-item">
                                {{ item.label }}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    transition: all .2s;
}

@media (min-width: 1440px) {
    .large--visible {
        display: block !important;
    }
}

.container--medium {
    max-width: 1280px;
}


.news-menu__container {
    margin: 0 auto;
    width: 100%;
}

.menu-select {
    display: flex;
    width: 651px;
    justify-content: space-between;
}

.menu-custom-select {
    position: relative;
}

.menu-select-selected {
    width: 200px;
    border-radius: 43px;
    background-color: #e8ebed;
    color: #000;
    padding: 10px 16px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    z-index: 5;
}

.menu-select-selected.is-active {
    background: #2f5acf;
    color: #fff;
}

.menu-select-selected:after {
    position: absolute;
    content: "";
    top: 15px;
    right: 15px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    background-image: url(https://www.coolmate.me/images/select.svg);
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: 50%;
    transition: all .3s;
}

.menu-select-items {
    position: absolute;
    z-index: 3;
    background: #f3f5f6;
    overflow: hidden;
    display: none;
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 12px;
}

.menu-select-items:after,
.menu-select-items:before {
    position: absolute;
    content: "";
    top: 47px;
    left: 0;
    overflow: visible;
    z-index: 3;
    height: 3px;
    border-right: 1px solid #c2cdd3;
}

.menu-select-item {
    padding: 10px 16px;
    position: relative;
    cursor: pointer;
}

.menu-select-item:hover {
    background: #dae0ef;
}
</style>