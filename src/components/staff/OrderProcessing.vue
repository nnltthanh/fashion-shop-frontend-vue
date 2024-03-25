<div class="filter grid grid-cols-7 gap-4">
    <div></div>
<div>
        <div>Mã ĐH</div>
<input class="w-full border-3 rounded-md border-gray-300 pl-1" type="text" v-model="orderId" placeholder="Tất cả">
</div>
<div>
        <div>Ngày tạo</div>
<select class="w-full border-3 rounded-md border-gray-300 pl-1" v-model="selectedCreateDate">
    <option value="">Tất cả</option>
    <option value="">3 ngày gần đây nhất</option>
    <option value="">7 ngày gần đây nhất</option>
    <option value="">Tháng này</option>
    <option value="">Năm nay</option>
    <!-- Thêm các tùy chọn khác nếu cần -->
</select>
</div>
<div>
        <div>Trạng thái</div>
<select class="w-full border-3 rounded-md border-gray-300 pl-1" v-model="selectedStatus">
    <option value="">Tất cả</option>
    <option value="">CREATING</option>
    <option value="">PENDING_PAYMENT</option>
    <option value="">DELIVERED</option>
    <option value="">SHIPPED</option>
    <option value="">CANCELLED</option>
    <option value="">REFUNDED</option>
    <option value="">ON_HOLD</option>
    <!-- Thêm các tùy chọn khác nếu cần -->
</select>
</div>
<div>
        <div>Đơn vị vận chuyển</div>
<select class="w-full border-3 rounded-md border-gray-300 pl-1" v-model="selectedShipment">
    <option value="">Tất cả</option>
    <option value="">Giao hàng nhanh</option>
    <option value="">Giao hàng tiết kiệm</option>
    <option value="">B&T STORE 415 LE DAI HANH D11</option>
    <option value="">B&T STORE 533 NGUYEN TRI PHUONG</option>
    <option value="">B&T STORE 1800 NGUYEN ANH THU</option>
    <option value="">B&T STORE BAMBOO AIRWAYS - PHÚ NHUẬN</option>
    <option value="">B&T STORE KIOSK VJET G24 - TÂN SƠN NHẤT AIRPORT</option>
    <option value="">B&T STORE HUỲNH CƯƠNG - CẦN THƠ</option>
    <option value="">B&T STORE CV SÔNG HẬU - CẦN THƠ</option>
    <option value="">B&T STORE 389R NGUYỄN VĂN CỪ CẦN THƠ</option>
    <option value="">B&T STORE VINCOM XUÂN KHÁNH CT</option>
    <option value="">B&T STORE 29 THANG 3 DA NANG</option>

    <!-- Thêm các tùy chọn khác nếu cần -->
</select>
</div>
<div>
        <div>Nhân viên xử lý</div>
<select class="w-full border-3 rounded-md border-gray-300 pl-1" v-model="selectedStaff">
    <option value="">Tất cả</option>
    <!-- Thêm các tùy chọn khác nếu cần -->
</select>
</div>
<div class="flex justify-start items-center">
        <!-- Nút Lọc -->
        <!-- @click="filterOrders()" -->
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Lọc
        </button>
    </div>
</div>