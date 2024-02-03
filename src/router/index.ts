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
          path: '/account/info',
          name: 'userInfo',
          component: () => import('@/views/CustomerProfilePage.vue'),
        },
        {
          path: '/account/orders',
          name: 'myOrders',
          component: () => import('@/views/CustomerProfilePage.vue'),
        },
        {
          path: '/account/coupons',
          name: 'myCoupons',
          component: () => import('@/views/CustomerProfilePage.vue'),
        },
        {
          path: '/account/addresses',
          name: 'myAddresses',
          component: () => import('@/views/CustomerProfilePage.vue'),
        },
        {
          path: '/account/reviews',
          name: 'myReviews',
          component: () => import('@/views/CustomerProfilePage.vue'),
        },
      ],
    },
  ]
})

export default router
