<template>
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
                        <input v-model="selectedEmployee.id"
                            class="input-id w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div>
                    <div class="w-1/6 mr-2">
                        <label class="text-gray-700" for="id">
                            Tên tài khoản:
                        </label>
                        <input v-model="selectedEmployee.account"
                            class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div>
                    <div class="w-1/6 mr-2">
                        <label class="text-gray-700" for="id">
                            Trạng thái
                        </label>
                        <div
                            class="input-container w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none focus:bg-white">
                            {{ selectedEmployee?.account == '' ? 'Chọn tk...' :
                                (selectedEmployee?.locked ? "Đã bị khoá" : "Hoạt động") }}</div>
                    </div>
                    <div class="w-2/6 mr-2 flex items-end">
                        <button @click="blockAndUnblock(selectedEmployee)"
                            class=" mr-2 bg-gradient-to-b from-green-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {{ selectedEmployee?.locked ? "Mở khoá" : "Khoá" }}
                        </button>
                        <button @click="searchEmployee"
                            class="mr-2 bg-gradient-to-b from-blue-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tìm
                            kiếm</button>
                    </div>
                    <!-- <div class="filter-employee w-1/6 mr-2">
                        <label for="userType" class="text-gray-700">Chức vụ:</label>
                        <select v-model="selectedUserType" @change="filterEmployeesByUserType" id="userType"
                            class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                            <option value="all">Tất cả</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="senior_manager">Senior Manager</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div> -->
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
                        <th scope="col" class="px-4 py-3">
                            ID Sản phẩm
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Tên sản phẩm
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Giá bán
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Giá gốc
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Giảm giá (%)
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Loại
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Chất liệu
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Kích cỡ
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Màu
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Hiện có
                        </th>
                        <th scope="col" class="7px-4 py-3">
                            Đã bán
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Ảnh
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in productDetails" :key="index" @click="selectEmployee(employee)"
                        class="row-data border-b dark:bg-gray-800 cursor-pointer">
                        <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item.id ? item.id :
                                "Chưa cập nhật" }}
                        </th>
                        <td class="px-4 py-4">
                            {{ item.product.id ? item.product.id :
                                "Chưa cập nhật" }}
                        </td>
                        <!-- <td class="px-6 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px"> -->
                        <td class="px-4 py-4">
                            {{ item.product.name ? item.product.name :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.locked ? "Đã khoá" :
                                "Hoạt động" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.phone ? item.phone :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.email ? item.email :
                                "Chưa cập nhật" }}
                        </td>
                        <!-- <td class="px-6 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px"> -->
                        <td class="px-4 py-4">
                            {{ item.dob ? item.dob :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px">
                            {{ item.address ? item.address :
                                "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ item.userType ? item.userType :
                                "Chưa cập nhật" }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export type ProductObject = {
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

export type ProductDetailObject = {
  id: number,
  size: String,
  color: String,
  unit: String,
  quantity: number,
  product: ProductObject,
  imageLinks: string
}

const productDetails = ref<ProductDetailObject[] | null>(null);
// const selectedProductDetail = ref<ProductDetailObject>({
//     id: '',
//     productId: '',
//     name: '',
//     price: '',
//     cost: '',
//     salePercent: '',
//     type: '',
//     material: '',
//     size: '',
//     color: '',
//     unit: '',
//     quantity: '',
//     sold: '',
//     product: '',
//     imageLinks: ''
// });

const currentTotalProductDetail = ref<number>(0);
onBeforeMount(async () => {
    try {
        const response = await axios.get(`http://localhost:8080/products/details`);
        productDetails.value = response.data;
        currentTotalProductDetail.value = productDetails.value?.length!;
        console.log(productDetails.value);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm', error);
    }
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

// const isNotFoundEmployee = ref(false);
// const searchEmployee = () => {
//     let idToSearch = parseInt(selectedEmployee.value.id);
//     console.log(idToSearch);
//     if (isNaN(idToSearch)) {
//         isNotEnteredID.value = true;
//         setTimeout(() => {
//             isNotEnteredID.value = false;
//         }, 1500);
//     } else {
//         const index = employees.value?.findIndex(employee => parseInt(employee.id) === idToSearch);
//         if (index !== undefined && index !== -1) {
//             const element = document.querySelectorAll('.row-data')[index];
//             element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//             element.classList.add('found');
//             setTimeout(() => {
//                 element.classList.remove('found');
//             }, 4000);
//         } else {
//             isNotFoundEmployee.value = true;
//             setTimeout(() => {
//                 isNotFoundEmployee.value = false;
//             }, 1500);
//         }
//     }
// };

const selectEmployee = (employee: Employee) => {
    selectedEmployee.value = { ...employee };
};

const selectedUserType = ref<string>('all');

const filterEmployeesByUserType = () => {
    currentTotalAccount.value = employees.value?.length!;
    const table = document.getElementById("table-data");
    const tr = table?.getElementsByTagName("tr");
    let tdContent;
    let temp = 0;
    if (tr !== undefined) {
        for (let i = 0; i < tr?.length; i++) {
            const td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                tdContent = td.textContent?.trim();
                // console.log(tdContent);
                if (tdContent !== selectedUserType.value && selectedUserType.value !== 'all' && tr != undefined) {
                    // --currentTotalAccount;
                    tr[i].style.display = "none";
                    temp++;
                } else {
                    tr[i].style.display = "";
                }
            }
        }
        currentTotalAccount.value = employees.value?.length! - temp;
        console.log(currentTotalAccount.value);
    }
};
</script>
<style scoped>
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