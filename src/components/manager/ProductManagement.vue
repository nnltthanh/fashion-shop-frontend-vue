<template>
    <ProductForm />
    <div class="customer-management m-3">
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
                        <input v-model="selectedProductDetail.id"
                            class="input-id w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div>
                    <div class="mr-2">
                        <label class="text-gray-700" for="id">
                            Tên sản phẩm:
                        </label>
                        <input v-model="selectedProductDetail.product.name"
                            class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div>
                    <div class="w-2/6 mr-2 flex items-end">
                        <button @click="searchProductDetail"
                            class="mr-2 bg-gradient-to-b from-blue-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tìm
                            kiếm
                        </button>
                        <button @click="searchProductDetail"
                            class="mr-2 bg-gradient-to-b from-green-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Thêm sản phẩm
                        </button>
                    </div>
                </div>
                <div class="flex items-end mt-2">Tổng số: {{ currentTotalProductDetail }}</div>
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
                        <th scope="col" class="px-4 py-3 w-1/10">
                            ID Sản phẩm
                        </th>
                        <th scope="col" class="px-4 py-3 w-1/6">
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
                        <th scope="col" class="px-4 py-3">
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
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in productDetails" :key="index" @click="selectProductDetail(item)"
                        class="row-data border-b dark:bg-gray-800 cursor-pointer">
                        <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item.id ? item.id :
                                "Chưa cập nhật" }}
                        </th>
                        <td class="px-4 py-4 w-1/10">
                            {{ item.product.id ? item.product.id :
                                "Chưa cập nhật" }}
                        </td>
                        <!-- <td class="px-6 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px"> -->
                        <td class="px-4 py-4 w-1/6">
                            {{ item.product.name ? item.product.name :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.product.price ? item.product.price :
                                "Chưa cập nhật" }}
                        </td>
                        <!-- <td class="px-4 py-4 w-1/12">
                            {{ item.product.cost ? item.product.cost :
                                "Chưa cập nhật" }}
                        </td> -->
                        <!-- <td class="px-6 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px"> -->
                        <td class="px-4 py-4 w-1/10">
                            {{ item.product.salePercent ? item.product.salePercent :
                                0 }}
                        </td>
                        <td class="px-4 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px">
                            {{ item.product.type ? item.product.type :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.product.material ? item.product.material :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductForm from '@/components/manager/ProductForm.vue';
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
interface ProductObject {
    id: number,
    name: String,
    price: number,
    cost: number,
    salePercent: number,
    type: String,
    material: String,
    imageData: {
        id: number,
        base64String: String,
        type: String
    },
    createdAt: Date,
    updatedAt: Date,
    sold: number,
}
interface ProductDetailObject {
    id: number,
    size: String,
    color: String,
    unit: String,
    quantity: number,
    product: ProductObject,
    imageLinks: string
}

const productDetails = ref<ProductDetailObject[] | null>(null);
const selectedProductDetail = ref<ProductDetailObject>({
    id: '',
    productId: '',
    name: '',
    price: '',
    cost: '',
    salePercent: '',
    type: '',
    material: '',
    size: '',
    color: '',
    unit: '',
    quantity: '',
    sold: '',
    product: '',
    imageLinks: ''
});

const currentTotalProductDetail = ref<number>(0);
onBeforeMount(async () => {
    try {
        const response = await axios.get(`http://localhost:8080/products/details`);
        productDetails.value = response.data;
        currentTotalProductDetail.value = productDetails.value?.length!;
        productDetails.value.forEach(detail => {
            const imageLinksArray = detail.imageLinks.split(", ");
            detail.imageLinks = imageLinksArray;
        })
    } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm', error);
    }
});
const isNotEnteredID = ref(false);
const isUpdatedOK = ref(false);
const blockAndUnblock = async (employee: Employee) => {
    try {
        let idToSearch = parseInt(selectedEmployee.value.id);
        console.log(idToSearch);
        if (isNaN(idToSearch)) {
            isNotEnteredID.value = true;
            setTimeout(() => {
                isNotEnteredID.value = false;
            }, 1500);
            return;
        }
        const response = await axios.put(`http://localhost:8080/users/${employee.id}/updateLockedStatus`);
        if (response.status === 200) {
            let index = employees.value?.findIndex((a) => a.id === employee.id)
            employee.locked = !employee.locked;
            if (index != undefined && index >= 0) {
                employees.value?.splice(index, 1, employee)
                isUpdatedOK.value = true;
                setTimeout(() => {
                    isUpdatedOK.value = false;
                }, 1500);
            } else {
                return;
            }
        } else {
            console.error('Error updating lock status');
        }
    } catch (error) {
        console.error('Error updating lock status:', error);
    }
};

const isNotFoundProductDetail = ref(false);
const searchProductDetail = () => {
    let idToSearch = parseInt(selectedProductDetail.value.id);
    console.log(idToSearch);
    if (isNaN(idToSearch)) {
        isNotEnteredID.value = true;
        setTimeout(() => {
            isNotEnteredID.value = false;
        }, 1500);
    } else {
        const index = productDetails.value?.findIndex(detail => parseInt(detail.id) === idToSearch);
        if (index !== undefined && index !== -1) {
            const element = document.querySelectorAll('.row-data')[index];
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('found');
            setTimeout(() => {
                element.classList.remove('found');
            }, 4000);
        } else {
            isNotFoundProductDetail.value = true;
            setTimeout(() => {
                isNotFoundProductDetail.value = false;
            }, 1500);
        }
    }
};

const selectProductDetail = (detail: ProductDetailObject) => {
    selectedProductDetail.value = { ...detail };
};

// const selectedUserType = ref<string>('all');

// const filterEmployeesByUserType = () => {
//     currentTotalAccount.value = employees.value?.length!;
//     const table = document.getElementById("table-data");
//     const tr = table?.getElementsByTagName("tr");
//     let tdContent;
//     let temp = 0;
//     if (tr !== undefined) {
//         for (let i = 0; i < tr?.length; i++) {
//             const td = tr[i].getElementsByTagName("td")[2];
//             if (td) {
//                 tdContent = td.textContent?.trim();
//                 // console.log(tdContent);
//                 if (tdContent !== selectedUserType.value && selectedUserType.value !== 'all' && tr != undefined) {
//                     // --currentTotalAccount;
//                     tr[i].style.display = "none";
//                     temp++;
//                 } else {
//                     tr[i].style.display = "";
//                 }
//             }
//         }
//         currentTotalAccount.value = employees.value?.length! - temp;
//         console.log(currentTotalAccount.value);
//     }
// };
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