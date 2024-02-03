<template>
    <div class="drop-area m-3" @dragover.prevent="onDragOver" @drop.prevent="onDrop">
        <div style="font-size: large" v-if="!avatar">Drop avatar here</div>
        <div v-if="avatar" class="avatar-frame">
            <img :src="avatar" alt="Avatar" class="avatar-image" />
        </div>
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
</script>
  
<style scoped>
.drop-area {
    width: 200px;
    height: 200px;
    border: 1px dashed #000;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 0.5rem;
    vertical-align: middle;
    align-items: center;
    display: grid;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.avatar-frame {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
}

.avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}

.avatar-image:hover {
    position: absolute;
    width: 210px;
    height: 210px;
    transition: 0.3s;
    object-fit: cover;
    object-position: center center;
}

</style>