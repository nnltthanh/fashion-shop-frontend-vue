<template>
    <div class="drop-area m-3" @dragover.prevent="onDragOver" @drop.prevent="onDrop">
        <figure class="figure avatar-frame">
            <div class="fs-5 text-secondary" v-if="!avatar">Drop avatar here</div>
            <img v-if="avatar" :src="avatar" class="figure-img avatar-image" alt="Avatar">
        </figure>
        <figcaption class="figure-caption fs-5">{{ userInfo && userInfo.account ? userInfo.account : 'Chưa cập nhật!' }}
        </figcaption>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const avatar = ref<string | null>(null);

const onDragOver = (event: DragEvent) => {
    event.preventDefault();
};

const onDrop = (event: DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer!.files[0];
    if (file.type.startsWith('image/')) {
        handleImageUpload(file);
    } else {
        console.error('Invalid file type. Please drop an image.');
    }
};

const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
        avatar.value = reader.result as string;
    };
    reader.readAsDataURL(file);
};




import { onMounted } from 'vue';
import axios from 'axios';

interface AccountInfo {
    account: string;
    dob: string;
    phone: string;
    email: string;
    // Các thuộc tính khác nếu cần thiết
}



const accountInfo = ref<AccountInfo | null>(null);
const userInfo = ref<AccountInfo | null>(null);

onMounted(() => {
    // Lấy thông tin tài khoản từ localStorage
    const storedAccount = localStorage.getItem('account');
    if (storedAccount) {
        accountInfo.value = JSON.parse(storedAccount);
        // Gọi API để lấy thông tin người dùng dựa trên tên đăng nhập
        if (accountInfo.value) {
            fetchUserInfo(accountInfo.value.account);
        }
    }
});

async function fetchUserInfo(username: string) {
    try {
        const response = await axios.get(`http://localhost:8080/users/account/${username}`);
        userInfo.value = response.data;

        // Đảo ngược chuỗi dob thành định dạng ngày/tháng/năm
        if (userInfo.value && userInfo.value.dob) {
            const parts = userInfo.value.dob.split('-');
            const reversedDob = `${parts[2]}/${parts[1]}/${parts[0]}`;
            userInfo.value.dob = reversedDob;
            console.log('Thông tin người dùng:' + userInfo.value.dob);
        }


    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
    }
}









</script>

<style scoped>
.drop-area {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.avatar-frame {
    display: grid;
    place-items: center;
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 100%;
    border: 1px dashed rgba(181, 174, 174, 0.805);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.avatar-image {
    width: 105%;
    height: 105%;
    object-fit: cover;
    object-position: center center;
}
</style>