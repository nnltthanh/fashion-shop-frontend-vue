<template>
    <div class="account-sidebar-items my-3">
        <div class="account-sidebar-item">
            <span class="circle"><img src="https://mcdn.coolmate.me/image/September2023/mceclip6_34.png" alt="Thông tin tài khoản">
                <a href="" @click.prevent>Thông tin tài khoản</a>
            </span>
        </div>
        <div class="account-sidebar-item">
            <span class="circle"><img src="https://mcdn.coolmate.me/image/September2023/mceclip4_7.png" alt="Thông tin tài khoản">
                <a href="" @click.prevent>Lịch sử đơn hàng</a>
            </span>
        </div>
        <div class="account-sidebar-item">
            <span class="circle"><img src="https://mcdn.coolmate.me/image/September2023/mceclip1_59.png" alt="Thông tin tài khoản">
                <a href="" @click.prevent>Ví voucher</a>
            </span>
        </div>
        <div class="account-sidebar-item">
            <span class="circle"><img src="https://mcdn.coolmate.me/image/September2023/mceclip2_76.png" alt="Thông tin tài khoản">
                <a href="" @click.prevent>Sổ địa chỉ</a>
            </span>
        </div>
        <div class="account-sidebar-item">
            <span class="circle"><img src="https://mcdn.coolmate.me/image/September2023/mceclip3_71.png" alt="Thông tin tài khoản">
                <a href="" @click.prevent>Đánh giá và phản hồi</a>
            </span>
        </div>
    </div>
</template>

<style scoped>

.account-sidebar-items {
    max-width: 350px;
    display: relative;
    position: relative;
}

.account-sidebar-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 55px;
    padding: 0.75rem 3rem 0.75rem 0.75rem;
    transition: all .2s;
    border-radius: 0.5rem;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: white;
    margin: 5px 10px 0px 0px;
    max-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    a {
        text-decoration: none;
        font-weight: 600;
        color: black;
    }
}

.account-sidebar-item:hover {
    filter: invert(1);
    transition: 0.2s;
}

.circle {
        vertical-align: baseline;
        img {
            vertical-align: middle;
            width: 25px;
            margin-right: 3px;
        }
    }

</style>