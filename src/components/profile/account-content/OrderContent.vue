<template>
    <div class="account-content mt-3">
        <div id="info-tab" class="account-info">
            <h2 class="account-page-title">
                Lịch sử đơn hàng
            </h2>
            <div>
                <h5>Đơn hàng của bạn</h5>
            </div>   
            <div class="d-grid justify-content-center">
                <h6>Bạn chưa có đơn hàng nào...</h6>
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
    transition: all .2s;
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

</style>