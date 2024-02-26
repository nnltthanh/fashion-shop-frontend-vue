<template>
    <div class="container">
      <div class="grid">
        <div
          class="grid__column seven-twelfths mobile--one-whole cart-left-section"
        >
          <div>
            <div class="cart-coolcash-box">
              <div class="cart-coolcash-box__wrapper">
                <div class="cart-coolcash-box__grid">
                  <div class="cart-coolcash-box__left">
                    <a href="#" class="cart-coolcash-box__name">
                      Hi, Thanh Nguyễn
                    </a>
                    <p class="cart-coolcash-box__content-text">
                      Tổng đơn ( 8 sản phẩm)
                      <span>2.133.000đ</span>
                    </p>
                    <p class="cart-coolcash-box__content-text">
                      Hoàn tiền
                      <b
                        ><span
                          ><img
                            width="20px"
                            height="20px"
                            src="https://mcdn.coolmate.me/image/December2023/mceclip0_65.png"
                            alt=""
                          />
                          22.000 CoolCash</span
                        ></b
                      >
                    </p>
                  </div>
                  <div class="cart-coolcash-box__right"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-section">
            <div class="title-with-actions">
              <div class="title">Thông tin vận chuyển</div>
              <div class="action">
                <a href="#" class="flex align--center"
                  ><img
                    src=""
                    alt="address_book_icon"
                    class="address_book_icon"
                  />
                  Chọn từ sổ địa chỉ
                </a>
              </div>
            </div>
            <div
              data-v-eac0ab8e=""
              id="customer-info-block"
              customerinfo="[object Object]"
            >
              <div data-v-eac0ab8e="" class="grid">
                <div data-v-eac0ab8e="" class="grid__column six-twelfths">
                  <input
                    data-v-eac0ab8e=""
                    type="text"
                    name="full_name"
                    placeholder="Họ tên"
                    class="form-control"
                  />
                </div>
                <div data-v-eac0ab8e="" class="grid__column six-twelfths">
                  <input
                    data-v-eac0ab8e=""
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại"
                    class="form-control"
                  />
                </div>
              </div>
              <div data-v-eac0ab8e="" class="grid">
                <div data-v-eac0ab8e="" class="grid__column">
                  <input
                    data-v-eac0ab8e=""
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="form-control custom-cursor-default-hover"
                    disabled="true"
                  />
                </div>
                <div data-v-eac0ab8e="" class="grid__column">
                  <div data-v-eac0ab8e="" class="address-block">
                    <input
                      data-v-eac0ab8e=""
                      type="text"
                      name="address"
                      placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"
                      autocomplete="off"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div data-v-eac0ab8e="" class="grid">
                <div
                  data-v-eac0ab8e=""
                  class="grid__column four-twelfths mobile--one-whole"
                >
                  <div
                    data-v-eac0ab8e=""
                    dir="auto"
                    class="v-select vue-select vs--single vs--searchable"
                    name="nhanh_city"
                  >
                    <div
                      id="vs1__combobox"
                      role="combobox"
                      aria-expanded="false"
                      aria-owns="vs1__listbox"
                      aria-label="Search for option"
                      class="vs__dropdown-toggle"
                    >
                      <div class="vs__selected-options">
                        <span class="vs__selected"> Cần Thơ </span>
                        <input
                          aria-autocomplete="list"
                          aria-labelledby="vs1__combobox"
                          aria-controls="vs1__listbox"
                          type="search"
                          autocomplete="off"
                          class="vs__search"
                        />
                      </div>
                      <div class="vs__actions">
                        <button
                          type="button"
                          title="Clear Selected"
                          aria-label="Clear Selected"
                          class="vs__clear"
                          style="display: none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                          >
                            <path
                              d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                            ></path>
                          </svg>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="10"
                          role="presentation"
                          class="vs__open-indicator"
                        >
                          <path
                            d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                          ></path>
                        </svg>
                        <div class="vs__spinner" style="display: none">
                          Loading...
                        </div>
                      </div>
                    </div>
                    <ul
                      id="vs1__listbox"
                      role="listbox"
                      style="display: none; visibility: hidden"
                    ></ul>
                  </div>
                </div>
                <div
                  data-v-eac0ab8e=""
                  class="grid__column four-twelfths mobile--one-whole"
                >
                  <div
                    data-v-eac0ab8e=""
                    dir="auto"
                    class="v-select vue-select vs--single vs--searchable"
                    name="nhanh_district"
                  >
                    <div
                      id="vs2__combobox"
                      role="combobox"
                      aria-expanded="false"
                      aria-owns="vs2__listbox"
                      aria-label="Search for option"
                      class="vs__dropdown-toggle"
                    >
                      <div class="vs__selected-options">
                        <span class="vs__selected"> Quận Ninh Kiều </span>
                        <input
                          aria-autocomplete="list"
                          aria-labelledby="vs2__combobox"
                          aria-controls="vs2__listbox"
                          type="search"
                          autocomplete="off"
                          class="vs__search"
                        />
                      </div>
                      <div class="vs__actions">
                        <button
                          type="button"
                          title="Clear Selected"
                          aria-label="Clear Selected"
                          class="vs__clear"
                          style="display: none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                          >
                            <path
                              d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                            ></path>
                          </svg>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="10"
                          role="presentation"
                          class="vs__open-indicator"
                        >
                          <path
                            d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                          ></path>
                        </svg>
                        <div class="vs__spinner" style="display: none">
                          Loading...
                        </div>
                      </div>
                    </div>
                    <ul
                      id="vs2__listbox"
                      role="listbox"
                      style="display: none; visibility: hidden"
                    ></ul>
                  </div>
                </div>
                <div
                  data-v-eac0ab8e=""
                  class="grid__column four-twelfths mobile--one-whole"
                >
                  <div
                    data-v-eac0ab8e=""
                    dir="auto"
                    class="v-select vue-select vs--single vs--searchable"
                    name="nhanh_ward"
                    id="nhanh_ward"
                  >
                    <div
                      id="vs3__combobox"
                      role="combobox"
                      aria-expanded="false"
                      aria-owns="vs3__listbox"
                      aria-label="Search for option"
                      class="vs__dropdown-toggle"
                    >
                      <div class="vs__selected-options">
                        <input
                          placeholder="Chọn Phường/Xã"
                          aria-autocomplete="list"
                          aria-labelledby="vs3__combobox"
                          aria-controls="vs3__listbox"
                          type="search"
                          autocomplete="off"
                          class="vs__search"
                        />
                      </div>
                      <div class="vs__actions">
                        <button
                          type="button"
                          title="Clear Selected"
                          aria-label="Clear Selected"
                          class="vs__clear"
                          style="display: none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                          >
                            <path
                              d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                            ></path>
                          </svg>
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="10"
                          role="presentation"
                          class="vs__open-indicator"
                        >
                          <path
                            d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                          ></path>
                        </svg>
                        <div class="vs__spinner" style="display: none">
                          Loading...
                        </div>
                      </div>
                    </div>
                    <ul
                      id="vs3__listbox"
                      role="listbox"
                      style="display: none; visibility: hidden"
                    ></ul>
                  </div>
                </div>
              </div>
              <div data-v-eac0ab8e="" class="grid">
                <div data-v-eac0ab8e="" class="grid__column">
                  <input
                    data-v-eac0ab8e=""
                    type="text"
                    name="cnote"
                    placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="cart-section cart-payment-scroll">
            <div class="title">Hình thức thanh toán</div>
            <div >
              <form >
                <label
                  
                  for="payment-zalopay"
                  class="payment-method__item active"
                  ><span
                    
                    class="payment-method__item-custom-checkbox custom-radio"
                    ><input
                      
                      type="radio"
                      id="payment-zalopay"
                      name="payment-method"
                      autocomplete="off"
                      value="zalopay" />
                    <span  class="checkmark"></span
                  ></span>
                  <span
                    
                    class="payment-method__item-icon-wrapper"
                    ><img
                      
                      src="https://www.coolmate.me/images/logo-zalopay.svg"
                      alt="Ví điện tử ZaloPay"
                  /></span>
                  <span  class="payment-method__item-name"
                    >Ví điện tử ZaloPay <br />
                    Thẻ ATM / Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit
                    card)</span
                  ></label
                ><label
                  
                  for="payment-COD"
                  class="payment-method__item custom-cursor-on-hover"
                  ><span
                    
                    class="payment-method__item-custom-checkbox custom-radio"
                    ><input
                      
                      type="radio"
                      id="payment-COD"
                      name="payment-method"
                      autocomplete="off"
                      value="COD" />
                    <span  class="checkmark"></span
                  ></span>
                  <span
                    
                    class="payment-method__item-icon-wrapper"
                    ><img
                      
                      src=""
                      alt="COD <br>Thanh toán khi nhận hàng"
                  /></span>
                  <span  class="payment-method__item-name"
                    >COD <br />Thanh toán khi nhận hàng</span
                  ></label
                ><label
                  
                  for="payment-momo"
                  class="payment-method__item"
                  ><span
                    
                    class="payment-method__item-custom-checkbox custom-radio"
                    ><input
                      
                      type="radio"
                      id="payment-momo"
                      name="payment-method"
                      autocomplete="off"
                      value="momo" />
                    <span  class="checkmark"></span
                  ></span>
                  <span
                    
                    class="payment-method__item-icon-wrapper"
                    ><img
                      
                      src=""
                      alt="Thanh Toán MoMo"
                  /></span>
                  <span  class="payment-method__item-name"
                    >Thanh Toán MoMo</span
                  ></label
                ><label
                  
                  for="payment-shopeepay"
                  class="payment-method__item"
                  ><span
                    
                    class="payment-method__item-custom-checkbox custom-radio"
                    ><input
                      
                      type="radio"
                      id="payment-shopeepay"
                      name="payment-method"
                      autocomplete="off"
                      value="shopeepay" />
                    <span  class="checkmark"></span
                  ></span>
                  <span
                    
                    class="payment-method__item-icon-wrapper"
                    ><img
                      
                      src="https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png"
                      alt="Ví ShopeePay <br><i>Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay</i>"
                  /></span>
                  <span  class="payment-method__item-name"
                    >Ví ShopeePay <br /><i
                      >Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán
                      bằng ShopeePay</i
                    ></span
                  ></label
                ><label
                  
                  for="payment-vnpay"
                  class="payment-method__item"
                  ><span
                    
                    class="payment-method__item-custom-checkbox custom-radio"
                    ><input
                      
                      type="radio"
                      id="payment-vnpay"
                      name="payment-method"
                      autocomplete="off"
                      value="vnpay" />
                    <span  class="checkmark"></span
                  ></span>
                  <span
                    
                    class="payment-method__item-icon-wrapper"
                    ><img
                      
                      src="https://www.coolmate.me/images/vnpay.png"
                      alt="Thẻ ATM<br>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)<br>VNPay QR"
                  /></span>
                  <span  class="payment-method__item-name"
                    >Thẻ ATM<br />Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit
                    card)<br />VNPay QR</span
                  ></label
                ><label
                  
                  for="payment-vietqr"
                  class="payment-method__item"
                  ><span
                    
                    class="payment-method__item-custom-checkbox custom-radio"
                    ><input
                      
                      type="radio"
                      id="payment-vietqr"
                      name="payment-method"
                      autocomplete="off"
                      value="vietqr" />
                    <span  class="checkmark"></span
                  ></span>
                  <span
                    
                    class="payment-method__item-icon-wrapper"
                    ><img
                      
                      src="https://gateway.zalopay.vn/image/emvco/icon-vietqr.svg"
                      alt="Quét QR &amp; Thanh toán bằng ứng dụng ngân hàng<br/>Mờ ứng dụng ngân hàng để thanh toán"
                  /></span>
                  <span  class="payment-method__item-name"
                    >Quét QR &amp; Thanh toán bằng ứng dụng ngân hàng<br />Mờ ứng
                    dụng ngân hàng để thanh toán</span
                  ></label
                ><label
                  
                  for="payment-flex_money"
                  class="payment-method__item custom-cursor-on-hover"
                  ><span
                    
                    class="payment-method__item-custom-checkbox custom-radio"
                    ><input
                      
                      type="radio"
                      id="payment-flex_money"
                      name="payment-method"
                      autocomplete="off"
                      value="flex_money" />
                    <span  class="checkmark"></span
                  ></span>
                  <span
                    
                    class="payment-method__item-icon-wrapper"
                    ><img
                      
                      src="https://sandbox.flexmoney.vn/static/media/logo-login.cd69de6e7b8ff1cc0e4d74762ee7d40b.svg"
                      alt="Chuyển khoản liên ngân hàng bằng QR Code<br>Chuyển tiền qua ví điện tử (MoMo, Zalopay,...)"
                  /></span>
                  <span  class="payment-method__item-name"
                    >Chuyển khoản liên ngân hàng bằng QR Code<br />Chuyển tiền qua
                    ví điện tử (MoMo, Zalopay,...)</span
                  ></label
                >
              </form>
            </div>
            <p class="cart-return-text">
              Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có
              thể trả lại sản phẩm. Tìm hiểu thêm
              <a href="/page/chinh-sach-doi-tra" target="_blank"><b>tại đây</b></a
              >.
            </p>
            <input type="hidden" id="gclid_field" name="gclid_field" value="" />
            <button class="checkout-btn fixed">
              Thanh toán
              <span>2.133k</span>
              <span>(ZaloPay)</span>
              <span> - Đổi trả 60 ngày</span>
            </button>
          </div>
        </div>
        <div class="grid__column five-twelfths mobile--one-whole">
          <div class="cart-section">
            <div class="title">Giỏ hàng</div>
            <div data-v-facb80e0="">
              <div
                data-v-facb80e0=""
                class="dummy-cart-items"
                style="display: none"
              >
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-74477e59=""
                  data-v-facb80e0=""
                  class="grid dummy-cart-item"
                >
                  <div data-v-74477e59="" class="grid__column four-twelfths flex">
                    <div
                      data-v-74477e59=""
                      class="dummy-cart-item__thumbnail-block"
                    >
                      <div
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail"
                      ></div>
                      <span
                        data-v-74477e59=""
                        class="dummy-cart-item__thumbnail-quantity"
                      ></span>
                    </div>
                  </div>
                  <div data-v-74477e59="" class="grid__column eight-twelfths">
                    <div data-v-74477e59="" class="dummy-cart-item__block">
                      <div data-v-74477e59="" class="dummy-cart-item__info">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__title"
                        ></div>
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__variant"
                        ></div>
                      </div>
                      <div data-v-74477e59="" class="dummy-cart-item__actions">
                        <div
                          data-v-74477e59=""
                          class="dummy-cart-item__price"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-facb80e0="" class="cart-items__header">
                <span data-v-facb80e0="">Mô tả sản phẩm</span>
                <span data-v-facb80e0="">Số lượng</span>
                <span data-v-facb80e0="">Giá</span>
              </div>
              <div data-v-facb80e0="" class="cart-items">
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/February2024/joggerutdanang4.jpg"
                          alt="Quần Jogger Nam UT đa năng"
                          style="opacity: 1"
                        />
                        <div class="cart-item__multiselect">
                          <label
                            for="select65798ace52b8b42f52482b67a90e7f17"
                            class="custom-checkbox-label"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select65798ace52b8b42f52482b67a90e7f17" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 1">
                        <h3 class="cart-item__title">
                          <a
                            href="/product/quan-ut-jogger-da-nang-co-gian"
                            target="_blank"
                            >Quần Jogger Nam UT đa năng</a
                          >
                        </h3>
                        <div class="cart-item__variant">Đen / L</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 1">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs4__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs4__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Đen </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs4__combobox"
                                  aria-controls="vs4__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs4__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs5__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs5__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle custom-cursor-on-hover"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> L </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs5__combobox"
                                  aria-controls="vs5__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs5__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <div data-v-3e8bcd48="" class="quantity-box">
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__decrease"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input data-v-3e8bcd48="" type="text" />
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__increase"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="cart-item-price">
                          <span> 381.000đ </span>
                          <del>499.000đ</del>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/December2023/boxer_short_ke_00016_copy.jpg"
                          alt="Pack 3 Quần Shorts Nam kẻ sọc Basics"
                          style="opacity: 0.5"
                        />
                        <div class="out_of_stock">
                          <span> Hết hàng </span>
                        </div>
                        <div class="cart-item__multiselect">
                          <label
                            for="select6583e98f952d32683c32a758aeb6e386"
                            class="custom-checkbox-label"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select6583e98f952d32683c32a758aeb6e386" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 0.5">
                        <h3 class="cart-item__title">
                          <a
                            href="/product/pack-3-quan-short-nam-boxer-ke-soc-thoang-mat"
                            target="_blank"
                            >Pack 3 Quần Shorts Nam kẻ sọc Basics</a
                          >
                        </h3>
                        <div class="cart-item__variant">Mix màu / 3XL</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 0.5">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs6__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs6__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Mix màu </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs6__combobox"
                                  aria-controls="vs6__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs6__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs7__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs7__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> 3XL </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs7__combobox"
                                  aria-controls="vs7__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs7__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <div data-v-3e8bcd48="" class="quantity-box">
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__decrease"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input data-v-3e8bcd48="" type="text" />
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__increase"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="cart-item-price">
                          <span> 199.000đ </span>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/October2023/ADT.CPv2.7.jpg"
                          alt="Áo dài tay Cotton Compact V2"
                          style="opacity: 1"
                        />
                        <div class="cart-item__multiselect">
                          <label
                            for="select6526cebfd68ec7220a5f154642edbc91"
                            class="custom-checkbox-label"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select6526cebfd68ec7220a5f154642edbc91" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 1">
                        <h3 class="cart-item__title">
                          <a
                            href="/product/ao-dai-tay-cotton-compact-v2"
                            target="_blank"
                            >Áo dài tay Cotton Compact V2</a
                          >
                        </h3>
                        <div class="cart-item__variant">Xanh Navy / M</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 1">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs8__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs8__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Xanh Navy </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs8__combobox"
                                  aria-controls="vs8__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs8__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs9__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs9__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> M </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs9__combobox"
                                  aria-controls="vs9__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs9__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <div data-v-3e8bcd48="" class="quantity-box">
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__decrease"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input data-v-3e8bcd48="" type="text" />
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__increase"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="cart-item-price">
                          <span> 179.000đ </span>
                          <del>269.000đ</del>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/November2023/23CMAW.CM003.24_8.jpg"
                          alt="Áo Khoác Nam chạy bộ Fast &amp; Free"
                          style="opacity: 1"
                        />
                        <div class="cart-item__multiselect">
                          <label
                            for="select65641ca5c9471b60cd3474ae54f1cee0"
                            class="custom-checkbox-label"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select65641ca5c9471b60cd3474ae54f1cee0" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 1">
                        <h3 class="cart-item__title">
                          <a
                            href="/product/ao-khoac-chay-bo-co-mu-fast-free-sieu-nhe-thoang-mat"
                            target="_blank"
                            >Áo Khoác Nam chạy bộ Fast &amp; Free</a
                          >
                        </h3>
                        <div class="cart-item__variant">Xám / M</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 1">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs10__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs10__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Xám </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs10__combobox"
                                  aria-controls="vs10__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs10__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs11__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs11__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> M </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs11__combobox"
                                  aria-controls="vs11__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs11__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <div data-v-3e8bcd48="" class="quantity-box">
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__decrease"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input data-v-3e8bcd48="" type="text" />
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__increase"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="cart-item-price">
                          <span> 429.000đ </span>
                          <del>599.000đ</del>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/June2023/1kaki-excool-xanhdam_(1).jpg"
                          alt="Quần Dài Nam Kaki Excool"
                          style="opacity: 1"
                        />
                        <div class="cart-item__multiselect">
                          <label
                            for="select61c41e2bee3fea6751714e9f93221a83"
                            class="custom-checkbox-label"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select61c41e2bee3fea6751714e9f93221a83" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 1">
                        <h3 class="cart-item__title">
                          <a
                            href="/product/quan-dai-kaki-excool-co-gian"
                            target="_blank"
                            >Quần Dài Nam Kaki Excool</a
                          >
                        </h3>
                        <div class="cart-item__variant">Đen / 3XL</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 1">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs12__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs12__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Đen </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs12__combobox"
                                  aria-controls="vs12__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs12__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs13__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs13__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> 3XL </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs13__combobox"
                                  aria-controls="vs13__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs13__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <div data-v-3e8bcd48="" class="quantity-box">
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__decrease"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input data-v-3e8bcd48="" type="text" />
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__increase"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="cart-item-price">
                          <span> 373.000đ </span>
                          <del>499.000đ</del>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/October2023/ST002.4_47.jpg"
                          alt="Áo Nỉ chui đầu Lifewear"
                          style="opacity: 1"
                        />
                        <div class="cart-item__multiselect">
                          <label
                            for="select6524f32ddaef542dd35f3772e56f66ec"
                            class="custom-checkbox-label"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select6524f32ddaef542dd35f3772e56f66ec" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 1">
                        <h3 class="cart-item__title">
                          <a
                            href="/product/ao-ni-chui-dau-lifewear"
                            target="_blank"
                            >Áo Nỉ chui đầu Lifewear</a
                          >
                        </h3>
                        <div class="cart-item__variant">Xám sáng / M</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 1">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs14__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs14__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Xám sáng </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs14__combobox"
                                  aria-controls="vs14__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs14__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs15__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs15__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle custom-cursor-on-hover"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> M </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs15__combobox"
                                  aria-controls="vs15__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs15__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <div data-v-3e8bcd48="" class="quantity-box">
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__decrease"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input data-v-3e8bcd48="" type="text" />
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__increase"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="cart-item-price">
                          <span> 199.000đ </span>
                          <del>339.000đ</del>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/November2023/23CMCW.JE003.7_17.jpg"
                          alt="Quần Jeans Nam Basics dáng Straight"
                          style="opacity: 1"
                        />
                        <div class="cart-item__multiselect">
                          <label
                            for="select65517e27b03b3f20da06e50ee8028eb1"
                            class="custom-checkbox-label"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select65517e27b03b3f20da06e50ee8028eb1" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 1">
                        <h3 class="cart-item__title">
                          <a
                            href="/product/quan-jeans-nam-basics-dang-regular-straight"
                            target="_blank"
                            >Quần Jeans Nam Basics dáng Straight</a
                          >
                        </h3>
                        <div class="cart-item__variant">Xanh đậm / 31</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 1">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs16__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs16__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Xanh đậm </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs16__combobox"
                                  aria-controls="vs16__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs16__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs17__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs17__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> 31 </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs17__combobox"
                                  aria-controls="vs17__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs17__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <div data-v-3e8bcd48="" class="quantity-box">
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__decrease"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input data-v-3e8bcd48="" type="text" />
                            <button
                              data-v-3e8bcd48=""
                              class="quantity-box__increase"
                            >
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="cart-item-price">
                          <span> 373.000đ </span>
                          <del>499.000đ</del>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-v-facb80e0="" class="cart-item">
                  <div class="cart-item-thumbnail">
                    <div class="cart-item-thumbnail__image">
                      <div class="cart-item__thumbnail-block">
                        <img
                          src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/April2022/DSC05753_copy1.jpg"
                          alt="Quà tặng - Áo thun thể thao nam ProMax-S1"
                          style="opacity: 1"
                        />
                        <div class="cart-item__multiselect">
                          <label
                            for="select6294598ce8aeb331620851301c6ee7f6"
                            class="custom-checkbox-label custom-cursor-on-hover"
                            ><span class="custom-checkbox"
                              ><input
                                type="checkbox"
                                id="select6294598ce8aeb331620851301c6ee7f6" />
                              <span class="checkmark"></span></span
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-content__wrapper">
                      <div class="cart-item-content__inner" style="opacity: 1">
                        <span class="cart-item__tags giveaway_all"
                          ><span>Quà tặng</span></span
                        >
                        <h3 class="cart-item__title">
                          <a
                            href="/product/qt-ao-thun-the-thao-nam-promax-s1-qua-tang"
                            target="_blank"
                            >Quà tặng - Áo thun thể thao nam ProMax-S1</a
                          >
                        </h3>
                        <div class="cart-item__variant">Xanh Aqua / L</div>
                      </div>
                      <div class="cart-item-actions" style="opacity: 1">
                        <div class="cart-item-selects">
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs18__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs18__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> Xanh Aqua </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs18__combobox"
                                  aria-controls="vs18__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs18__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                          <div
                            dir="auto"
                            class="v-select vue-select vs--single vs--unsearchable"
                          >
                            <div
                              id="vs19__combobox"
                              role="combobox"
                              aria-expanded="false"
                              aria-owns="vs19__listbox"
                              aria-label="Search for option"
                              class="vs__dropdown-toggle"
                            >
                              <div class="vs__selected-options">
                                <span class="vs__selected"> L </span>
                                <input
                                  readonly="true"
                                  aria-autocomplete="list"
                                  aria-labelledby="vs19__combobox"
                                  aria-controls="vs19__listbox"
                                  type="search"
                                  autocomplete="off"
                                  class="vs__search"
                                />
                              </div>
                              <div class="vs__actions">
                                <button
                                  type="button"
                                  title="Clear Selected"
                                  aria-label="Clear Selected"
                                  class="vs__clear"
                                  style="display: none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                  >
                                    <path
                                      d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                    ></path>
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="10"
                                  role="presentation"
                                  class="vs__open-indicator"
                                >
                                  <path
                                    d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                  ></path>
                                </svg>
                                <div class="vs__spinner" style="display: none">
                                  Loading...
                                </div>
                              </div>
                            </div>
                            <ul
                              id="vs19__listbox"
                              role="listbox"
                              style="display: none; visibility: hidden"
                            ></ul>
                          </div>
                        </div>
                        <div class="cart-item-quantity">
                          <span class="cart-item-quantity__number">x1</span>
                        </div>
                        <div class="cart-item-price">
                          <span> 0đ </span>
                          <del>179.000đ</del>
                        </div>
                      </div>
                      <button class="cart-item-remove">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.668 4.668a.667.667 0 0 0-.667.667v7.46a1.28 1.28 0 0 1-1.34 1.206h-5.32a1.28 1.28 0 0 1-1.34-1.206v-7.46a.667.667 0 0 0-1.333 0v7.46a2.612 2.612 0 0 0 2.673 2.54h5.32a2.612 2.612 0 0 0 2.674-2.54v-7.46a.667.667 0 0 0-.667-.667ZM13.333 2.668h-2.666V1.335A.667.667 0 0 0 10 .668H6a.667.667 0 0 0-.667.667v1.333H2.667a.667.667 0 0 0 0 1.333h10.666a.667.667 0 1 0 0-1.333Zm-6.666 0v-.667h2.666v.667H6.667Z"
                            fill="#242424"
                          ></path>
                          <path
                            d="M7.333 11.333V6.667a.667.667 0 1 0-1.333 0v4.666a.667.667 0 1 0 1.333 0ZM10.001 11.333V6.667a.667.667 0 0 0-1.333 0v4.666a.667.667 0 1 0 1.333 0Z"
                            fill="#242424"
                          ></path>
                        </svg>
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-viewing-users mgt--10">
            <i
              >Có <b>4</b> người đang thêm cùng sản phẩm giống bạn vào giỏ
              hàng.</i
            >
          </div>
          <div class="cart-section">
            <div data-v-3e17c14e="" class="product-promotion-wrapper">
              <div data-v-3e17c14e="" class="product-promotion__tags">
                <svg
                  data-v-3e17c14e=""
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-v-3e17c14e=""
                    d="M4.20845 5.33386C4.09683 5.33386 3.98979 5.3782 3.91086 5.45713C3.83194 5.53605 3.7876 5.6431 3.7876 5.75472V6.66876C3.7876 6.78037 3.83194 6.88742 3.91086 6.96635C3.98979 7.04527 4.09683 7.08961 4.20845 7.08961C4.32007 7.08961 4.42711 7.04527 4.50604 6.96635C4.58497 6.88742 4.6293 6.78037 4.6293 6.66876V5.75472C4.6293 5.6431 4.58497 5.53605 4.50604 5.45713C4.42711 5.3782 4.32007 5.33386 4.20845 5.33386Z"
                    fill="white"
                  ></path>
                  <path
                    data-v-3e17c14e=""
                    d="M4.20845 7.61978C4.09683 7.61978 3.98979 7.66412 3.91086 7.74305C3.83194 7.82197 3.7876 7.92902 3.7876 8.04064V8.95468C3.7876 9.06629 3.83194 9.17334 3.91086 9.25227C3.98979 9.33119 4.09683 9.37553 4.20845 9.37553C4.32007 9.37553 4.42711 9.33119 4.50604 9.25227C4.58497 9.17334 4.6293 9.06629 4.6293 8.95468V8.04064C4.6293 7.92902 4.58497 7.82197 4.50604 7.74305C4.42711 7.66412 4.32007 7.61978 4.20845 7.61978Z"
                    fill="white"
                  ></path>
                  <path
                    data-v-3e17c14e=""
                    d="M4.20845 9.90572C4.09683 9.90572 3.98979 9.95006 3.91086 10.029C3.83194 10.1079 3.7876 10.215 3.7876 10.3266V11.2406C3.7876 11.3522 3.83194 11.4593 3.91086 11.5382C3.98979 11.6171 4.09683 11.6615 4.20845 11.6615C4.32007 11.6615 4.42711 11.6171 4.50604 11.5382C4.58497 11.4593 4.6293 11.3522 4.6293 11.2406V10.3266C4.6293 10.215 4.58497 10.1079 4.50604 10.029C4.42711 9.95006 4.32007 9.90572 4.20845 9.90572Z"
                    fill="white"
                  ></path>
                  <path
                    data-v-3e17c14e=""
                    d="M2.89008 0.50473C2.39989 0.545773 1.95331 0.872474 1.79027 1.36534L1.22968 3.0578C0.546192 3.11496 0 3.68892 0 4.38612V6.06049C0.000134673 6.2431 0.117999 6.40479 0.291803 6.4608C0.816822 6.63024 1.26238 7.28984 1.26256 8.09736C1.26263 8.90513 0.816991 9.56524 0.291803 9.73474C0.117999 9.79075 0.000134673 9.95244 0 10.135V12.6503C0 13.3848 0.604476 13.9893 1.339 13.9893H7.98307L15.1285 16.4289C15.7882 16.6542 16.5099 16.2855 16.7273 15.6283L17.2731 13.9794C17.9635 13.9295 18.5176 13.3525 18.5176 12.6503V10.1342C18.5174 9.95162 18.3996 9.78993 18.2258 9.73392C17.7007 9.56447 17.2552 8.90487 17.255 8.09736C17.2549 7.28958 17.7006 6.62948 18.2258 6.45997C18.3996 6.40397 18.5174 6.24228 18.5176 6.05967V4.38612C18.5176 3.65159 17.9131 3.04711 17.1786 3.04711H10.5361L3.39149 0.564735C3.22608 0.506811 3.0458 0.514133 2.89008 0.50473ZM2.95173 1.33986C3.0063 1.33614 3.06324 1.34332 3.12023 1.36205C4.73684 1.92342 6.35336 2.48535 7.96992 3.04711H2.11989L2.58923 1.6292C2.6458 1.45821 2.788 1.35103 2.95173 1.33986ZM1.339 3.88882H3.78768V4.28913C3.78768 4.52156 3.97611 4.70998 4.20854 4.70998C4.44097 4.70998 4.62939 4.52156 4.62939 4.28913V3.88882H17.1786C17.4614 3.88882 17.6759 4.10325 17.6759 4.38612V5.81883C16.8986 6.22833 16.4132 7.11084 16.4133 8.09736C16.4135 9.08356 16.8988 9.96573 17.6759 10.3751V12.6503C17.6759 12.9332 17.4614 13.1476 17.1786 13.1476H4.62857C4.63066 13.0023 4.62939 12.8529 4.62939 12.7062C4.62939 12.4738 4.44097 12.2853 4.20854 12.2853C3.97611 12.2853 3.78768 12.4738 3.78768 12.7062C3.78684 12.8523 3.78804 13.0033 3.78852 13.1476H1.33903C1.05608 13.1476 0.841707 12.9332 0.841707 12.6503V10.3759C1.61897 9.96639 2.10436 9.08388 2.10427 8.09736C2.10405 7.11115 1.61875 6.22899 0.841707 5.81965V4.38612C0.841707 4.10325 1.05614 3.88882 1.339 3.88882ZM10.5879 13.9893H16.3829L15.9283 15.3637C15.8528 15.5919 15.6235 15.7086 15.4006 15.6324L10.5879 13.9893Z"
                    fill="white"
                  ></path>
                  <path
                    data-v-3e17c14e=""
                    d="M12.9465 9.15636C13.6956 9.15636 14.3118 9.77249 14.3118 10.5217C14.3118 11.2708 13.6956 11.8878 12.9465 11.8878C12.1973 11.8878 11.5803 11.2708 11.5803 10.5217C11.5803 9.77249 12.1973 9.15636 12.9465 9.15636ZM12.9465 9.99806C12.6522 9.99806 12.422 10.2274 12.422 10.5217C12.422 10.8159 12.6522 11.0461 12.9465 11.0461C13.2407 11.0461 13.4701 10.8159 13.4701 10.5217C13.4701 10.2274 13.2407 9.99806 12.9465 9.99806Z"
                    fill="white"
                  ></path>
                  <path
                    data-v-3e17c14e=""
                    d="M8.93864 5.14885C9.68781 5.14885 10.3039 5.76498 10.3039 6.51416C10.3039 7.26333 9.68781 7.87947 8.93864 7.87947C8.18946 7.87947 7.57251 7.26333 7.57251 6.51416C7.57251 5.76498 8.18947 5.14885 8.93864 5.14885ZM8.93864 5.99056C8.64436 5.99056 8.41422 6.21988 8.41422 6.51416C8.41422 6.80844 8.64436 7.03776 8.93864 7.03776C9.23292 7.03776 9.46224 6.80844 9.46224 6.51416C9.46224 6.21988 9.23292 5.99056 8.93864 5.99056Z"
                    fill="white"
                  ></path>
                  <path
                    data-v-3e17c14e=""
                    d="M12.6485 6.21667L8.64057 10.2246C8.47626 10.389 8.47626 10.6554 8.64057 10.8198C8.80491 10.9841 9.07133 10.9841 9.23568 10.8198L13.2437 6.81178C13.408 6.64743 13.408 6.38101 13.2437 6.21667C13.0717 6.06382 12.8106 6.0478 12.6485 6.21667Z"
                    fill="white"
                  ></path>
                </svg>
                Ưu đãi dành riêng cho bạn
              </div>
              <div data-v-3e17c14e="" class="product-promotion-body">
                <div
                  data-v-3d1a4f76=""
                  data-v-3e17c14e=""
                  dir="ltr"
                  class="slick-slider slick-initialized"
                >
                  <button
                    type="button"
                    data-role="none"
                    class="slick-arrow slick-prev slick-disabled"
                    style="display: block"
                  >
                    Previous
                  </button>
                  <div data-v-3d1a4f76="" class="slick-list">
                    <div
                      data-v-e4caeaf8=""
                      data-v-3d1a4f76=""
                      class="slick-track"
                      style="
                        opacity: 1;
                        transform: translate3d(0px, 0px, 0px);
                        width: 1056px;
                      "
                    >
                      <div
                        data-v-e4caeaf8=""
                        tabindex="-1"
                        data-index="0"
                        aria-hidden="false"
                        class="slick-slide slick-active slick-current"
                        style="outline: none"
                      >
                        <div data-v-e4caeaf8="">
                          <div
                            data-v-3e17c14e=""
                            data-v-e4caeaf8=""
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div
                              data-v-3e17c14e=""
                              class="product-promotion__item product-promotio_pack-3-quan-short-nam-boxer-ke-soc-thoang-mat"
                              data-v-e4caeaf8=""
                            >
                              <div class="product-promotion__image">
                                <a
                                  href="/product/pack-3-quan-short-nam-boxer-ke-soc-thoang-mat"
                                  target="_blank"
                                  ><img
                                    src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/December2023/boxer_short_ke_00016.jpg"
                                    alt="Pack 3 Quần Shorts Nam kẻ sọc Basics"
                                  />
                                </a>
                              </div>
                              <div class="product-promotion__info-wrapper">
                                <div class="product-promotion__info">
                                  <div class="product-promotion__info-left">
                                    <div class="product-promotion__content">
                                      <h4 class="product-promotion__title">
                                        <a
                                          href="/product/pack-3-quan-short-nam-boxer-ke-soc-thoang-mat"
                                          target="_blank"
                                        >
                                          Pack 3 Quần Shorts Nam kẻ sọc Basics
                                        </a>
                                      </h4>
                                    </div>
                                    <div class="product-promotion__options">
                                      <div
                                        dir="auto"
                                        class="v-select vue-select product-promotion__select vs--single vs--unsearchable"
                                      >
                                        <div
                                          id="vs20__combobox"
                                          role="combobox"
                                          aria-expanded="false"
                                          aria-owns="vs20__listbox"
                                          aria-label="Search for option"
                                          class="vs__dropdown-toggle"
                                        >
                                          <div class="vs__selected-options">
                                            <span class="vs__selected">
                                              Mix màu
                                            </span>
                                            <input
                                              readonly="true"
                                              aria-autocomplete="list"
                                              aria-labelledby="vs20__combobox"
                                              aria-controls="vs20__listbox"
                                              type="search"
                                              autocomplete="off"
                                              class="vs__search"
                                            />
                                          </div>
                                          <div class="vs__actions">
                                            <button
                                              type="button"
                                              title="Clear Selected"
                                              aria-label="Clear Selected"
                                              class="vs__clear"
                                              style="display: none"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                              >
                                                <path
                                                  d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                                ></path>
                                              </svg>
                                            </button>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="14"
                                              height="10"
                                              role="presentation"
                                              class="vs__open-indicator"
                                            >
                                              <path
                                                d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                              ></path>
                                            </svg>
                                            <div
                                              class="vs__spinner"
                                              style="display: none"
                                            >
                                              Loading...
                                            </div>
                                          </div>
                                        </div>
                                        <ul
                                          id="vs20__listbox"
                                          role="listbox"
                                          style="
                                            display: none;
                                            visibility: hidden;
                                          "
                                        ></ul>
                                      </div>
                                      <div
                                        dir="auto"
                                        class="v-select vue-select product-promotion__select vs--single vs--unsearchable"
                                      >
                                        <div
                                          id="vs21__combobox"
                                          role="combobox"
                                          aria-expanded="false"
                                          aria-owns="vs21__listbox"
                                          aria-label="Search for option"
                                          class="vs__dropdown-toggle"
                                        >
                                          <div class="vs__selected-options">
                                            <span class="vs__selected">
                                              3XL
                                            </span>
                                            <input
                                              readonly="true"
                                              aria-autocomplete="list"
                                              aria-labelledby="vs21__combobox"
                                              aria-controls="vs21__listbox"
                                              type="search"
                                              autocomplete="off"
                                              class="vs__search"
                                            />
                                          </div>
                                          <div class="vs__actions">
                                            <button
                                              type="button"
                                              title="Clear Selected"
                                              aria-label="Clear Selected"
                                              class="vs__clear"
                                              style="display: none"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                              >
                                                <path
                                                  d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                                ></path>
                                              </svg>
                                            </button>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="14"
                                              height="10"
                                              role="presentation"
                                              class="vs__open-indicator"
                                            >
                                              <path
                                                d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                              ></path>
                                            </svg>
                                            <div
                                              class="vs__spinner"
                                              style="display: none"
                                            >
                                              Loading...
                                            </div>
                                          </div>
                                        </div>
                                        <ul
                                          id="vs21__listbox"
                                          role="listbox"
                                          style="
                                            display: none;
                                            visibility: hidden;
                                          "
                                        ></ul>
                                      </div>
                                    </div>
                                    <div
                                      class="product-promotion__options-text"
                                    ></div>
                                  </div>
                                </div>
                                <div class="product-promotion__prices">
                                  <span> 199.000đ </span>
                                </div>
                                <div class="product-promotion__add-block">
                                  <button
                                    ga-tracking-value="cart-promo_pack-3-quan-short-nam-boxer-ke-soc-thoang-mat"
                                    ga-tracking-label="Cart ưu đãi Pack 3 Quần Shorts Nam kẻ sọc Basics"
                                    class="product-promotion__add-btn"
                                  >
                                    Lấy ngay
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-e4caeaf8=""
                        tabindex="-1"
                        data-index="1"
                        aria-hidden="true"
                        class="slick-slide"
                        style="outline: none"
                      >
                        <div data-v-e4caeaf8="">
                          <div
                            data-v-3e17c14e=""
                            data-v-e4caeaf8=""
                            tabindex="-1"
                            style="width: 100%; display: inline-block"
                          >
                            <div
                              data-v-3e17c14e=""
                              class="product-promotion__item product-promotio_pack-3-ao-ba-lo-nam-basics-mac-nha-thoang-mat"
                              data-v-e4caeaf8=""
                            >
                              <div class="product-promotion__image">
                                <a
                                  href="/product/pack-3-ao-ba-lo-nam-basics-mac-nha-thoang-mat"
                                  target="_blank"
                                  ><img
                                    src="https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/uploads/January2024/pack3balo34.4.jpg"
                                    alt="Pack 3 Áo ba lỗ Basics"
                                  />
                                </a>
                              </div>
                              <div class="product-promotion__info-wrapper">
                                <div class="product-promotion__info">
                                  <div class="product-promotion__info-left">
                                    <div class="product-promotion__content">
                                      <h4 class="product-promotion__title">
                                        <a
                                          href="/product/pack-3-ao-ba-lo-nam-basics-mac-nha-thoang-mat"
                                          target="_blank"
                                        >
                                          Pack 3 Áo ba lỗ Basics
                                        </a>
                                      </h4>
                                    </div>
                                    <div class="product-promotion__options">
                                      <div
                                        dir="auto"
                                        class="v-select vue-select product-promotion__select vs--single vs--unsearchable"
                                      >
                                        <div
                                          id="vs22__combobox"
                                          role="combobox"
                                          aria-expanded="false"
                                          aria-owns="vs22__listbox"
                                          aria-label="Search for option"
                                          class="vs__dropdown-toggle"
                                        >
                                          <div class="vs__selected-options">
                                            <span class="vs__selected">
                                              Đen
                                            </span>
                                            <input
                                              readonly="true"
                                              aria-autocomplete="list"
                                              aria-labelledby="vs22__combobox"
                                              aria-controls="vs22__listbox"
                                              type="search"
                                              autocomplete="off"
                                              class="vs__search"
                                            />
                                          </div>
                                          <div class="vs__actions">
                                            <button
                                              type="button"
                                              title="Clear Selected"
                                              aria-label="Clear Selected"
                                              class="vs__clear"
                                              style="display: none"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                              >
                                                <path
                                                  d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                                ></path>
                                              </svg>
                                            </button>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="14"
                                              height="10"
                                              role="presentation"
                                              class="vs__open-indicator"
                                            >
                                              <path
                                                d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                              ></path>
                                            </svg>
                                            <div
                                              class="vs__spinner"
                                              style="display: none"
                                            >
                                              Loading...
                                            </div>
                                          </div>
                                        </div>
                                        <ul
                                          id="vs22__listbox"
                                          role="listbox"
                                          style="
                                            display: none;
                                            visibility: hidden;
                                          "
                                        ></ul>
                                      </div>
                                      <div
                                        dir="auto"
                                        class="v-select vue-select product-promotion__select vs--single vs--unsearchable"
                                      >
                                        <div
                                          id="vs23__combobox"
                                          role="combobox"
                                          aria-expanded="false"
                                          aria-owns="vs23__listbox"
                                          aria-label="Search for option"
                                          class="vs__dropdown-toggle"
                                        >
                                          <div class="vs__selected-options">
                                            <span class="vs__selected"> M </span>
                                            <input
                                              readonly="true"
                                              aria-autocomplete="list"
                                              aria-labelledby="vs23__combobox"
                                              aria-controls="vs23__listbox"
                                              type="search"
                                              autocomplete="off"
                                              class="vs__search"
                                            />
                                          </div>
                                          <div class="vs__actions">
                                            <button
                                              type="button"
                                              title="Clear Selected"
                                              aria-label="Clear Selected"
                                              class="vs__clear"
                                              style="display: none"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                              >
                                                <path
                                                  d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                                                ></path>
                                              </svg>
                                            </button>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="14"
                                              height="10"
                                              role="presentation"
                                              class="vs__open-indicator"
                                            >
                                              <path
                                                d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                                              ></path>
                                            </svg>
                                            <div
                                              class="vs__spinner"
                                              style="display: none"
                                            >
                                              Loading...
                                            </div>
                                          </div>
                                        </div>
                                        <ul
                                          id="vs23__listbox"
                                          role="listbox"
                                          style="
                                            display: none;
                                            visibility: hidden;
                                          "
                                        ></ul>
                                      </div>
                                    </div>
                                    <div
                                      class="product-promotion__options-text"
                                    ></div>
                                  </div>
                                </div>
                                <div class="product-promotion__prices">
                                  <span> 199.000đ </span>
                                </div>
                                <div class="product-promotion__add-block">
                                  <button
                                    ga-tracking-value="cart-promo_pack-3-ao-ba-lo-nam-basics-mac-nha-thoang-mat"
                                    ga-tracking-label="Cart ưu đãi Pack 3 Áo ba lỗ Basics"
                                    class="product-promotion__add-btn"
                                  >
                                    Lấy ngay
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-role="none"
                    class="slick-arrow slick-next"
                    style="display: block"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="discount-block">
            <div class="coupon-public">
              <div class="coupons">
                <div
                  ga-tracking-value="cart-coupon__COOLCLUB99"
                  ga-tracking-label="Cart Coupon COOLCLUB99"
                  class="coupon coupon--COOLCLUB99 coupon--coolcash"
                >
                  <div class="coupon-left"></div>
                  <div class="coupon-right custom-cursor-on-hover">
                    <div class="coupon-title">
                      COOLCLUB99
                      <span class="coupon-count"><i>(Còn 98)</i></span>
                    </div>
                    <div class="coupon-description">
                      <span>Giảm 10%</span> không giới hạn cho đơn hàng từ 99K
                      (Dành cho Coolclub)
                    </div>
                  </div>
                </div>
                <div
                  ga-tracking-value="cart-coupon__NUOCHOA24"
                  ga-tracking-label="Cart Coupon NUOCHOA24"
                  class="coupon coupon--NUOCHOA24"
                >
                  <div class="coupon-left"></div>
                  <div class="coupon-right">
                    <div class="coupon-title">
                      NUOCHOA24
                      <span class="coupon-count"><i>(Còn 126)</i></span>
                    </div>
                    <div class="coupon-description">
                      <span>Tặng nước hoa CM24 9ml</span> cho đơn từ 299K (Trừ
                      danh mục SALE)
                    </div>
                  </div>
                </div>
                <div
                  ga-tracking-value="cart-coupon__CMT120"
                  ga-tracking-label="Cart Coupon CMT120"
                  class="coupon coupon--CMT120"
                >
                  <div class="coupon-left"></div>
                  <div class="coupon-right">
                    <div class="coupon-title">
                      CMT120
                      <span class="coupon-count"><i>(Còn 82)</i></span>
                    </div>
                    <div class="coupon-description">
                      <span>Giảm 120K </span> cho đơn hàng từ 1TR (Trừ Giảm đến
                      50%)
                    </div>
                  </div>
                </div>
                <div
                  ga-tracking-value="cart-coupon__SUPER50"
                  ga-tracking-label="Cart Coupon SUPER50"
                  class="coupon coupon--SUPER50"
                >
                  <div class="coupon-left"></div>
                  <div class="coupon-right">
                    <div class="coupon-title">
                      SUPER50
                      <span class="coupon-count"><i>(Còn 57)</i></span>
                    </div>
                    <div class="coupon-description">
                      <span>Giảm 50K </span> cho đơn hàng từ 499K (Trừ Giảm đến
                      50%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="discount-actions">
              <div class="wishlist-text custom-cursor-on-hover">
                <img
                  src=""
                  alt="Icon Wallet Voucher"
                />
                <span>Ví voucher</span>
              </div>
            </div>
            <div class="discount-box">
              <input type="text" placeholder="Nhập mã giảm giá" />
              <button disabled="false">Áp dụng</button>
            </div>
          </div>
          <div data-v-09a24e8e="" class="discount-block">
            <p data-v-09a24e8e="" class="discount-heading">
              Sử dụng Voucher
              <span data-v-09a24e8e=""
                ><img
                  data-v-09a24e8e=""
                  src="https://mcdn.coolmate.me/image/April2023/mceclip0_92.png"
                  alt="product vote icon"
              /></span>
            </p>
          </div>
          <div class="divider"></div>
          <div class="apply-coolcash">
            <div class="apply-coolcash__text">
              <label for="apply_coolcash_checkbox" class="cart-promotion-label"
                ><span class="custom-checkbox"
                  ><input type="checkbox" id="apply_coolcash_checkbox" />
                  <span class="checkmark checkmark-square"></span
                ></span>
                <span class="coolcash-label"
                  >Sử dụng Coolcash<span class="coolcash-label__sub"
                    >(Bạn đang có: <b>0</b> Coolcash)</span
                  ></span
                >
                <span class="coolcash-tooltip"
                  ><svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.2"
                      cx="9"
                      cy="9.5"
                      r="6"
                      fill="#212121"
                    ></circle>
                    <rect x="8" y="5.5" width="2" height="5" fill="black"></rect>
                    <rect x="8" y="11.5" width="2" height="2" fill="black"></rect>
                  </svg>
                  <span class="coolcash-tooltip__content">
                    Lưu ý: Coolcash bạn áp dụng cho đơn hàng sẽ được khấu trừ từ
                    tài khoản của bạn sau khi bạn nhấp vào
                    <b>"Thanh toán"</b>.Bạn có thể hủy đơn hàng trong
                    <b>"Lịch sử đơn hàng"</b> số CoolCash bạn đã áp dụng sẽ hoàn
                    lại tài khoản của bạn. CoolCash có thể được sử dụng lên tới
                    50% tổng giá trị của đơn hàng.
                  </span></span
                ></label
              >
            </div>
          </div>
          <div class="pricing-info">
            <div class="pricing-info__item">
              <p>Tạm tính</p>
              <p class="pricing-info__sub">
                <span>2.133.000đ</span>
                <span class="pricing-info__saving"
                  ><i
                    >(tiết kiệm <span class="text--primary">940k)</span></i
                  ></span
                >
              </p>
            </div>
            <div class="pricing-info__item">
              <p>Giảm giá</p>
              <p class="">
                <span>0đ</span>
              </p>
            </div>
            <div class="pricing-info__item">
              <p>Phí giao hàng</p>
              <p class="">
                <span>Miễn phí</span>
              </p>
            </div>
            <div class="divider"></div>
            <div class="pricing-info__item pricing-info__total">
              <p style="align-items: center">Tổng</p>
              <p class="">
                <span class="pricing-info__total total">2.133.000đ</span>
                <span style="color: red; display: block; font-size: 12px"
                  >(Đã giảm 940k trên giá gốc)</span
                >
              </p>
            </div>
            <div class="divider"></div>
            <div class="pricing-info__item">
              <p
                style="
                  background-color: rgb(82, 82, 82);
                  color: rgb(255, 255, 255);
                  padding: 2px 10px;
                  border-radius: 100vmax;
                "
              >
                Hoàn tiền CoolCash
              </p>
              <p class="text--primary">
                <span>+22.000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  