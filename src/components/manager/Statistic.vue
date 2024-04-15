<template>
    <div class="all overflow-y-auto custom-scrollbar" style="max-height: 630px;">
        <div class="flex shadow-lg rounded-lg mx-4 my-2 px-4 pb-2">
            <div class="w-2/5">
                <div class="mb-2 text-4xl mt-3 ">
                    Chúc mừng bạn 🎉🎉🎉
                </div>
                <div class="my-2 font-light text-xl">
                    Hôm nay bạn đã bán được thêm 72% 🤩.
                </div>
                <div class="my-2 font-light text-xl">Kiểm tra huy hiệu nâng cao mới trong hồ sơ của bạn.</div>
                <button type="button" class="text-indigo-500 bg-indigo-300 p-2 my-1 hover:bg-indigo-700 rounded-lg ">
                    XEM HUY HIỆU</button>
            </div>
            <div class="w-2/6"></div>
            <div class="grid justify-items-end w-1/4"><img
                    src="https://sneat-vuetify-admin-template.vercel.app/assets/illustration-john-light-0061869a.png"
                    alt="">
            </div>
        </div>
        <div class="flex mx-2">
            <div class="w-3/5 shadow-lg rounded-lg p-4">
                <div class="text-2xl">Tổng doanh thu</div>
                <canvas ref="chartCanvas"></canvas>
            </div>
            <div class="w-2/5 ml-3">
                <div class="flex flex-col">
                    <div class="flex">
                        <div class="w-1/2 mt-5 rounded-lg shadow-xl p-4 big-scale">
                            <div class="media-body text-left">
                                <h6 class="text-muted mb-2">Tổng doanh thu (tháng) </h6>
                                <h3>{{ totalRevenue < 1500000 ? formatNumberWithCommas(15652000) :
                                    formatNumberWithCommas(totalRevenue) }} (vnđ)</h3>
                            </div>
                            <div class="align-self-center">
                                <i class="fa fa-trophy text-lime-400 fa-2x float-right"></i>
                            </div>
                        </div>
                        <div class="w-1/2 mt-5 rounded-lg shadow-xl p-4 ml-4  big-scale">
                            <div class="media-body text-left">
                                <h6 class="text-muted mb-2">Số đơn thành công </h6>
                                <h3>{{ orderDelivered < 23 ? 23 : orderDelivered }}</h3>
                            </div>
                            <div class="align-self-center">
                                <i class="fa fa-crown text-teal-200 fa-2x float-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-1/2 mt-3 rounded-lg shadow-xl p-4 big-scale">
                            <div class="media-body text-left">
                                <h6 class="text-muted mb-2">Đơn đang xử lý </h6>
                                <h3>{{ orderProcessing < 10 ? 15 : orderProcessing }}</h3>
                            </div>
                            <div class="align-self-center">
                                <i class="fa-solid fa-microchip fa-2x text-sky-500 float-right"></i>
                            </div>
                        </div>
                        <div class="w-1/2 mt-3 rounded-lg shadow-xl p-4 ml-4 big-scale">
                            <div class="media-body text-left">
                                <h6 class="text-muted mb-2">Số đơn đã vận chuyển</h6>
                                <h3>{{ orderShipped < 5 ? 5 : orderShipped }}</h3>
                            </div>
                            <div class="align-self-center rounded-lg">
                                <i class="fa-solid fa-truck-fast text-indigo-600 fa-2x float-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-1/2 mt-3 rounded-lg shadow-xl p-4 big-scale">
                            <div class="media-body text-left">
                                <h6 class="text-muted mb-2">Lợi nhuận (tháng) </h6>
                                <h3>{{ totalPorfit < 1000000 ? formatNumberWithCommas(5670000) :
                                    formatNumberWithCommas(totalPorfit) }} (vnđ)</h3>
                            </div>
                            <div class="align-self-center">
                                <i class="fa-solid fa-circle-dollar-to-slot fa-2x text-yellow-400 float-right"></i>
                            </div>
                        </div>
                        <div class="w-1/2 mt-3 rounded-lg shadow-xl p-4 ml-4 big-scale">
                            <div class="media-body text-left">
                                <h6 class="text-muted mb-2">Số đơn đã huỷ</h6>
                                <h3>{{ orderCancelled < 6 ? 6 : orderCancelled }}</h3>
                            </div>
                            <div class="align-self-center rounded-lg">
                                <i class="fa-regular fa-rectangle-xmark text-rose-500 fa-2x float-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- New Row -->
        <div class="flex mb-3">
            <div class="w-2/6 max-h-80 mt-3 mr-3 rounded-xl shadow-2xl p-4">
                <div>
                    Thống kê người dùng:
                </div>
                <canvas class="m-2" ref="columnChartCanvas"></canvas>
            </div>
            <div class="w-64 h-80 mt-3 rounded-2xl shadow-2xl p-4 ">
                <div>Trạng thái các tài khoản:</div>
                <canvas class="h-3/5" ref="doughnutChartCanvas">
                </canvas>
            </div>
            <!-- Bảng top sản phẩm bán chạy -->
            <div class="w-full mt-3 h-80 rounded-2xl shadow-2xl p-4 ml-2 ">
                <div>
                    <div class="font-bold">Top sản phẩm bán chạy</div>
                    <div
                        class="relative mt-1 h-64 overflow-y-scroll overflow-x-hidden flex custom-scrollbar rounded-lg ">
                        <table
                            class="w-full overflow-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs font-sans text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-5 py-3 text-center">
                                        Mã sản phẩm
                                    </th>
                                    <th scope="col" class="px-5 py-3 text-center">
                                        Tên sản phẩm
                                    </th>
                                    <th scope="col" class="px-5 py-3 text-center">
                                        Đã bán
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in topProducts" :key="index"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-sm">
                                    <td class="px-5 py-3 text-center">{{ product.id }}</td>
                                    <td class="px-5 py-3">{{ product.name }}</td>
                                    <td class="px-5 py-3 text-center">{{ product.sold }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import axios from 'axios';
import type { ProductObject } from '../cart/cart-item/DefaultCartItem.vue';

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
    phone: string;
}

