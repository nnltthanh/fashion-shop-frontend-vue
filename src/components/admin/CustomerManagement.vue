<template>
    <div class="customer-management">
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
                    <div v-if="isNotFoundCustomer"
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
                        <input v-model="selectedCustomer.id"
                            class="input-id w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div>
                    <div class="w-1/6 mr-2">
                        <label class="text-gray-700" for="id">
                            Tên tài khoản:
                        </label>
                        <input v-model="selectedCustomer.account"
                            class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                    </div>
                    <div class="w-1/6 mr-2">
                        <label class="text-gray-700" for="id">
                            Trạng thái
                        </label>
                        <div
                            class="input-container w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none focus:bg-white">
                            {{ selectedCustomer?.account == '' ? 'Chọn tk...' :
                        (selectedCustomer?.locked ? "Đã bị khoá" : "Hoạt động") }}</div>
                    </div>
                    <div class="w-2/6 mr-2 flex items-end">
                        <button @click="blockAndUnblock(selectedCustomer)"
                            class=" mr-2 bg-gradient-to-b from-green-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {{ selectedCustomer?.locked ? "Mở khoá" : "Khoá" }}
                        </button>
                        <button @click="searchCustomer"
                            class="mr-2 bg-gradient-to-b from-blue-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tìm
                            kiếm</button>
                    </div>
                    <div class="w-1/6 mr-2 flex justify-end">
                        <div class="flex items-end">Tổng số khách hàng: {{ customers?.length }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-2 relative overflow-x-auto custom-scrollbar" style="max-height: 500px;">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    class="fixed-header text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Tên tài khoản
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Tên khách hàng
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Trạng thái
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Số điện thoại
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Ngày sinh
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Địa chỉ
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, index) in customers" :key="index" @click="selectCustomer(customer)"
                        class="row-data border-b dark:bg-gray-800 cursor-pointer">
                        <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ customer.id ? customer.id :
                        "Chưa cập nhật" }}
                        </th>
                        <td class="px-4 py-4">
                            {{ customer.account ? customer.account :
                        "Chưa cập nhật" }}
                        </td>
                        <!-- <td class="px-6 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px"> -->
                        <td class="px-4 py-4">
                            {{ customer.name ? customer.name :
                        "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ customer.locked ? "Đã khoá" :
                        "Hoạt động" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ customer.phone ? customer.phone :
                        "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4">
                            {{ customer.email ? customer.email :
                        "Chưa cập nhật" }}
                        </td>
                        <!-- <td class="px-6 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px"> -->
                        <td class="px-4 py-4">
                            {{ customer.dob ? customer.dob :
                        "Chưa cập nhật" }}
                        </td>
                        <td class="px-4 py-4 overflow-x-auto custom-scrollbar-cell" style="max-width: 150px">
                            {{ customer.address ? customer.address :
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

interface Customer {
    id: string,
    account: string,
    password: string,
    name: string,
    phone: string,
    email: string,
    address: string,
    dob: string,
    locked: boolean,
}
const customers = ref<Customer[] | null>(null);
const selectedCustomer = ref<Customer>({ id: '', account: '', password: '', name: '', phone: '', email: '', address: '', dob: '', locked: false });

onBeforeMount(async () => {
    try {
        const response = await axios.get(`http://localhost:8080/customers`);
        customers.value = response.data;
        console.log(customers.value)
    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
    }
});

const isUpdatedOK = ref(false);
const blockAndUnblock = async (customer: Customer) => {
    try {
        let idToSearch = parseInt(selectedCustomer.value.id);
        console.log(idToSearch);
        if (isNaN(idToSearch)) {
            isNotEnteredID.value = true;
            setTimeout(() => {
                isNotEnteredID.value = false;
            }, 1500);
        }
        const response = await axios.put(`http://localhost:8080/customers/${customer.id}/updateLockedStatus`);
        if (response.status === 200) {
            let index = customers.value?.findIndex((a) => a.id === customer.id)
            customer.locked = !customer.locked;
            if (index != undefined && index >= 0) {
                customers.value?.splice(index, 1, customer)
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

const isNotEnteredID = ref(false);
const isNotFoundCustomer = ref(false);
const searchCustomer = () => {
    let idToSearch = parseInt(selectedCustomer.value.id);
    console.log(idToSearch);
    if (isNaN(idToSearch)) {
        isNotEnteredID.value = true;
        setTimeout(() => {
            isNotEnteredID.value = false;
        }, 1500);
    } else {
        const index = customers.value?.findIndex(customer => parseInt(customer.id) === idToSearch);
        if (index !== undefined && index !== -1) {
            const element = document.querySelectorAll('.row-data')[index];
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('found');
            setTimeout(() => {
                element.classList.remove('found');
            }, 5000);
        } else {
            isNotFoundCustomer.value = true;
            setTimeout(() => {
                isNotFoundCustomer.value = false;
            }, 1500);
        }
    }
};

const selectCustomer = (customer: Customer) => {
    selectedCustomer.value = { ...customer };
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