<script setup lang="ts">
import { inject, defineProps, computed, watch, ref } from 'vue';

const { cartService }: { cartService: CartService } = inject('cartService')!;
const props = defineProps<{
    order: any
}>();

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const orderDetails = ref([]);

setTimeout(async () => {
    orderDetails.value = (await cartService.getOrderDetailsByOrderId(props.order.id)).data;
    console.log(orderDetails.value);
}, 1000);

</script>


<template>
    <div href="#" class="order">
        <div class="order-header">
            <div>
                <p class="order-title">#{{ order.id }}</p>
                <p class="order-date">{{ order.createDate }}</p>
            </div>
            <div class="order-status-done">
                <!-- <span>Đã giao hàng</span> -->
                <span>{{ order.status }}</span>
            </div>
        </div>
        <div class="order-body">
            <div>
                <!-- <div class="order-item" v-for=""></div> -->
                <div v-for="(orderDetail, idx) in orderDetails" :key="idx" class="order-item">
                    <div class="order-item-thumbnail">
                        <a href="#" target="_blank"><img
                                :src="orderDetail.productDetail.imageLinks?.split(',')[0].toString()"
                                :alt="orderDetail.productDetail.product.name.toString()" />
                        </a>
                    </div>
                    <div class="order-item-info">
                        <a href="#" target="_blank" class="order-item-title">
                            <!-- Quần Jogger Nam UT đa năng -->
                            {{ orderDetail.productDetail.product.name }}
                        </a>
                        <div class="order-item-variant-label">{{ orderDetail.productDetail.color }} / {{
                    orderDetail.productDetail.size }}</div>
                        <div class="order-item-quantity">x {{ orderDetail.quantity }}</div>
                        <div class="order-item-price"> {{ VND.format(orderDetail.total) }}</div>
                    </div>
                </div>
                <!-- <div class="order-item">
                    <div class="order-item-thumbnail">
                        <a href="#" target="_blank"><img
                                src="https://media.coolmate.me/cdn-cgi/image/width=160,height=181,quality=80/uploads/December2023/boxer_short_ke_00016_copy.jpg"
                                alt="Pack 3 Quần Shorts Nam kẻ sọc Basics" />
                        </a>
                    </div>
                    <div class="order-item-info">
                        <a href="#" target="_blank" class="order-item-title">
                            Pack 3 Quần Shorts Nam kẻ sọc Basics
                        </a>
                        <div class="order-item-variant-label">Mix màu / 3XL</div>
                        <div class="order-item-quantity">x 1</div>
                        <div class="order-item-price">199.000đ</div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-item-thumbnail">
                        <a href="#" target="_blank"><img
                                src="https://media.coolmate.me/cdn-cgi/image/width=160,height=181,quality=80/uploads/April2022/DSC05753_copy1.jpg"
                                alt="Quà tặng - Áo thun thể thao nam ProMax-S1" />
                        </a>
                    </div>
                    <div class="order-item-info">
                        <a href="#" target="_blank" class="order-item-title">
                            Quà tặng - Áo thun thể thao nam ProMax-S1
                        </a>
                        <div class="order-item-variant-label">Xanh Aqua / L</div>
                        <div class="order-item-quantity">x 1</div>
                        <div class="order-item-price">0₫</div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="order-footer">
            <div class="order-footer-left">
                <div>
                    <!---->
                    <a href="#" target="_blank" class="btn btn--outline">Cần hỗ trợ</a>
                </div>
            </div>
            <div class="order-footer-right">
                <div><b> {{ VND.format(order.total) }}</b></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.order-footer-left .btn {
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
</style>