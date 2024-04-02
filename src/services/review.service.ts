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

    public async postReview(productId, orderDetailId, postData, formData) {
        const baseUri = this.getBaseUri();
        const review = await axios.post(`${baseUri}/products/${productId}/reviews/order-details/${orderDetailId}`, postData);
        
        return await this.updateImages(productId, review.data.id, formData);
    }

    public async updateImages(productId, reviewId, imageFiles) {
        const baseUri = this.getBaseUri();
        return await axios.put(`${baseUri}/products/${productId}/reviews/${reviewId}/upload`, imageFiles, 
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
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