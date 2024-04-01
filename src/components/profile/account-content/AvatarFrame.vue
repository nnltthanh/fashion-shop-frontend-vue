<template>
    <div class="drop-area m-3" @dragover.prevent="onDragOver" @drop.prevent="onDrop">
        <figure class="figure avatar-frame">
            <div class="fs-5 text-secondary" 
            v-if="!accountInfo?.avatar">Drop avatar here</div>
            <img v-if="accountInfo?.avatar" :src="avatar!" class="figure-img avatar-image" alt="Avatar">
        </figure>
        <figcaption class="figure-caption fs-5 mt-1">{{ userInfo && userInfo.name! ? userInfo.name! : 'Chưa cập nhật!' }}
        </figcaption>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { onMounted } from 'vue';
import axios from 'axios';

interface AccountInfo {
    id: number,
    account: string;
    dob: string;
    phone: string;
    email: string;
    name: string;
    avatar: Uint8Array | ArrayBufferLike
    // Các thuộc tính khác nếu cần thiết
}

const accountInfo = ref<AccountInfo | null>(null);
const userInfo = ref<AccountInfo | null>(null);

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

function base64ToByteArray(base64) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

function byteArrayToBase64(byteArray) {
    var binary = '';
    var bytes = new Uint8Array(byteArray);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = async () => {
        avatar.value = reader.result as string;
        console.log(avatar.value);
        let bytes = base64ToByteArray(avatar.value.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));

        const response = await axios.put(`http://localhost:8080/users/${userInfo.value?.id!}`, bytes,
            {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
        accountInfo.value!.avatar = bytes;
        userInfo.value!.avatar = bytes;
        localStorage.setItem('account', JSON.stringify(accountInfo.value));
    };
    reader.readAsDataURL(file);
};

onMounted(() => {
    // Lấy thông tin tài khoản từ localStorage
    const storedAccount = localStorage.getItem('account');
    if (storedAccount) {
        accountInfo.value = JSON.parse(storedAccount);
        avatar.value = ('data:image/png;base64,' + accountInfo.value!.avatar) || null;
        console.log(accountInfo.value, "onmount", avatar.value)
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
            avatar.value = 'data:image/png;base64,' + byteArrayToBase64(accountInfo.value?.avatar!);
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
    width: 210px;
    height: 210px;
    object-fit: cover;
    object-position: center center;
}
</style>