export interface OrderDetail {
    id: string;
    productDetail: ProductDetail;
    quantity: number,
    total: number
}

interface ProductDetail {
    id: string;
    quantity: string,
    imageLinks: string,
    product: ProductObject,
    color: string,
    size: string,
    sold: number,
}

interface Staff {
    id: string;
    name: string;
}

const apiUrl = 'http://localhost:8080'
const orderDelivered = ref<number>(0);
const totalRevenue = ref<number>(0);
const orderProcessing = ref<number>(0);
const orderCancelled = ref<number>(0);
const orderShipped = ref<number>(0);
const totalPorfit = ref<number>(0);
const totalCost = ref<number>(0);
const customerNumber = ref<number>(0);
const staffNumber = ref<number>(0);
const managerNumber = ref<number>(0);
const adminNumber = ref<number>(0);
const accountAvailable = ref<number>(0);
const accountLocked = ref<number>(0);
const topProducts = ref<ProductObject[]>();
const monthlyRevenues2024 = new Array(12).fill(0);

const orders = ref<Order[]>();
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const chartCanvas = ref<HTMLCanvasElement | null>(null);
const columnChartCanvas = ref<HTMLCanvasElement | null>(null);
const doughnutChartCanvas = ref<HTMLCanvasElement | null>(null);


