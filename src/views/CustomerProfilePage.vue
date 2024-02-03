<template>
    <div class="container my-5" id="customer-profile">
        <AvatarDisplay/>
        <AccountContentDisplay/>
    </div>
</template>

<script setup lang="ts">
import AvatarDisplay from '@/components/profile/AvatarDisplay.vue';
import AccountContentDisplay from '@/components/profile/AccountContentDisplay.vue';
</script>

<style scoped>
#customer-profile {
    display: block;
    position: absolute;
    border-radius: 5px;
    width: 100%;
}
</style>