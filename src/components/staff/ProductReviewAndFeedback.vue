<template>
    <div class="flex flex-col mb-3">
        <div class="overflow-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 mb-2">
                <!-- Các thông báo -->
                <!-- <div class="alerts">
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
                    <div v-if="isNotFoundOrder"
                        class="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-700 p-6 text-center text-lg z-50 rounded-md"
                        role="alert">
                        <span class="font-medium">Không tìm thấy đơn hàng!!!</span>
                    </div>
                    <div v-if="isFoundOrder"
                        class="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-700 p-6 text-center text-lg z-50 rounded-md"
                        role="alert">
                        <span class="font-medium">Đã tìm thấy đơn hàng!!!</span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="w-1/6 mr-2 flex items-end">Tổng số đơn hàng: {{ currentTotalOrder }}
                    </div>
                    <div class="flex w-1/3">
                        <div class="filter-employee mr-2">
                            <label for="userType" class="text-gray-700">Trạng thái</label>
                            <select v-model="selectedStatus" @change="filterStatus" id="status"
                                class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                                <option value="all">Tất cả</option>
                                <option value="CREATING">Creating</option>
                                <option value="PROCESSING">Processing</option>
                                <option value="SHIPPED">Shipped</option>
                                <option value="DELIVERED">Delivered</option>
                                <option value="CANCELLED">Cancelled</option>
                                <option value="REFUNDED">Refunded</option>
                                <option value="ON_HOLD">On hold</option>
                            </select>
                        </div>
                        <div v-if="selectedStatus === 'PROCESSING'" class="flex items-end"><button @click="PrintOrder()"
                                class="mr-2 bg-gradient-to-b from-green-500 to-sky-300 text-white font-bold py-2 px-4 rounded">
                                In đơn hàng
                            </button></div>
                    </div> -->
                <!-- Tìm đơn hàng bằng ID -->
                <!-- <div v-if="selectedStatus === 'all' || selectedStatus === 'CREATING' || selectedStatus === 'DELIVERED'"
                        class="w-1/2 flex items-end justify-end ">
                        <div class="w-1/4 mr-2">
                            <label class="text-gray-700" for="id">
                                Mã đơn hàng:
                            </label>
                            <input v-model="selectedOrder.id"
                                class="input-id w-full  bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                        </div>
                        <div class="search-order w-1/3 mr-2">
                            <button @click="searchOrder"
                                class="button-print-order mr-2 bg-gradient-to-b from-blue-500 to-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tìm
                                đơn hàng</button>
                        </div>
                    </div> -->
                <!-- Cập nhật đơn hàng -->
                <!-- <div v-else class="w-1/2 flex items-end justify-end">
                        <div class="w-1/4 mr-2">
                            <label>Mã đơn hàng</label>
                            <input v-model="selectedOrder.id"
                                class="input-id w-full pl-2 bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                        </div>
                        <div class="w-1/4 mr-2"><label>Mã n/viên xử lý</label>
                            <select v-model="selectedOrder.staff.id"
                                class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                                <option v-for="staff in staffs" :key="staff.id" :value="staff.id">{{ staff.id }}
                                </option>
                            </select>
                        </div>
                        <div class="w-1/4 mr-2"><label for="status">Trạng thái</label>
                            <select v-model="selectedOrder.status"
                                class="w-full bg-gray-200 text-gray-800 py-2 px-3 rounded-md focus:outline-none">
                                <option value="PROCESSING">Processing</option>
                                <option value="SHIPPED">Shipped</option>
                                <option value="CANCELLED">Cancelled</option>
                                <option value="REFUNDED">Refunded</option>
                                <option value="ON_HOLD">On hold</option>
                            </select>
                        </div>
                        <div class="w-1/4 mr-2"><button @click="updateOrder(selectedOrder)"
                                class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Cập nhật</button></div>
                    </div>
                </div> -->
                <div class="border-b-2 mt-1 border-neutral-200 dark:border-white/10"></div>
                <div class="custom-scrollbar mt-1 relative overflow-x-auto mb-2 shadow-md" style="max-height: 580px;">
                    <table id="table-data" class="w-full text-sm text-left rtl:text-right">
                        <thead
                            class="fixed-header text-center text-gray-700 dark:bg-gray-700 dark:text-gray-400 border-neutral-200 dark:border-white/10">
                            <tr class="bg-gray-300">
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-3 py-3">
                                    Ngày đánh giá
                                </th>
                                <!-- <th scope="col" class="px-6 py-3">
                                    Mã đơn hàng
                                </th> -->
                                <th scope="col" class="px-6 py-3">
                                    Chi tiết (Mã chi tiết sp/ Số lượng)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nội dung đánh giá
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Mức độ hài lòng
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nhân viên xử lý
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phản hồi
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <!-- <tr v-for="(order, index) in orders" :key="index" @click="selectOder(order)"
                                class="row-data hover:bg-gray-200 border-b mt-2 border-neutral-200 dark:border-white/10"> -->
                            <tr v-for="(review, index) in reviews" :key="index"
                                class="row-data hover:bg-gray-200 border-b mt-2 border-neutral-200 dark:border-white/10">
                                <td class="px-6 py-4">{{ review.id !== undefined ? review.id :
                                "Chưa cập nhật" }}</td>
                                <td class="px-6 py-4">{{ review.createDate !== undefined ? review.createDate :
                                "Chưa cập nhật" }}</td>

                                <td class="px-6 py-4">
                                    Mã chi tiết sp: {{ review.orderDetail.productDetail.id }}
                                    Số lượng: {{ review.orderDetail.quantity }}
                                </td>
                                <td class="px-6 py-4">{{ review.content || '' }}</td>
                                <td class="px-6 py-4">{{ review.rate || '' }}</td>
                                <td class="px-6 py-4">{{ "Chưa cập nhật" }}</td>
                                <td type="button" data-bs-toggle="modal" class="px-6 py-4"
                                :data-bs-target="`#review-${review.id}`" @click="highlightStars(review)">{{ "Chưa cập nhật" }}</td>
                                <!-- <button type="button" class="btn btn--outline" data-bs-toggle="modal"
                                    :data-bs-target="`#review-${review.id}`" @click="getReviewById(review.id)">
                                </button> -->
                                <!-- Modal -->
                                <div class="modal fade" style="text-align: left !important" :id="`review-${review.id}`" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" data-bs-backdrop="false" data-bs-focus="true"
                                    aria-hidden="false">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="modal-title h4" id="exampleModalLabel">Đánh giá đơn hàng

                                                </div>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="order-item">
                                                    <div class="order-item-thumbnail">
                                                        <router-link
                                                            :to="{ name: 'product', params: { id: review.orderDetail.productDetail.product.id.toString() } }">
                                                            <img :src="review.orderDetail.productDetail.imageLinks?.split(', ')[0]
                                .toString().replace('width=80,height=80', 'width=300,height=442')"
                                                                :alt="review.orderDetail.productDetail.product.name.toString()"
                                                                style="height: 150px; width: 100px;" />
                                                        </router-link>

                                                    </div>
                                                    <div class="order-item-info">
                                                        <router-link
                                                            :to="{ name: 'product', params: { id: review.orderDetail.productDetail.product.id.toString() } }"
                                                            class="order-item-title">
                                                            {{ review.orderDetail.productDetail.product.name }}
                                                        </router-link>

                                                        <div class="order-item-variant-label">{{
                                review.orderDetail.productDetail.color }} /
                                                            {{ review.orderDetail.productDetail.size }}</div>
                                                        <!-- <div class="order-item-price"> {{ VND.format(review.orderDetail.total) }}</div> -->
                                                        <div class="reviews-rating">
                  <div :class="['reviews-rating-star', review.rate >= 1 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate >= 2 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate >= 3 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate >= 4 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate == 5 ? 'is-active' : '']"></div>

                </div>
                                                        <div class="grid">
                                                            <div class="upload__box">

                                                                <div class="upload__img-wrap">
                                                                    <div v-for="image in review.imageUrls?.split(',')"
                                                                        class="upload__img-box">
                                                                        <div class="img-bg"
                                                                            :style="{ backgroundImage: 'url('+image+')' }">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="grid-column d-flex align-items-end flex-column">
                                                                <textarea :class="[
                                'form-control', `item-${index}`,
                            ]" style="
                                            overflow-y: hidden;
                                            resize: vertical;
                                            min-height: 40px; 
                                            height: auto;" :readonly="true"> {{ review.content }}
                                        </textarea>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Trở
                                                    lại</button>
                                                <!-- <button type="button" class="btn btn-primary btn-save">Lưu</button> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ReviewService } from '@/services/review.service';
