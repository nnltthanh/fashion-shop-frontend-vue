<template>
  <div class="title-with-actions">
    <div class="title">Thông tin vận chuyển</div>
    <div class="action">
      <a href="#" class="flex align--center"
        ><img
          src="https://www.coolmate.me/images/address_book_icon.svg"
          alt="address_book_icon"
          class="address_book_icon"
        />
        Chọn từ sổ địa chỉ
      </a>
    </div>
  </div>
  <div id="customer-info-block" customerinfo="[object Object]">
    <div class="grid">
      <div class="grid-column six-twelfths">
        <input
          type="text"
          name="full_name"
          placeholder="Họ tên"
          class="form-control"
        />
      </div>
      <div class="grid-column six-twelfths">
        <input
          type="tel"
          name="phone"
          placeholder="Số điện thoại"
          class="form-control"
        />
      </div>
    </div>
    <div class="grid">
      <div class="grid-column">
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="form-control custom-cursor-default-hover"
          disabled="true"
        />
      </div>
      <div class="grid-column">
        <div class="address-block">
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"
            autocomplete="off"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="grid-column four-twelfths mobile--one-whole">
        <div
          dir="auto"
          class="v-select vue-select vs--single vs--searchable"
          name="nhanh_city"
        >
          <div
            id="vs1-combobox"
            role="combobox"
            aria-expanded="false"
            aria-owns="vs1-listbox"
            aria-label="Search for option"
            class="vs-dropdown-toggle"
          >
            <div class="vs-selected-options">
              <span class="vs-selected"> Cần Thơ </span>
              <input
                aria-autocomplete="list"
                aria-labelledby="vs1-combobox"
                aria-controls="vs1-listbox"
                type="search"
                autocomplete="off"
                class="vs-search"
              />
            </div>
            <div class="vs-actions">
              <button
                type="button"
                title="Clear Selected"
                aria-label="Clear Selected"
                class="vs-clear"
                style="display: none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
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
                class="vs-open-indicator"
              >
                <path
                  d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                ></path>
              </svg>
              <div class="vs-spinner" style="display: none">Loading...</div>
            </div>
          </div>
          <ul
            id="vs1-listbox"
            role="listbox"
            style="display: none; visibility: hidden"
          ></ul>
        </div>
      </div>
      <div class="grid-column four-twelfths mobile--one-whole">
        <div
          dir="auto"
          class="v-select vue-select vs--single vs--searchable"
          name="nhanh_district"
        >
          <div
            id="vs2-combobox"
            role="combobox"
            aria-expanded="false"
            aria-owns="vs2-listbox"
            aria-label="Search for option"
            class="vs-dropdown-toggle"
          >
            <div class="vs-selected-options">
              <span class="vs-selected"> Quận Ninh Kiều </span>
              <input
                aria-autocomplete="list"
                aria-labelledby="vs2-combobox"
                aria-controls="vs2-listbox"
                type="search"
                autocomplete="off"
                class="vs-search"
              />
            </div>
            <div class="vs-actions">
              <button
                type="button"
                title="Clear Selected"
                aria-label="Clear Selected"
                class="vs-clear"
                style="display: none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
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
                class="vs-open-indicator"
              >
                <path
                  d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                ></path>
              </svg>
              <div class="vs-spinner" style="display: none">Loading...</div>
            </div>
          </div>
          <ul
            id="vs2-listbox"
            role="listbox"
            style="display: none; visibility: hidden"
          ></ul>
        </div>
      </div>
      <div class="grid-column four-twelfths mobile--one-whole">
        <div
          dir="auto"
          class="v-select vue-select vs--single vs--searchable"
          name="nhanh_ward"
          id="nhanh_ward"
        >
          <div
            id="vs3-combobox"
            role="combobox"
            aria-expanded="false"
            aria-owns="vs3-listbox"
            aria-label="Search for option"
            class="vs-dropdown-toggle"
          >
            <div class="vs-selected-options">
              <input
                placeholder="Chọn Phường/Xã"
                aria-autocomplete="list"
                aria-labelledby="vs3-combobox"
                aria-controls="vs3-listbox"
                type="search"
                autocomplete="off"
                class="vs-search"
              />
            </div>
            <div class="vs-actions">
              <button
                type="button"
                title="Clear Selected"
                aria-label="Clear Selected"
                class="vs-clear"
                style="display: none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
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
                class="vs-open-indicator"
              >
                <path
                  d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                ></path>
              </svg>
              <div class="vs-spinner" style="display: none">Loading...</div>
            </div>
          </div>
          <ul
            id="vs3-listbox"
            role="listbox"
            style="display: none; visibility: hidden"
          ></ul>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="grid-column">
        <input
          type="text"
          name="cnote"
          placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
          class="form-control"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-with-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1rem;
}
.title-with-actions .title {
  margin: 0;
}
.title {
  font-size: 30px;
  font-weight: 700;
  margin: 2rem 0 1rem;
}
.title-with-actions .action a {
  color: #2f5acf;
}
.cart-left-section .address_book_icon {
  display: inline-block;
  margin-right: 3px;
  width: 20px;
  height: 20px;
}
.grid {
  display: flex;
  display: -webkit-flex;
  -moz-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -9px;
  margin-right: -9px;
  padding: 0;
  position: relative;
  float: none;
}
.six-twelfths {
  width: 50%;
}
.four-twelfths {
  width: 33.333%;
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
.form-control,
.vue-select .vs-dropdown-toggle {
  background: #fff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 16px;
  height: 40px;
  width: 100%;
  padding: 5px 20px;
  transition: all 0.2s;
}
.grid:after {
  content: "";
  display: table;
  clear: both;
}
.v-select {
  position: relative;
  font-family: inherit;
}
.vs--searchable .vs-dropdown-toggle {
  cursor: text;
}
.vue-select .vs-dropdown-toggle {
  padding: 5px 10px 5px 20px;
}
.form-control,
.vue-select .vs-dropdown-toggle {
  background: #fff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 16px;
  height: 40px;
  width: 100%;
  padding: 5px 20px;
  transition: all 0.2s;
}
.vs-dropdown-toggle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  padding: 0 0 4px;
  background: 0 0;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
  white-space: normal;
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
.vs--single .vs-selected {
  background-color: transparent;
  border-color: transparent;
}
.vue-select .vs-selected,
.vue-select .vs-selected-options {
  padding: 0;
  margin: 0;
  align-items: center;
}
.vs-selected {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
  color: #333;
  line-height: 1.4;
  margin: 4px 2px 0;
  padding: 0 0.25em;
  z-index: 0;
}
.vue-select .vs-search {
  margin: 0;
  padding: 0;
}
.vs-search,
.vs-search:focus {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1.4;
  font-size: 1em;
  border: 1px solid transparent;
  border-left: none;
  outline: none;
  margin: 4px 0 0;
  padding: 0 7px;
  background: 0 0;
  box-shadow: none;
  width: 0;
  max-width: 100%;
  flex-grow: 1;
  z-index: 1;
}
.vue-select .vs-selected {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.vs-actions {
  display: flex;
  align-items: center;
  padding: 4px 6px 0 3px;
}
.vs-clear {
  fill: rgba(60, 60, 60, 0.5);
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8px;
}
.vs-spinner {
  align-self: center;
  opacity: 0;
  font-size: 5px;
  text-indent: -9999em;
  overflow: hidden;
  border: 0.9em solid hsla(0, 0%, 39.2%, 0.1);
  border-left-color: rgba(60, 60, 60, 0.45);
  transform: translateZ(0);
  animation: vSelectSpinner 1.1s linear infinite;
  transition: opacity 0.1s;
}


.form-control:focus, .form-control:active
.vs-dropdown-toggle:focus, .vs-dropdown-toggle:active {
  border-color: inherit !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
  border: 1px solid #2f5acf !important;
}

.four-twelfths {
    width: 33.333%;
}

.seven-twelfths {
    width: 58.333%;
}
.six-twelfths {
    width: 50%;
}
</style>
