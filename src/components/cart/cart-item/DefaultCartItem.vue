<script setup lang="ts">

import { computed, defineProps, ref, inject } from 'vue';
import type { CartDetailObject } from '../CartComponent.vue';
import { CartService } from "../../../services/cart.service";

export type ProductObject = {
  id: number,
  name: String,
  price: number,
  salePercent: number,
  type: String,
  material: String,
  imageData: {
    id: number,
    base64String: String,
    type: String
  },
  createdAt: Date,
  updatedAt: Date
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

const { cartService }: { cartService: CartService } = inject('cartService')!;
cartService.cartDetailsToOrder.value = []

const props = defineProps<{
  cartDetail: CartDetailObject,
}>();

const isVisible = ref(true);
const isChecked = ref(false);

const quantityRef = ref(props.cartDetail.quantity);
const productDetail = ref(props.cartDetail.productDetail);

const increaseQuantity = async () => {
  if (Number(productDetail.value.quantity) > Number(quantityRef.value)) {
    quantityRef.value = Number(quantityRef.value) + 1;
    props.cartDetail.total += productDetail.value.product.price;
    props.cartDetail.quantity++;

    await cartService.updateCartDetail(props.cartDetail);

    let salePrice = productDetail.value.product.price * (1 - props.cartDetail.productDetail.product.salePercent / 100);
    salePrice = Math.floor(salePrice / 1000);
    salePrice *= 1000;

    if (isChecked.value) {
      cartService.total.value += Number(salePrice);
      cartService.subTotal.value += Number(salePrice);
      cartService.cartQuantity.value++;
      console.log(cartService.total.value, salePrice);
    }

  }
};

const decreaseQuantity = async () => {
  if (Number(quantityRef.value) > 0) {

    if (Number(quantityRef.value) == 1) {
      deleteItem();
    }

    quantityRef.value = Number(quantityRef.value) - 1;
    props.cartDetail.total -= productDetail.value.product.price;

    props.cartDetail.quantity--;

    await cartService.updateCartDetail(props.cartDetail);

    let salePrice = productDetail.value.product.price * (1 - props.cartDetail.productDetail.product.salePercent / 100);
    salePrice = Math.floor(salePrice / 1000);
    salePrice *= 1000;

    if (isChecked.value) {
      cartService.total.value -= Number(salePrice);
      cartService.subTotal.value -= Number(salePrice);
      cartService.cartQuantity.value--;
      console.log(cartService.total.value, salePrice);
    }

  }
};

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const formattedPrice = computed(() => {
  return VND.format(Number(props.cartDetail.total));
});

const formattedSalePrice = computed(() => {
  let salePrice = props.cartDetail.total * (1 - props.cartDetail.productDetail.product.salePercent / 100);
  salePrice = Math.floor(salePrice / 1000);
  salePrice *= 1000;
  return VND.format(salePrice);
})

const deleteItem = async () => {
  (await cartService.deleteCartDetail(props.cartDetail.id));

  if (quantityRef.value != 0) {
    let salePrice = props.cartDetail.total * (1 - props.cartDetail.productDetail.product.salePercent / 100);
    salePrice = Math.floor(salePrice / 1000);
    salePrice *= 1000;

    cartService.cartItems.value.pop(props.cartDetail.id);

    cartService.cartQuantity.value -= quantityRef.value as number;
    quantityRef.value = 0;

    if (isChecked.value) {
      cartService.total.value -= salePrice;
      cartService.subTotal.value -= salePrice;

      if (cartService.total.value < 0) {
        cartService.total.value = 0;
      }

      cartService.cartDetailsToOrder.value.pop(props.cartDetail.id);

      const regularArray = Object.keys(cartService.cartDetailsToOrder.value).map((key) => cartService.cartDetailsToOrder.value[Number(key)]);

      cartService.cartDetailsToOrder.value = regularArray;
    }
  }

  isVisible.value = false;

}

const addToOrder = (event) => {
  isChecked.value = event.target.checked;
  console.log('Checked:', isChecked);

  let cartDetailPrice = Math.floor(props.cartDetail.total * (100 - props.cartDetail.productDetail?.product.salePercent) / 100000) * 1000;

  if (isChecked.value) {
    cartService.cartDetailsToOrder.value.push(props.cartDetail.id);
    setTimeout(() => {
      cartService.total.value += cartDetailPrice;
      cartService.subTotal.value += cartDetailPrice;
    }, 100);
  } else {
    cartService.cartDetailsToOrder.value.pop(props.cartDetail.id);
    setTimeout(() => {
      cartService.total.value -= cartDetailPrice;
      cartService.subTotal.value -= cartDetailPrice;
    }, 100);
  }

}

</script>

<template>
  <div class="cart-item" v-if="isVisible">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" :checked="false"
        @change="addToOrder($event)">
      <label class="form-check-label" for="flexCheckDefault">
      </label>
    </div>
    <div class="cart-item-thumbnail">
      <div class="cart-item-thumbnail-image">
        <div class="cart-item-thumbnail-block">
          <img :src="productDetail.imageLinks?.split(', ')[0].toString().replace('width=80,height=80', 'width=300,height=442')" :alt="productDetail.product.name.toString()"
            style="opacity: 1">

        </div>
      </div>
    </div>
    <div class="cart-item-content">
      <div class="cart-item-content-wrapper">
        <div class="cart-item-content-inner" style="opacity: 1">
          <h3 class="cart-item-title">
            <router-link :to="{name: 'product', params: { id: productDetail.product.id.toString() }}" class="header_actions_button-link">
              {{ productDetail.product.name.toString() }}</router-link>
            <!-- <a href="/product/quan-ut-jogger-da-nang-co-gian" target="_blank"></a> -->
          </h3>
          <div class="cart-item-variant"> {{ productDetail.color.toString() }} / {{ productDetail.size.toString() }}
          </div>
        </div>
        <div class="cart-item-actions" style="opacity: 1">
          <div class="cart-item-selects">
            <div dir="auto" class="v-select vue-select vs--single vs--unsearchable">
              <div id="vs4-combobox" role="combobox" aria-expanded="false" aria-owns="vs4-listbox"
                aria-label="Search for option" class="vs-dropdown-toggle">
                <div class="vs-selected-options">
                  <span class="vs-selected"> {{ productDetail.color.toString() }} </span>
                  <input readonly="true" aria-autocomplete="list" aria-labelledby="vs4-combobox"
                    aria-controls="vs4-listbox" type="search" autocomplete="off" class="vs-search" />
                </div>
                <div class="vs-actions">
                  <button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs-clear"
                    style="display: none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                      <path
                        d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z">
                      </path>
                    </svg>
                  </button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation"
                    class="vs-open-indicator">
                    <path
                      d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
                    </path>
                  </svg>
                  <div class="vs-spinner" style="display: none">
                    Loading...
                  </div>
                </div>
              </div>
              <ul id="vs4-listbox" role="listbox" style="display: none; visibility: hidden"></ul>
            </div>
            <div dir="auto" class="v-select vue-select vs--single vs--unsearchable">
              <div id="vs5-combobox" role="combobox" aria-expanded="false" aria-owns="vs5-listbox"
                aria-label="Search for option" class="vs-dropdown-toggle custom-cursor-on-hover">
                <div class="vs-selected-options">
                  <span class="vs-selected"> {{ productDetail.size.toString() }} </span>
                  <input readonly="true" aria-autocomplete="list" aria-labelledby="vs5-combobox"
                    aria-controls="vs5-listbox" type="search" autocomplete="off" class="vs-search" />
                </div>
                <div class="vs-actions">
                  <button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs-clear"
                    style="display: none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                      <path
                        d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z">
                      </path>
                    </svg>
                  </button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation"
                    class="vs-open-indicator">
                    <path
                      d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
                    </path>
                  </svg>
                  <div class="vs-spinner" style="display: none">
                    Loading...
                  </div>
                </div>
              </div>
              <ul id="vs5-listbox" role="listbox" style="display: none; visibility: hidden"></ul>
            </div>
          </div>
          <div class="cart-item-quantity">
            <div class="quantity-box">
              <button class="quantity-box-decrease" @click="decreaseQuantity">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <line stroke-width="1.5" id="svg_6" y2="8" x2="10" y1="8" x1="5" stroke="#000000" fill="none">
                    </line>
                  </g>
                </svg>
              </button>
              <input type="text" v-bind:value="quantityRef" />
              <button class="quantity-box-increase" @click="increaseQuantity">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <line stroke-width="1.5" y2="8" x2="12.9695" y1="8" x1="3.0305" stroke="#000000" fill="none"></line>
                    <line stroke-width="1.5" transform="rotate(90, 8, 8)" y2="8" x2="13" y1="8" x1="3" stroke="#000000"
                      fill="none"></line>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div class="cart-item-price">
            <span> {{ formattedSalePrice }} </span>
            <del v-show="formattedSalePrice != formattedPrice">{{ formattedPrice }}</del>
          </div>
        </div>
        <button class="cart-item-remove" @click="deleteItem">
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
              fill="#242424"></path>
            <path
              d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
              fill="#242424"></path>
          </svg>
          <span>Xóa</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  padding-bottom: 21px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.cart-item:not(:last-child) {
  margin-bottom: 2rem;
}

.cart-item-thumbnail {
  width: 120px;
}

.cart-item-thumbnail-image {
  border-radius: 2px;
  overflow: hidden;
}

.cart-item-thumbnail-block {
  position: relative;
  width: 126px;
}

img:not(.home-banner) {
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
}

.cart-item .cart-item-multiselect {
  border-radius: 2px;
}

.cart-item-multiselect {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: hsla(0, 0%, 100%, 0.9);
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  display: flex;
  opacity: 0;
}

.custom-checkbox-label,
.custom-radio-label {
  display: flex;
  cursor: pointer;
}

.cart-item-multiselect .custom-checkbox {
  width: 40px;
  height: 40px;
  border-radius: 16px;
  flex: 0 0 40px;
}

.custom-checkbox {
  border-radius: 5px;
}

.custom-checkbox input,
.custom-radio input {
  display: none;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

/* .cart-item-multiselect .checkmark {
  border-bottom: 4px solid #2f5acf;
  border-right: 4px solid #2f5acf;
  width: 12px;
  height: 20px;
} */

/* .custom-checkbox .checkmark {
  transform: translate(-50%, -63%) rotate(45deg);
  border-bottom: 3px solid #2f5acf;
  border-right: 3px solid #2f5acf;
  width: 7px;
  height: 10px;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
} */

.custom-checkbox .checkmark,
.custom-radio .checkmark {
  /* display: none; */
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: #2f5acf;
}

.cart-item-content {
  flex: 1;
  display: flex;
  position: relative;
}

.cart-item-content-wrapper {
  display: flex;
  flex-flow: column;
  flex: 1;
  padding-left: 10px;
}

.cart-item-content-inner {
  margin-bottom: 20px;
}

.cart-item-actions {
  flex: 1;
  display: flex;
}

.cart-item-selects {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex: 1 0 0;
}

.cart-item-selects .v-select {
  max-width: 50%;
  height: -moz-fit-content;
  height: fit-content;
}

.cart-item-selects .vs-dropdown-toggle {
  display: flex;
  height: 42px;
  border-radius: 100vmax;
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  font-size: 16px;
  line-height: 20px;
  padding: 0 12px;
}

.vs--unsearchable .vs-dropdown-toggle {
  cursor: pointer;
}

.vue-select .vs-selected,
.vue-select .vs-selected-options {
  padding: 0;
  margin: 0;
  align-items: center;
}

.vs-selected-options {
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 2px;
  position: relative;
}

.vue-select .vs-selected {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vs--single .vs-selected {
  background-color: transparent;
  border-color: transparent;
}

.cart-item-selects .v-select .vs-search {
  display: none;
}

.vs--unsearchable:not(.vs--disabled) .vs-search {
  cursor: pointer;
}

.vue-select .vs-search {
  margin: 0;
  padding: 0;
}

.vs-actions {
  display: flex;
  align-items: center;
  padding: 4px 6px 0 3px;
}

.cart-item-selects .vs-actions {
  margin-left: 5px;
}

.vs-clear {
  fill: rgba(60, 60, 60, 0.5);
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8px;
}

.cart-item-selects .v-select {
  max-width: 50%;
  height: -moz-fit-content;
  height: fit-content;
}

.cart-item-quantity {
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
}

.cart-item-quantity .quantity-box {
  width: 95px;
  height: 44px;
  border: 1px solid #d9d9d9;
  border-radius: 100vmax;
  box-sizing: border-box;
}

.quantity-box {
  background: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  height: 25px;
  width: 77px;
}

.cart-item-quantity .quantity-box {
  width: 95px;
  height: 44px;
  border: 1px solid #d9d9d9;
  border-radius: 100vmax;
  box-sizing: border-box;
}

.quantity-box-decrease,
.quantity-box-increase {
  display: flex;
  height: 100%;
  width: 25px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  line-height: 20px;
  transition: 0.2s all;
  border: none;
  background-color: white;
  padding: 0;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
}

.cart-item-quantity .quantity-box-decrease,
.cart-item-quantity .quantity-box-increase {
  flex: 1;
}

.quantity-box input {
  border: none;
  padding: 5px 0;
  margin: 0;
  height: 100%;
  width: 25px;
  text-align: center;
  font-size: 0.8rem;
}

button,
input {
  overflow: visible;
}

.quantity-box-increase {
  border-radius: 0 8px 8px 0;
}

.cart-item-price {
  display: flex;
  flex-flow: column;
  text-align: right;
}

.cart-item-remove {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  font-size: 14px;
  font-weight: 400;
  line-height: 17.75px;
  color: #242424;
  padding: 0;
  cursor: pointer;
}

.checkmark-toggle {
  width: 40px;
  height: 40px;
  background-color: #2f5acf;
}
</style>
import { number } from 'yup';