import { onMounted, ref } from 'vue';
import type { ProductObject } from '../cart/cart-item/DefaultCartItem.vue';
import type { Review } from '../profile/account-content/OrderCard.vue';

const reviewService = new ReviewService();
let reviews = ref<Review[]>([]);

interface Order {
    id: string,
    createDate: string,
    status: string,
    total: string,
    couponId: string,
    customer: Customer,
    paymentId: string;
    shipmentId: string;
    staff: Staff;
    warehouseId: string;
    orderDetails: OrderDetail[];
    phone: string;
}

interface Customer {
    id: string;
}

export interface OrderDetail {
    id: string;
    productDetail: ProductDetail;
    quantity: string,
    total: number
}
interface ProductDetail {
    id: string;
    quantity: string,
    imageLinks: string,
    product: ProductObject,
    color: string,
    size: string
}

interface Staff {
    id: string;
}

const orders = ref<Order[]>();
const staffs = ref<Staff[]>();
const apiUrl = 'http://localhost:8080';

const reply = () => {

}

const customerReview = ref<string>('');
const customerRate = ref<number>(0);

const highlightStars = (review) => {
    for (let i = 1; i <= review.rate; i++) {
        const star = document.querySelector(`.reviews-rating-star.review-${review.id}`);
        star!.classList.add('is-full');
    }
}

