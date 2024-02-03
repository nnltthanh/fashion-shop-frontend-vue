<template>
    <div class="row">
        <div class="col-md-3"><AccountSidebar/></div>
        <div class="col-md-9"><AccountContent/></div>
    </div>
</template>

<script setup lang="ts">
import AccountSidebar from '@/components/profile/account-content/AccountSideBar.vue';
import AccountContent from './account-content/AccountContent.vue';
</script>