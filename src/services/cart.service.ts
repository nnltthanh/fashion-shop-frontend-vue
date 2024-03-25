import { ref } from 'vue';
import axios from 'axios';
import type { CartDetailObject } from '@/components/cart/CartComponent.vue';

class CartService {
    public cartItems;
    public orderId?;
    public cartDetailsToOrder?;
    public shipCost?;
    public total?;
    public discount?;
    public subTotal?;
    public customerId!: number;
    public cartQuantity;

    constructor() {
        this.cartItems = ref<number[]>([]);
        this.orderId = ref<number>(0);
        this.cartDetailsToOrder = ref<number[]>([]);
        this.shipCost = ref<number>(30000);
        this.total = ref<number>(0);
        this.discount = ref<number>(0);
        this.subTotal = ref<number>(0);
        this.cartQuantity = ref<number>(0);
        if (localStorage.getItem('account')) {
            this.customerId = JSON.parse(localStorage.getItem('account')!).id || 0;
        }
    }

    public async getCart() {
        try {
            const baseUri = this.getBaseUri();
            const response = await axios.get<CartDetailObject[]>(`${baseUri}/customers/${this.customerId}/cart`);
            this.cartItems.value = response.data;

            // this.subTotal.value = 0;
            this.total.value = 0;
            // this.cartItems._rawValue.forEach(element => {
            //     this.subTotal.value += element.total;
            // });
            this.cartQuantity.value = 0;

            this.subTotal.value = this.total.value + this.shipCost.value - this.discount.value;
            response.data?.forEach(element => {
                this.cartQuantity.value += element.quantity;
            });
            
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createOrder(data) {
        try {
            const baseUri = this.getBaseUri();
            data.total = this.subTotal.value;
            const response = await axios.post(`${baseUri}/customers/${this.customerId}/orders`, data);
            this.orderId.value = response.data.id;
            
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async addProductDetailToCart(productDetail, quantity) {
        const baseUri = this.getBaseUri();
        let cartDetail = {
            productDetail: productDetail,
            quantity: quantity
        }
        this.cartQuantity.value += quantity;
        return await axios.post(`${baseUri}/customers/${this.customerId}/cart`, cartDetail);
    }

    async addCartDetailToOrder_payment(data, paymentOption) {
        try {

            const newOrder = await this.createOrder(data);
            this.orderId.value = newOrder.id;
            
            const shipment = this.createShipment(JSON.parse(localStorage.getItem('orderShipment')!));

            if (paymentOption == "vnpay") {
                return (await this.paymentByVNPay(this.orderId.value));
            }

            if (paymentOption == "COD") {
                (await this.paymentByCOD(this.orderId.value));
                (await this.addOrderToSuccessful(this.orderId.value));
                window.location.href = "http://localhost:8081/account/orders";
            }

            return true;

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async paymentByVNPay(orderId: Number) {
        const baseUri = this.getBaseUri();
        let data = {
            amount: this.subTotal.value,
            method: "vnpay",
            status: "PENDING"
        }

        localStorage.setItem('amount', this.subTotal.value);

        localStorage.setItem('cartDetails', this.cartDetailsToOrder.value.toString());

        return axios.post(`${baseUri}/payment/${orderId}/vnpay`, data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        });
    }

    async paymentByCOD(orderId: Number) {
        const baseUri = this.getBaseUri();
        let data = {
            amount: this.subTotal.value,
            method: "COD",
            status: "COD"
        }

        localStorage.setItem('amount', this.subTotal.value);

        localStorage.setItem('cartDetails', this.cartDetailsToOrder.value.toString());

        return axios.post(`${baseUri}/payment/${orderId}/cod`, data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        });
    }

    async addOrderToSuccessful(orderId: number) {
        const baseUri = this.getBaseUri();

        this.orderId.value = orderId;
        
        const regularArray = localStorage.getItem('cartDetails')!.split(',');
     
        await axios.post(`${baseUri}/customers/${this.customerId}/orders/${this.orderId.value}`, regularArray);

        const order = await this.getOrderById(this.orderId.value);
  
        let data = {
            ...order,
            status: 'PROCESSING',
            total : localStorage.getItem('amount')
        }

        localStorage.removeItem('amount');

        // update payment
        await axios.put(`${baseUri}/customers/${this.customerId}/orders/${this.orderId.value}`, data);

    }

    async createShipment(data) {
        const baseUri = this.getBaseUri();
        return (await axios.post(`${baseUri}/shipment/${this.orderId.value}`, data)).data;
    }

    async deleteCartDetail(cartDetailId) {
        const baseUri = this.getBaseUri();
        return axios.delete(`${baseUri}/customers/${this.customerId}/cart/${cartDetailId}`);
    }

    async getOrderById(orderId: Number) {
        const baseUri = this.getBaseUri();
        return axios.get(`${baseUri}/customers/${this.customerId}/orders/${orderId}`);
    }

    async getAllOrders() {
        const baseUri = this.getBaseUri();
        return axios.get(`${baseUri}/customers/${this.customerId}/orders`);
    }

    async getOrderDetailsByOrderId(orderId) {
        const baseUri = this.getBaseUri();
        return axios.get(`${baseUri}/customers/${this.customerId}/orders/${orderId}/details`);
    }

    // getAllCartDetailsToOrder(cartDetailIds, subTotal) {
    //     this.cartDetailsToOrder.value = cartDetailIds;
    //     this.subTotal.value = subTotal;
    //     console.log(this.subTotal.value)
    // }

    getBaseUri() {
        return import.meta.env.VITE_BACKEND_BASE_URL;
    }
}

const cartService = new CartService();
console.log(cartService)
export const provideCartService = () => {
    cartService.getCart();
    return {
        cartService,
    };
};