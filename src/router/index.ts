import CustomerProfilePageVue from '@/views/CustomerProfilePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/account',
      component: () => import('@/views/CustomerProfilePage.vue'),
      // meta: { requiresAuth: true },
      children: [
        {
          path: 'info',
          name: 'userInfo',
          component: () => import('@/components/profile/account-content/AccountContent.vue'),
        },
        {
          path: 'orders',
          name: 'myOrders',
          component: () => import('@/components/profile/account-content/OrderContent.vue'),
        },
        {
          path: 'coupons',
          name: 'myCoupons',
          component: () => import('@/components/profile/account-content/VoucherContent.vue'),
        },
        {
          path: 'addresses',
          name: 'myAddresses',
          component: () => import('@/views/CustomerProfilePage.vue'),
        },
        {
          path: 'reviews',
          name: 'myReviews',
          component: () => import('@/views/CustomerProfilePage.vue'),
        },
      ],
    },
  ]
})

export default router
