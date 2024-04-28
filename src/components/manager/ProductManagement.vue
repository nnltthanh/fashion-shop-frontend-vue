<template>
    <ProductAddForm @add-product-done="retriveProducts"/>
    <ProductUpdateForm @update-product="retriveProducts" :product-for-updating="selectedProduct"/>
    <ProductDetails @add-detail-done="showDetails" @update-detail-done="showDetails" @reset-details="reloadDetails" :product-details="productDetails" :product-id="selectedProduct.id"/>
    <div class="product-management m-3">
        <div class="w-full">
            <div class="w-full">
                <!-- Các thông báo -->
                <div class="alerts">
                    <div v-if="isUpdatedOK"
                        class="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-700 p-6 text-center text-lg z-50 rounded-md"
                        role="alert">
                        <span class="font-medium">Cập nhật thành công!!!</span>
                    </div>
                    <div v-if="isNotEnteredID"
                        class="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-700 p-6 text-center text-lg z-50 rounded-md"
                        role="alert">
                        <span class="font-medium">Chưa nhập ID!!!</span>
                    </div>
                    <div v-if="isNotFoundEmployee"
                        class="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-700 p-6 text-center text-lg z-50 rounded-md"
                        role="alert">
                        <span class="font-medium">Không tìm thấy khách hàng!!!</span>
                    </div>
                </div>
                <!-- Tìm kiếm và Khoá/Mở Khoá tài khoản khách hàng -->
                <div class="w-full flex">
                    <div class="w-1/6 mr-2">
                        <label class="text-gray-700" for="id">
                            ID:
                        </label>
                        <input v-model="selectedProduct.id"
                            class="input-id w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div>
                    <!-- <div class="mr-2">
                        <label class="text-gray-700" for="id">
                            Tên sản phẩm:
                        </label>
                        <input v-model="selectedProduct.name"
                            class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div> -->
                    <div class="mr-2 flex items-end">
                        <!-- <button @click=""
                            class="mr-2 bg-gradient-to-b from-blue-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tìm
                            kiếm
                        </button> -->
                        <button @click="showDetails"
                            class="mr-2 bg-gradient-to-b from-gray-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Xem chi tiết
                        </button>
                        <button @click="activeAddForm"
                            class="mr-2 bg-gradient-to-b from-green-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Thêm sản phẩm
                        </button>
                        <button @click="activeUpdateForm"
                            class="mr-2 bg-gradient-to-b from-blue-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Cập nhật sản phẩm
                        </button>
                        <button @click="deteleProduct"
                            class="mr-2 bg-gradient-to-b from-red-500 to-pink-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Xóa sản phẩm
                        </button>
                    </div>
                </div>
                <div class="flex items-end mt-2">Tổng số: {{ currentTotalProduct }}</div>
            </div>
        </div>
        <div class="relative overflow-x-auto custom-scrollbar" style="max-height: 500px;">
            <table id="table-data" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    class="fixed-header font-sans text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            ID
                        </th>
                        <!-- <th scope="col" class="px-4 py-3 w-1/10">
                            ID Sản phẩm
                        </th> -->
                        <th scope="col" class="px-4 py-3">
                            Tên sản phẩm
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Giá
                        </th>
                        <!-- <th scope="col" class="px-4 py-3 w-1/12">
                            Giá gốc
                        </th> -->
                        <th scope="col" class="px-4 py-3 w-1/10">
                            Giảm giá (%)
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Loại
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Chất liệu
                        </th>
                        <!-- <th scope="col" class="px-4 py-3">
                            Màu
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Kích cỡ
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Hiện có
                        </th>
                        <th scope="col" class="7px-4 py-3">
                            Đã bán
                        </th>
                        <th scope="col" class="px-4 py-3 text-center">
                            Ảnh
                        </th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in products" :key="index" @click="selectProduct(item)"
                        class="row-data border-b dark:bg-gray-800 cursor-pointer">
                        <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item.id ? item.id :
        "Chưa cập nhật" }}
                        </th>
                        <!-- <td class="px-4 py-4 w-1/10">
                            {{ item.product.id ? item.product.id :
                                "Chưa cập nhật" }}
                        </td> -->
                        <!-- <td class="px-6 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px"> -->
                        <td class="px-4 py-4">
                            {{ item.name ? item.name :
        "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.price ? item.price :
        "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4 w-1/10">
                            {{ item.salePercent ? item.salePercent :
        0 }}
                        </td>
                        <td class="px-4 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px">
                            {{ item.type ? item.type :
                            "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.material ? item.material :
                            "Chưa cập nhật" }}
                        </td>
                        <!-- <td class="px-4 py-4">
                            {{ item.color ? item.color :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.size ? item.size :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.quantity ? item.quantity :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.sold ? item.sold :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            <img :src="item.imageLinks[0] ? item.imageLinks[0] :
                                'Chưa cập nhật'" alt="">
                        </td> -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductAddForm from '@/components/manager/ProductAddForm.vue';
import ProductUpdateForm from '@/components/manager/ProductUpdateForm.vue';
import ProductDetails from '@/components/manager/ProductDetails.vue';
import { ref, onBeforeMount } from 'vue';
import { useProductStore } from '@/stores/productStore';
import axios from 'axios';

const productStore = useProductStore();

interface ProductObject {
    id: number,
    name: String,
    price: number,
    salePercent: number,
    type: String,
    material: String,
    // sold: number,
}
interface ProductDetailObject {
    id: number,
    color: String,
    size: String,
    quantity: number,
    imageLinks: string
}

const products = ref<ProductObject[] | null>(null);
const productDetails = ref<ProductDetailObject[] | null>(null);
const selectedProduct = ref<ProductObject>({
    id: 0,
    name: '',
    price: 0,
    salePercent: 0,
    type: '',
    material: '',
});

const currentTotalProduct = ref<number>(0);

const retriveProducts = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/products`);
        products.value = response.data;
        currentTotalProduct.value = products.value?.length!;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm', error);
    }
}

onBeforeMount(async () => {
    retriveProducts();
});
const isNotEnteredID = ref(false);
const isUpdatedOK = ref(false);
// const blockAndUnblock = async (employee: Employee) => {
//     try {
//         let idToSearch = parseInt(selectedEmployee.value.id);
//         console.log(idToSearch);
//         if (isNaN(idToSearch)) {
//             isNotEnteredID.value = true;
//             setTimeout(() => {
//                 isNotEnteredID.value = false;
//             }, 1500);
//             return;
//         }
//         const response = await axios.put(`http://localhost:8080/users/${employee.id}/updateLockedStatus`);
//         if (response.status === 200) {
//             let index = employees.value?.findIndex((a) => a.id === employee.id)
//             employee.locked = !employee.locked;
//             if (index != undefined && index >= 0) {
//                 employees.value?.splice(index, 1, employee)
//                 isUpdatedOK.value = true;
//                 setTimeout(() => {
//                     isUpdatedOK.value = false;
//                 }, 1500);
//             } else {
//                 return;
//             }
//         } else {
//             console.error('Error updating lock status');
//         }
//     } catch (error) {
//         console.error('Error updating lock status:', error);
//     }
// };

const isNotFoundProductDetail = ref(false);
// const" = () => {
//     let idToSearch = parseInt(selectedProduct.value.id);
//     console.log(idToSearch);
//     if (isNaN(idToSearch)) {
//         isNotEnteredID.value = true;
//         setTimeout(() => {
//             isNotEnteredID.value = false;
//         }, 1500);
//     } else {
//         const index = productDetails.value?.findIndex(detail => parseInt(detail.id) === idToSearch);
//         if (index !== undefined && index !== -1) {
//             const element = document.querySelectorAll('.row-data')[index];
//             element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//             element.classList.add('found');
//             setTimeout(() => {
//                 element.classList.remove('found');
//             }, 4000);
//         } else {
//             isNotFoundProductDetail.value = true;
//             setTimeout(() => {
//                 isNotFoundProductDetail.value = false;
//             }, 1500);
//         }
//     }
// };

const selectProduct = (product: ProductObject) => {
    selectedProduct.value = { ...product };
};

const activeAddForm = () => {
    productStore.setIsShowAddFormClick(true);
}

const activeUpdateForm = () => {
    if (selectedProduct.value.id > 0)
        productStore.setIsShowUpdateFormClick(true);
}
const showDetails = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/products/${selectedProduct.value.id}/details`);
        productDetails.value = response.data;
        productDetails.value.forEach(detail => {
            const imageLinksArray = detail.imageLinks.split(", ");
            detail.imageLinks = imageLinksArray;
        })
    } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm', error);
    }
    productStore.setIsShowDetails(true);
}

const reloadDetails = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/products/${selectedProduct.value.id}/details`);
        productDetails.value = response.data;
        productDetails.value.forEach(detail => {
            const imageLinksArray = detail.imageLinks.split(", ");
            detail.imageLinks = imageLinksArray;
        })
    } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm', error);
    }
}

const deteleProduct = async () => {
    try {
        const response = await axios.delete(`http://localhost:8080/products/${selectedProduct.value.id}`);
        Object.keys(selectedProduct).forEach((i) => selectedProduct[i] = null);
        retriveProducts();
        return response;
    } catch (error) {
        console.error('Lỗi khi xóa sản phẩm', error);
    }
}

</script>
<style scoped>
.w-1\/8 {
    width: 12.5%;
}

.w-1\/10 {
    width: 10%;
}

.w-1\/12 {
    width: 8.33%;
}

.fixed-header {
    position: sticky;
    top: 0;
    z-index: 1;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}

.row-data:hover {
    background-color: rgb(237, 239, 238) !important;
}

.row-data.font-bold {
    border: 2px solid blue;
}

.found {
    background-color: rgb(196, 199, 199);
}
</style>