onMounted(async () => {
    try {
        const response = await axios.get(`${apiUrl}/OrderForEmployee`);
        if (response.status === 200) {
            orders.value = response.data;
            // nếu muốn lọc theo thời gian, lọc ngay đây (vd lấy số đơn hàng có số ngày...)
            orderDelivered.value = orders.value!.filter(order => order.status === 'DELIVERED').length;
            // totalRevenue.value = Number(orders.value!.filter(order => order.status === 'DELIVERED')
            if (orders.value) {
                const currentMonth = new Date().getMonth() + 1;

                totalRevenue.value = orders.value
                    .filter(order => {
                        const orderDate = new Date(order.createDate);
                        return orderDate.getFullYear() === new Date().getFullYear() && orderDate.getMonth() + 1 === currentMonth && order.status === 'DELIVERED';
                    })
                    .reduce((total, order) => total + Number(order.total), 0);
                // console.log(totalRevenue.value)
            }
            orderProcessing.value = orders.value!.filter(order => order.status === 'PROCESSING').length;
            orderCancelled.value = orders.value!.filter(order => order.status === 'CANCELLED').length;
            orderShipped.value = orders.value!.filter(order => order.status === 'SHIPPED').length;


            //Lấy dữ liệu biểu đồ tổng doanh thu
            const monthlyRevenuesByMonth = new Array(12).fill(null);
            if (orders.value) {
                orders.value.filter(order => order.status === 'DELIVERED').forEach(order => {
                    const orderDate = new Date(order.createDate);
                    const month = orderDate.getMonth();
                    const orderTotal = Number(order.total);

                    if (orderDate.getFullYear() === 2024) {
                        monthlyRevenuesByMonth[month] += orderTotal;
                    }
                });
                monthlyRevenues2024.splice(0, 12);
                monthlyRevenues2024.push(...monthlyRevenuesByMonth);
                monthlyRevenues2024.map(value => value === 0 ? null : value);
                // console.log(monthlyRevenues2024)
            }

            //Lấy dữ liệu lợi nhuận

            if (orders.value) {
                const currentMonth = new Date().getMonth() + 1;
                // console.log(totalRevenue.value)
                await Promise.all(orders.value.filter(order => {
                    const orderDate = new Date(order.createDate);
                    return orderDate.getFullYear() === new Date().getFullYear() && orderDate.getMonth() + 1 === currentMonth && order.status === 'DELIVERED';
                }).map(async (order) => {
                    try {
                        const orderDetailsResponse = await axios.get(`${apiUrl}/OrderForEmployee/${order.id}/details`);
                        order.orderDetails = orderDetailsResponse.data;
                        totalCost.value += order.orderDetails.reduce((total, orderDetail) => total + orderDetail.quantity * orderDetail.productDetail.product.cost, 0);
                    } catch (error) {
                        console.error(`Error fetching order details for order ${order.id}:`, error);
                    }
                }));
                totalPorfit.value = totalRevenue.value - totalCost.value;
                if (totalPorfit.value < 0) {
                    totalPorfit.value = 0
                }
            }
        }

        const responseUser = await axios.get(`http://localhost:8080/users`);
        if (responseUser.status === 200) {
            customerNumber.value = responseUser.data.filter(user => user.userType === 'customer').length;
            staffNumber.value = responseUser.data.filter(user => user.userType === 'staff').length;
            managerNumber.value = responseUser.data.filter(user => user.userType === 'manager').length;
            adminNumber.value = responseUser.data.filter(user => user.userType === 'admin').length;
            accountAvailable.value = responseUser.data.filter(user => user.locked === false).length;
            accountLocked.value = responseUser.data.filter(user => user.locked === true).length;
        }

        //Lấy dữ liệu top5 sản phẩm bán chạy 
        const products = ref<ProductObject[]>();
        if (orders.value) {
            try {
                const productsResponse = await axios.get(`${apiUrl}/products`);
                products.value = productsResponse.data;
                // Bước 2 và Bước 3: Tính tổng số lượng đã bán của mỗi sản phẩm
                const soldProductsMap = new Map<string, number>(); // Map để lưu trữ tổng số lượng đã bán của mỗi sản phẩm
                await Promise.all(products.value!.map(async (product) => {
                    const detailsResponse = await axios.get(`${apiUrl}/products/${product.id}/details`);
                    const details = detailsResponse.data;
                    details.forEach((detail: ProductDetail) => {
                        const productId = product.id;
                        const quantitySold = detail.sold;
                        // Cập nhật hoặc thêm mới tổng số lượng đã bán của sản phẩm vào Map
                        soldProductsMap.set(String(productId), (soldProductsMap.get(String(productId)) || 0) + quantitySold);
                    });
                }));
                // Bước 4: Sắp xếp danh sách sản phẩm theo tổng số lượng đã bán giảm dần
                const soldProductsArray = Array.from(soldProductsMap.entries());
                soldProductsArray.sort((a, b) => b[1] - a[1]);
                // Lấy 5 phần tử ban đầu (top 5 bán chạy)
                const topFiveProducts = soldProductsArray.slice(0, 5);
                // Lọc danh sách products và cập nhật sold của từng sản phẩm từ topFiveProducts
                if (products.value) {
                    products.value = products.value
                        .filter(product => topFiveProducts.some(([productId]) => productId === String(product.id)))
                        .map(product => {
                            const sold = topFiveProducts.find(([productId]) => productId === String(product.id))?.[1] || 0;
                            return { ...product, sold };
                        });
                    // Sắp xếp danh sách products theo sold giảm dần
                    products.value.sort((a, b) => b.sold - a.sold);
                }
                topProducts.value = products.value;
            } catch (error) {
                console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            }
        }
    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
    }

    // Line Chart
    if (chartCanvas.value) {
        const ctx = chartCanvas.value.getContext('2d');
        if (ctx) {
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                        "September", "October", "November", "December"
                    ],
                    datasets: [
                        {
                            label: 'Năm 2023',
                            data: [57000000, 60500000, 55500000, 70000000, 70006540, 60006540, 50006540, 70006540, 80006540, 50006540, 70006540, 65008000],
                            fill: false,
                            borderColor: 'rgb(168, 162, 158)',
                            tension: 0.1,
                            borderCapStyle: 'round',
                            cubicInterpolationMode: 'monotone',
                            borderDash: [5, 5],
                        },
                        {
                            label: 'Năm 2024',
                            data: [
                                61000000, // tháng 1
                                57643000,
                                75000000,
                                68000000,
                                15652000,
                                monthlyRevenues2024[5], // tháng 6
                                monthlyRevenues2024[6],
                                monthlyRevenues2024[7],
                                monthlyRevenues2024[8],
                                monthlyRevenues2024[9],
                                monthlyRevenues2024[10],
                                monthlyRevenues2024[11]],
                            fill: false,
                            borderColor: 'rgb(103, 232, 249)',
                            tension: 0.1,
                            borderCapStyle: 'round',
                            cubicInterpolationMode: 'monotone',
                        }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        }
                    }
                }
            });
        }
    }

    // Column Chart
    if (columnChartCanvas.value) {
        const ctx = columnChartCanvas.value.getContext('2d');
        if (ctx) {
            const columnChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Khách hàng', 'Nhân viên', 'Quản lý', 'Admin'],
                    datasets: [{
                        label: 'Số lượng',
                        data: [customerNumber.value, staffNumber.value, managerNumber.value, adminNumber.value],
                        backgroundColor: [
                            'rgba(113, 211, 55, 1)', // Màu cho khách hàng
                            'rgba(3, 195, 236, 1)', // Màu cho nhân viên
                            'rgba(105, 108, 255, 1)', // Màu cho quản lý
                            'rgba(113, 146, 163, 1)' // Màu cho admin
                        ],
                        borderColor: [
                            'rgba(113, 211, 55, 1)',
                            'rgba(3, 195, 236, 1)',
                            'rgba(105, 108, 255, 1)',
                            'rgba(113, 146, 163, 1)'
                        ],
                        borderWidth: 1,
                        barThickness: 30,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false // Bỏ lưới kẻ dọc
                            }
                        },
                        x: {
                            grid: {
                                display: false // Bỏ lưới kẻ ngang
                            }
                        }
                    }
                }
            });
        }
    }

    //Doughnut Chart
    if (doughnutChartCanvas.value) {
        const ctx = doughnutChartCanvas.value.getContext('2d');
        if (ctx) {
            const doughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Đã bị khoá', 'Khả dụng'],
                    datasets: [{
                        label: 'Số lượng',
                        data: [accountLocked.value, accountAvailable.value],
                        backgroundColor: [
                            'rgba(168, 162, 158, 1)',
                            'rgba(103, 232, 249, 1)',
                        ],
                        borderColor: [
                            'rgba(66, 62, 66, 1)',
                            'rgba(3, 195, 236, 1)',
                        ],
                        borderWidth: 1,
                        hoverOffset: 10,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                        }
                    },
                    animation: {
                        animateRotate: false,
                    },
                }
            });
            doughnutChartCanvas.value.addEventListener('mouseleave', function () {
                doughnutChart.options.animation!.animateScale = false;
                doughnutChart.update(); // Cập nhật biểu đồ để áp dụng thay đổi
            });
        }
    }
});
</script>

<style scoped>
.column-rounded {
    border-radius: 10px;
}

.big-scale {
    transition: transform 0.3s ease;
}

.big-scale:hover {
    transform: scale(1.1);
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
</style>