const getReviewById = async (id) => {

    customerReview.value = '';
    let review = reviews.value.find(r => r.id == id);

    customerRate.value = review!.rate;
    customerReview.value = review!.content;
    highlightStars(review!);


}

// const fetchOrderData = async () => {
//     try {
//         const response = await axios.get(`${apiUrl}/OrderForEmployee`);
//         const responseStaff = await axios.get(`${apiUrl}/staffs`);
//         staffs.value = responseStaff.data;
//         orders.value = response.data;
//         currentTotalOrder.value = orders.value?.length!;
//         if (orders.value) {
//             orders.value.forEach(async (order) => {
//                 order.createDate = formatDate(order.createDate);
//                 try {
//                     const orderDetailsResponse = await axios.get(`${apiUrl}/OrderForEmployee/${order.id}/details`);
//                     order.orderDetails = orderDetailsResponse.data;
//                 } catch (error) {
//                     console.error(`Error fetching order details for order ${order.id}:`, error);
//                 }
//             });
//         }
//     } catch (error) {
//         console.error('Error fetching store data:', error);
//     }
// };

// function formatDate(dateString) {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
//     const year = date.getFullYear();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
//     return formattedDate;
// }

onMounted(async () => {
    // fetchOrderData();
    reviews.value = (await reviewService.getAllReviews()).data;
});

const currentTotalOrder = ref<number>(0);
const selectedStatus = ref<string>('all');
const showPrintOrder = ref(false);
const filterStatus = () => {
    currentTotalOrder.value = orders.value?.length!;
    const table = document.getElementById("table-data");
    const tr = table?.getElementsByTagName("tr");
    let tdContent;
    let temp = 0;
    if (tr !== undefined) {
        for (let i = 0; i < tr?.length; i++) {
            const td = tr[i].getElementsByTagName("td")[6];
            if (td) {
                tdContent = td.textContent?.trim();
                if (tdContent !== selectedStatus.value && selectedStatus.value !== 'all' && tr != undefined) {
                    tr[i].style.display = "none";
                    temp++;
                } else {
                    tr[i].style.display = "";
                }
            }
        }
        currentTotalOrder.value = orders.value?.length! - temp;
        if (selectedStatus.value === "PROCESSING") {
            showPrintOrder.value = true;
        } else {
            showPrintOrder.value = false;
        }
    }
};

