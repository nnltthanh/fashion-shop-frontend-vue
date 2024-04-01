<script setup lang="ts">
import type { OrderDetail } from '@/components/staff/OrderTable.vue';
import type { CartService } from '@/services/cart.service';
import { defineProps, inject, ref } from 'vue';
import { ReviewService } from '@/services/review.service'
import type { Review } from './OrderCard.vue';

const { cartService }: { cartService: CartService } = inject('cartService')!;

const props = defineProps<{
  order: any
}>();

const isLoading = ref(true)

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const reviews = ref<Review[]>([]);
const customerRate = ref<string[]>([]);
const customerReview = ref<string[]>([]);

let reviewService = new ReviewService();

setTimeout(async () => {
  reviews.value = (await reviewService.getAllReviewByCustomerId(cartService.customerId)).data;
  console.log(reviews.value)
  isLoading.value = false;
}, 1000);

const getImageData = (image) => {
  return URL.createObjectURL(image);
}

</script>
<template>
  <div class="account-content my-50">
    <div id="info-tab" class="account-info">
      <h2 class="account-page-title">Đánh giá và phản hồi</h2>
      <div v-if="!isLoading && reviews.length == 0" class="account-page-label mt-4">Bạn chưa có đánh giá nào...</div>
      <div>
        <div class="grid-column mt-3">
          <div class="reviews-listing-items">
            <div class="reviews-listing-item" v-for="(review, index) in reviews">
              <div class="reviews-listing-content">
                <div class="reviews-rating">
                  <div :class="['reviews-rating-star', review.rate >= 1 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate >= 2 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate >= 3 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate >= 4 ? 'is-active' : '']"></div>
                  <div :class="['reviews-rating-star', review.rate == 5 ? 'is-active' : '']"></div>

                </div>
                <div class="reviews-order">
                  <router-link
                    :to="{ name: 'product', params: { id: review.orderDetail.productDetail.product.id.toString() } }">
                    <div class="order-item-title"> {{ review.orderDetail.productDetail.product.name }}</div>
                  </router-link>
                  <!-- <div class="order-item-title"> {{ review.orderDetail.productDetail.product.name }}</div> -->
                  <div class="order-item-variant-label">
                    {{ review.orderDetail.productDetail.color }} / {{ review.orderDetail.productDetail.size }}
                  </div>
                </div>
                <div class="reviews-listing-description">
                  <p>
                    {{ review.content }}
                  </p>
                  <div class="reviews-listing-gallery" rel-script="product-gallery-popup">
                    <a v-for="image in review.imageUrls?.split(',')" class="reviews-listing-image"
                      rel-script="product-lightbox-gallery" data-index="0" :data-image=image>
                      <img :src=image alt="0" />
                    </a>

                  </div>
                  <!-- <p class="reviews-listing-feedback" *v-if="false">
                    Phản hồi
                  </p> -->
                  <span class="reviews-listing-date"> {{ review.createDate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-content {
  position: relative;
  /* display: flex; */
  align-items: center;
  padding: 3rem 3rem;
  transition: all 0.2s;
  border-radius: 0.5rem;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.account-page-title {
  margin-bottom: 25px;
  font-size: 2.5rem;
}

.account-page-label {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5333333333);
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

.reviews-listing-item {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #d9d9d9;
}

.reviews-listing-item:is(:first-child) {
  border-top: 1px solid #d9d9d9;
}

.reviews-listing-content {
  flex: 1;
}

.reviews-rating {
  display: flex;
  align-items: center;
  margin-left: -3px;
  margin-right: -3px;
}

.reviews-rating-star.is-active,
.reviews-rating-star.is-full {
  background-image: url(https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875);
}

.reviews-rating-star {
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 3px 1px;
  background-image: url(https://www.coolmate.me/images/star-new.svg?08a379c24952a980d5430515abb8be4e);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
}

.reviews-rating-star.is-half {
  background-image: url(https://www.coolmate.me/images/star-half.svg?8aea9e9938db110e66ea06732737184a);
}

.reviews-order {
  font-size: 14px;
  line-height: 18px;
  color: #000;
  margin-top: 5px;
  margin-bottom: 10px;
  line-height: 1.5em;
}

.order-item-variant-label {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-style: italic;
  font-size: 12px;
}

.reviews-listing-description {
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #000;
}

.reviews-listing-description p {
  margin: 0;
  font-weight: 400;
}

.reviews-listing-feedback {
  padding: 14px 18px;
  border-radius: 16px;
  margin-top: 15px !important;
  line-height: 1.5em;
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  width: 100%;
}

.reviews-listing-date {
  display: block;
  margin-top: 20px;
  opacity: 0.5;
}

.reviews-listing-gallery {
  display: flex;
  margin-left: -4px;
  margin-right: -4px;
  margin-top: 10px;
}

.reviews-listing-image {
  overflow: hidden;
  border-radius: 8px;
  width: 60px;
  margin: 0 4px;
  position: relative;
}

.reviews-listing-image:before {
  content: "";
  display: block;
  padding-top: 100%;
  height: 0;
  width: 100%;
}

.reviews-listing-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>
