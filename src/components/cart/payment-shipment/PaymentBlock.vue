<template>
  <div class="title">Hình thức thanh toán</div>
  <div>
    <form>
      <label for="payment-zalopay" class="payment-method__item active"
        ><span class="payment-method__item-custom-checkbox custom-radio"
          ><input
            type="radio"
            id="payment-zalopay"
            name="payment-method"
            autocomplete="off"
            value="zalopay" />
          <span class="checkmark"></span
        ></span>
        <span class="payment-method__item-icon-wrapper"
          ><img
            src="https://www.coolmate.me/images/logo-zalopay.svg"
            alt="Ví điện tử ZaloPay"
        /></span>
        <span class="payment-method__item-name"
          >Ví điện tử ZaloPay <br />
          Thẻ ATM / Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)</span
        ></label
      ><label
        for="payment-COD"
        class="payment-method__item custom-cursor-on-hover"
        ><span class="payment-method__item-custom-checkbox custom-radio"
          ><input
            type="radio"
            id="payment-COD"
            name="payment-method"
            autocomplete="off"
            value="COD" />
          <span class="checkmark"></span
        ></span>
        <span class="payment-method__item-icon-wrapper"
          ><img
            src="https://www.coolmate.me/images/COD.svg"
            alt="COD <br>Thanh toán khi nhận hàng"
        /></span>
        <span class="payment-method__item-name"
          >COD <br />Thanh toán khi nhận hàng</span
        ></label
      ><label for="payment-momo" class="payment-method__item"
        ><span class="payment-method__item-custom-checkbox custom-radio"
          ><input
            type="radio"
            id="payment-momo"
            name="payment-method"
            autocomplete="off"
            value="momo" />
          <span class="checkmark"></span
        ></span>
        <span class="payment-method__item-icon-wrapper"
          ><img
            src="https://www.coolmate.me/images/momo-icon.png"
            alt="Thanh Toán MoMo"
        /></span>
        <span class="payment-method__item-name">Thanh Toán MoMo</span></label
      ><label for="payment-shopeepay" class="payment-method__item"
        ><span class="payment-method__item-custom-checkbox custom-radio"
          ><input
            type="radio"
            id="payment-shopeepay"
            name="payment-method"
            autocomplete="off"
            value="shopeepay" />
          <span class="checkmark"></span
        ></span>
        <span class="payment-method__item-icon-wrapper"
          ><img
            src="https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png"
            alt="Ví ShopeePay <br><i>Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay</i>"
        /></span>
        <span class="payment-method__item-name"
          >Ví ShopeePay <br /><i
            >Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng
            ShopeePay</i
          ></span
        ></label
      ><label for="payment-vnpay" class="payment-method__item"
        ><span class="payment-method__item-custom-checkbox custom-radio"
          ><input
            type="radio"
            id="payment-vnpay"
            name="payment-method"
            autocomplete="off"
            value="vnpay" />
          <span class="checkmark"></span
        ></span>
        <span class="payment-method__item-icon-wrapper"
          ><img
            src="https://www.coolmate.me/images/vnpay.png"
            alt="Thẻ ATM<br>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)<br>VNPay QR"
        /></span>
        <span class="payment-method__item-name"
          >Thẻ ATM<br />Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)<br />VNPay
          QR</span
        ></label
      ><label for="payment-vietqr" class="payment-method__item"
        ><span class="payment-method__item-custom-checkbox custom-radio"
          ><input
            type="radio"
            id="payment-vietqr"
            name="payment-method"
            autocomplete="off"
            value="vietqr" />
          <span class="checkmark"></span
        ></span>
        <span class="payment-method__item-icon-wrapper"
          ><img
            src="https://gateway.zalopay.vn/image/emvco/icon-vietqr.svg"
            alt="Quét QR &amp; Thanh toán bằng ứng dụng ngân hàng<br/>Mờ ứng dụng ngân hàng để thanh toán"
        /></span>
        <span class="payment-method__item-name"
          >Quét QR &amp; Thanh toán bằng ứng dụng ngân hàng<br />Mờ ứng dụng
          ngân hàng để thanh toán</span
        ></label
      ><label
        for="payment-flex_money"
        class="payment-method__item custom-cursor-on-hover"
        ><span class="payment-method__item-custom-checkbox custom-radio"
          ><input
            type="radio"
            id="payment-flex_money"
            name="payment-method"
            autocomplete="off"
            value="flex_money" />
          <span class="checkmark"></span
        ></span>
        <span class="payment-method__item-icon-wrapper"
          ><img
            src="https://sandbox.flexmoney.vn/static/media/logo-login.cd69de6e7b8ff1cc0e4d74762ee7d40b.svg"
            alt="Chuyển khoản liên ngân hàng bằng QR Code<br>Chuyển tiền qua ví điện tử (MoMo, Zalopay,...)"
        /></span>
        <span class="payment-method__item-name"
          >Chuyển khoản liên ngân hàng bằng QR Code<br />Chuyển tiền qua ví điện
          tử (MoMo, Zalopay,...)</span
        ></label
      >
    </form>
  </div>
  <p class="cart-return-text">
    Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả
    lại sản phẩm. Tìm hiểu thêm
    <a href="/page/chinh-sach-doi-tra" target="_blank"><b>tại đây</b></a
    >.
  </p>
  <!-- <input type="hidden" id="gclid_field" name="gclid_field" value="" /> -->
  <!-- <button class="checkout-btn fixed"> -->
  <button class="checkout-btn">
    Thanh toán
    <span>2.133k</span>
    <span>(ZaloPay)</span>
    <span> - Đổi trả 60 ngày</span>
  </button>
</template>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 700;
  margin: 2rem 0 1rem;
}
.payment-method__item:not(:last-child) {
  margin-bottom: 1rem;
}
.payment-method__item {
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  padding: 15px 20px;
  cursor: pointer;
  transition: 0.2s all;
  opacity: 0.6;
}
.payment-method__item.active,
.payment-method__item:not(.disabled):hover {
  border: 1px solid #2f5acf;
  opacity: 1;
}
.custom-checkbox,
.custom-radio {
  display: block;
  position: relative;
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  transition: all 0.2s;
}
.custom-checkbox input,
.custom-radio input {
  display: none;
}
.custom-checkbox .checkmark,
.custom-radio .checkmark {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: #2f5acf;
}
.payment-method__item-icon-wrapper {
  margin: 0 1.5rem;
}
.payment-method__item-icon-wrapper img {
  min-width: 35px;
  max-height: 35px;
  max-width: 55px;
}
[for="payment-zalopay"] span.payment-method__item-name {
  font-size: 0.8rem;
}
[for="payment-zalopay"] .payment-method__item-name:after {
  content: "Nhập mã ZLPCM trên Zalopay - giảm thêm 20k cho đơn từ 600k";
  display: block;
  white-space: pre;
  color: #008fe5;
}
.payment-method__item.active .payment-method__item-custom-checkbox,
.payment-method__item:not(.disabled):hover
  .payment-method__item-custom-checkbox {
  border: 1px solid #2f5acf;
}

a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}
button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  -webkit-box-shadow: inset 0 0 0 9999px transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  border-radius: 0;
}
.checkout-btn {
  border-radius: 16px;
  height: 55px;
  width: 100%;
  padding: 15px 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.checkout-btn:hover {
  background-color: #d9d9d9;
  color: #000;
}
</style>