const PrintOrder = () => {
}

const selectedOrder = ref<Order>({
    id: '',
    createDate: '',
    status: '',
    total: '',
    couponId: '',
    customer: {
        id: '',
    },
    paymentId: '',
    shipmentId: '',
    staff: {
        id: '',
    },
    warehouseId: '',
    orderDetails: [],
    phone: '',
});
const isNotEnteredID = ref(false);
const isNotFoundOrder = ref(false);
const isFoundOrder = ref(false);
// const searchOrder = () => {
//     let idToSearch = parseInt(selectedOrder.value.id);
//     console.log(idToSearch);
//     if (isNaN(idToSearch)) {
//         isNotEnteredID.value = true;
//         setTimeout(() => {
//             isNotEnteredID.value = false;
//         }, 1500);
//     } else {
//         const index = orders.value?.findIndex(order => parseInt(order.id) === idToSearch);
//         if (index !== undefined && index !== -1) {
//             const element = document.querySelectorAll('.row-data')[index];
//             element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//             element.classList.add('found');
//             setTimeout(() => {
//                 element.classList.remove('found');
//             }, 4000);
//             isFoundOrder.value = true;
//             setTimeout(() => {
//                 isFoundOrder.value = false;
//             }, 1500);
//         } else {
//             isNotFoundOrder.value = true;
//             setTimeout(() => {
//                 isNotFoundOrder.value = false;
//             }, 1500);
//         }
//     }
// }

// const selectOder = (order: Order) => {
//     selectedOrder.value = { ...order };
//     selectedOrder.value = { ...order };
//     if (selectedOrder.value.staff === null) {
//         selectedOrder.value.staff = { id: 'non-data' };
//     }
//     console.log(selectedOrder.value.staff);
// };
// const isUpdatedOK = ref(false);
// const updateOrder = async (orderToUpdate) => {
//     try {
//         const customerId = orderToUpdate.customer.id;
//         const orderId = orderToUpdate.id;
//         const response = await axios.put(`http://localhost:8080/customers/${customerId}/orders/${orderId}`, orderToUpdate);
//         if (response.status === 200) {
//             isUpdatedOK.value = true;
//             setTimeout(() => {
//                 filterStatus();
//                 isUpdatedOK.value = false;
//             }, 1500);
//             fetchOrderData();
//         } else {
//             console.error('Cập nhật đơn hàng không thành công.');
//         }
//     } catch (error) {
//         console.error('Lỗi khi cập nhật đơn hàng:', error);
//     }
// };
</script>

<style scoped>
.fixed-header {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
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

.found {
    background-color: rgb(196, 199, 199);
}
.order {
    position: relative;
    display: block;
}

.order-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: #2f5acf;
    border-radius: 0.5rem;
    padding: 10px 30px;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
}

.order-header .order-title {
    font-weight: bold;
    font-size: 1.1rem;
}

.order-title,
.order-date {
    margin: 0px;
}

.order-header .order-date {
    font-size: 0.8rem;
}

.order-status-wait {
    display: flex;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    background-color: #f2fd5d;
    border-radius: 47px;
    color: #000;
}

.order-status-done {
    display: flex;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    background-color: #57e37f;
    border-radius: 47px;
    color: #000;
}

.order-body {
    border: 1px solid #d9d9d9;
    background-color: rgb(232, 232, 232);
    margin-top: -16px;
    position: relative;
    z-index: 1;
    padding-top: 16px;
}

.order-item:not(:last-child) {
    border-bottom: 1px solid #d9d9d9;
}

.order-item {
    padding: 1rem 30px;
    display: flex;
    width: 100%;
    position: relative;
}

.order-item-thumbnail {
    position: relative;
    width: 100px;
    margin-right: 1rem;
}

.order-item-thumbnail::before {
    content: "";
    display: block;
    padding-top: 111.7647058824%;
    height: 0;
    width: 100%;
}

.order-item-thumbnail img {
    border-radius: 8px;
}

.order-item-thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.order-item-info {
    flex: 1;
}

.order-item-title,
.order-item-price {
    font-weight: 600;
}

