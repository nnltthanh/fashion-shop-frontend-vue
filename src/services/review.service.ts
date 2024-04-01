import { ref } from 'vue';
import axios from 'axios';

export class ReviewService {
    public productId;
    public orderDetailId;
    public content;
    public rate;
    public customerId

    constructor() {
        this.productId = ref<number>(0);
        this.orderDetailId = ref<number>(0);
        this.content = ref<string>('');
        this.rate = ref<number>(1);
        if (localStorage.getItem('account')) {
            this.customerId = JSON.parse(localStorage.getItem('account')!).id || 0;
        }
    }

    public async postReview(productId, orderDetailId, postData) {
        const baseUri = this.getBaseUri();
        return await axios.post(`${baseUri}/products/${productId}/reviews/order-details/${orderDetailId}`, 
                    postData);
    }

    public async getReviewByOrderDetailId(orderDetailId) {
        const baseUri = this.getBaseUri();
        return (await axios.get(`${baseUri}/products/0/reviews/order-details/${orderDetailId}`));
    }

    public async getAllReviewByCustomerId(customerId) {
        const baseUri = this.getBaseUri();
        return await axios.get(`${baseUri}/products/0/reviews/customer/${customerId}`);
    }

    public async getAllReviewByOrderId(orderId) {
        const baseUri = this.getBaseUri();
        return await axios.get(`${baseUri}/products/0/reviews/orders/${orderId}`);
    }


    getBaseUri() {
        return import.meta.env.VITE_BACKEND_BASE_URL;
    }

}

const reviewService = new ReviewService();
export const provideReviewService = () => {
    return {
        reviewService,
    };
};