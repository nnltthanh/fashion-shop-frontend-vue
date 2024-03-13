import { ref } from 'vue';
import axios from 'axios';

class CartService {
    public cartItems;
    public orderId?;
    public cartDetailsToOrder?;
    public subTotal?;

    constructor() {
        this.cartItems = ref<Number[]>([]);
        this.orderId = ref<Number>(0);
        this.cartDetailsToOrder = ref<Number[]>([]);
        this.subTotal = ref<Number>(0);
    }

    public async getCart() {
        try {
            const baseUri = this.getBaseUri();
            const response = await axios.get(`${baseUri}/customers/1/cart`);
            this.cartItems.value = response.data;
            console.log(this.cartItems._rawValue);
            this.subTotal.value = 0;
            this.cartItems._rawValue.forEach(element => {
                this.subTotal.value += element.total;
            });
            console.log(this.subTotal.value)
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
            const response = await axios.post(`${baseUri}/customers/1/orders`, data);
            this.orderId.value = response.data.id;
            console.log(response.data);
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
        return axios.post(`${baseUri}/customers/1/cart`, cartDetail);
    }

    async addCartDetailToOrder(data, paymentOption) {
        try {
            const baseUri = this.getBaseUri();

            const newOrder = await this.createOrder(data);
            this.orderId.value = newOrder.id;
            console.log(this.orderId.value);

            const regularArray = Object.keys(this.cartDetailsToOrder.value).map((key)=>this.cartDetailsToOrder.value[Number(key)]);
            console.log(regularArray);

            if (paymentOption == "vnpay") {
                return (await this.paymentByVNPay(this.orderId.value)).data;
            }

            // const response = await axios.post(`${baseUri}/customers/1/orders/${this.orderId.value}`, regularArray);

            // const allOrderDetails = await this.getOrderById(this.orderId.value);
            // console.log("order details in order id: ", this.orderId.value);
            // console.log(allOrderDetails.data);

            return newOrder;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async paymentByVNPay(orderId: Number) {
        const baseUri = this.getBaseUri();
        let data = {
            // amount: this.subTotal.value,
            amount: 100000,
            method: "vnpay"
        }
        
        return axios.post(`${baseUri}/payment/${orderId}/vnpay`,data , {
            "Content-Type": "application/json",
            Accept: "*/*",
        });
    }

    async deleteCartDetail(cartDetailId) {
        const baseUri = this.getBaseUri();
        return axios.delete(`${baseUri}/customers/1/cart/${cartDetailId}`);
    }

    async getOrderById(orderId: Number) {
        const baseUri = this.getBaseUri();
        return axios.get(`${baseUri}/customers/1/orders/${orderId}`);
    }

    getAllCartDetailsToOrder(cartDetailIds, subTotal) {
        this.cartDetailsToOrder.value = cartDetailIds;
        this.subTotal.value = subTotal;
        console.log(this.subTotal.value)
    }

    getBaseUri() {
        return import.meta.env.VITE_BACKEND_BASE_URL;
    }
}

const cartService = new CartService();

// export default cartService;

export const provideCartService = () => {
    console.log(cartService)
    return {
        cartService,
    };
};