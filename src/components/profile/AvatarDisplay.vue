<template>
    <div id="avatar-board" class="m-0 p-3">
        <AvatarFrame/>
        <div class="mx-3">Nguyễn Ngọc Lam Thanh</div>
    </div>
</template>

<style scoped>
#avatar-board {
	font-size: 50px;
	font-weight: 500 !important;
    display: flex;
    background-color: white;
    border-radius: 0.5rem;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>

<script setup lang="ts">
import AvatarFrame from './AvatarFrame.vue';
</script>