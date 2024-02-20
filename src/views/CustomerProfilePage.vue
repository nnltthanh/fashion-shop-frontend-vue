<template>
    <!-- <Header/> -->
    <div class="container my-5" id="customer-profile">
        <AccountContentDisplay/>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import AccountContentDisplay from '@/components/profile/AccountContentDisplay.vue';
</script>

<style scoped>

#app {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Set the height to viewport height */
    }

    body {
      margin: 0; /* Remove default body margin */
    }

#customer-profile {
    display: block;
    position: absolute;
    border-radius: 5px;
    width: 100%;
    
}
</style>