.order-item-variant-label,
.order-item-quantity {
    color: rgba(0, 0, 0, 0.6);
}

.order-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #d9d9d9;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.5rem 30px 0.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
}

.order-footer-left {
    display: flex;
}

.btn {
    height: auto;
    padding: 0.5rem 2rem;
    border-radius: 100vmax;
    line-height: 1.5;
    box-sizing: border-box;
    font-family: "CriteriaCF", "Pangea", sans-serif;
    margin-right: 10px;
    border: 2px solid #000;
    cursor: pointer;
}

.btn--outline {
    background-color: transparent;
    color: #000;
}

.btn--outline:hover {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
}

.order-footer-right {
    text-align: right;
}

.modal {
    --bs-modal-width: 700px;
    --bs-modal-zindex: 1071;
}

.modal-body {
    padding: 0px !important;
}

.modal-dialog-scrollable .modal-content {
    max-height: 500px;
    overflow: hidden;
}

.grid {
    display: flex;
    display: -webkit-flex;
    -moz-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -9px;
    margin-right: -9px;
    padding: 0;
    position: relative;
    float: none;
}


.grid-column {
    position: relative;
    box-sizing: border-box;
    min-height: 1px;
    vertical-align: top;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 9px;
    width: 100%;
}


.form-control:focus,
.form-control:active .vs-dropdown-toggle:focus,
.vs-dropdown-toggle:active {
    border-color: inherit !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline: none !important;
    border: 1px solid #2f5acf !important;
}


.form-control {
    background: #fff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 16px;
    min-height: 40px;
    width: 100%;
    padding: 5px 20px;
    transition: all 0.1s;
}

.btn-save {
    background-color: #2f5acf;
    color: #fff;
    border: 2px solid #2f5acf;
}

.btn-save:hover,
.btn-save:active {
    background-color: #1c3a8e;
    color: #fff;
    border: 2px solid #1c3a8e;
}

.btn-cancel:hover {
    background-color: #dddde6;
    color: #000;
    border: 2px solid #232325;
}

.btn-review-save {
    border-radius: 4px;
    background-color: #3060e2;
    color: whitesmoke;
    width: fit-content;
    padding: 5px 10px;
    margin-top: 10px
}

.btn-review-save-disable {
    border-radius: 4px;
    background-color: #b3c1e6;
    color: whitesmoke;
    width: fit-content;
    padding: 5px 10px;
    margin-top: 10px;
    pointer-events: none
}


.reviews-rating {
    display: flex;
    align-items: center;
    height: 1.5rem;

}

.reviews-rating-star.is-active,
.reviews-rating-star.is-full {
    background-image: url(https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875);
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 1px 1px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
}

.reviews-rating-star {
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 1px 1px;
    background-image: url(https://www.coolmate.me/images/star-new.svg?08a379c24952a980d5430515abb8be4e);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
}

.reviews-rating-star.is-half {
    background-image: url(https://www.coolmate.me/images/star-half.svg?8aea9e9938db110e66ea06732737184a);
}


.upload__box {
    padding: 9px;
}

.upload__inputfile {
    width: .1px;
    height: .1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.upload__btn {
    display: inline-block;
    font-weight: 400;
    color: #fff;
    text-align: center;
    min-width: 30px;
    padding: 5px;
    transition: all .3s ease;
    cursor: pointer;
    border: 2px solid;
    background-color: #4045ba;
    border-color: #4045ba;
    border-radius: 10px;
    line-height: 18px;
    font-size: 13px;

}

.upload__btn:hover {
    background-color: unset;
    color: #4045ba;
    transition: all .3s ease;
}

.upload__btn-box {
    margin-bottom: 10px;
}

.upload__img-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
}

.upload__img-box {
    width: 100px;
    padding: 0 10px;
    margin-bottom: 12px;
}

.upload__img-close {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 5px;
    right: 5px;
    text-align: center;
    line-height: 10px;
    z-index: 1;
    cursor: pointer;
}

.upload__img-close:after {
    content: '\2716';
    font-size: 10px;
    color: white;
}

.img-bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding-bottom: 100%;
}
</style>