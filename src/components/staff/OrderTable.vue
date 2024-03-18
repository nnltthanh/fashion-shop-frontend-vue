<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-center text-sm font-light text-surface dark:text-white">
                        <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                                <th scope="col" class="px-6 py-4">Mã đơn hàng</th>
                                <th scope="col" class="px-6 py-4">Ngày tạo</th>
                                <th scope="col" class="px-6 py-4">Trạng thái</th>
                                <th scope="col" class="px-6 py-4">Tổng cộng (vnđ)</th>
                                <th scope="col" class="px-6 py-4">Mã Coupon</th>
                                <th scope="col" class="px-6 py-4">Mã thanh toán</th>
                                <th scope="col" class="px-6 py-4">Mã vận chuyển</th>
                                <th scope="col" class="px-6 py-4">Nhân viên xử lý</th>
                                <th scope="col" class="px-6 py-4">Nhà kho</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-neutral-200 dark:border-white/10">
                                <td class="whitespace-nowrap px-6 py-4"> DH01</td>
                                <td class="whitespace-nowrap px-6 py-4">18-3-2024</td>
                                <td class="whitespace-nowrap px-6 py-4">Chưa thanh toán</td>
                                <td class="whitespace-nowrap px-6 py-4">549.000</td>
                                <td class="whitespace-nowrap px-6 py-4">CP05</td>
                                <td class="whitespace-nowrap px-6 py-4">TT01</td>
                                <td class="whitespace-nowrap px-6 py-4">TPCT05</td>
                                <td class="whitespace-nowrap px-6 py-4">Nguyễn Chí Bảo</td>
                                <td class="whitespace-nowrap px-6 py-4">NK03</td>
                            </tr>




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
</script>

<style scoped></style>