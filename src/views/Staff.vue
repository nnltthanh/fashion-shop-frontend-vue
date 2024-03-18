<template>
    <div class="all flex">
        <div class="sidebar flex">
            <div
                class=" bg-blue-600 sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gradient-to-b from-blue-800 to-blue-300">
                <div class="text-gray-100 text-xl">
                    <div class="p-2.5 mt-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <h1 class="font-bold text-gray-200 text-[18px] ml-1 mr-3 w-44 text-left">Tên nhân viên abc...
                        </h1>

                        <div class="zoomOutIn">
                            mũi tên thu nhỏ
                        </div>
                    </div>
                    <div class="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                <div
                    class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i class="bi bi-house-door-fill"></i>
                    <span class="text-[15px] ml-4 text-gray-200 font-bold">Phản hồi đánh giá</span>
                </div>
                <div
                    class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i class="bi bi-bookmark-fill"></i>
                    <span class="text-[15px] ml-4 text-gray-200 font-bold">Chat với khách hàng</span>
                </div>
                <!-- <div class="my-4 bg-gray-600 h-[1px]"></div> -->
                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    @click="clickOrderManagement('order')">
                    <i class="bi bi-house-door-fill"></i>
                    <span class="text-[15px] ml-4 text-gray-200 font-bold">Quản lý đơn hàng</span>
                </div>
                <transition name="fade">
                    <div v-if="showOrderDropdown">
                        <!-- Sub-functions under "Đơn hàng" -->
                        <div
                            class="p-2.5 mt-3 flex items-center  ml-5 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                            <i class="bi bi-house-door-fill"></i>
                            <span class="text-[15px] ml-4 text-gray-200 font-bold">Xử lý đơn hàng</span>
                        </div>
                    </div>
                </transition>
                <div class="mt-10 bg-gray-600 h-[1px]"></div>

                <div
                    class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <span class="text-[15px] ml-4 text-gray-200 font-bold">Đăng xuất</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-box-arrow-right ml-3" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                        <path fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="content flex-1 ml-[300px] overflow-y-auto">
            <OrderTable />
        </div>

    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import OrderTable from '@/components/staff/OrderTable.vue';

const showOrderDropdown = ref(false);

const clickOrderManagement = (section) => {
    if (section === 'order') {
        showOrderDropdown.value = !showOrderDropdown.value;
    }

};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<style scoped>
/* Add your component-specific styles here */
</style>