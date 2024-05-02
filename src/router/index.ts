import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: "/home",
      alias: ["/", ""],
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/login/employee",
      alias: ["/", ""],
      component: () => import("@/views/EmployeeLoginPage.vue"),
    },
    {
      path: "/register",
      component: () => import("@/views/RegisterPage.vue"),
    },
    {
      path: '/branches',
      name: 'branches',
      component: () => import('@/views/BranchPage.vue'),
    },
    {
      path: "/account",
      component: () => import("@/views/CustomerProfilePage.vue"),
      // meta: { requiresAuth: true },
      children: [
        {
          path: "info",
          name: "userInfo",
          component: () =>
            import("@/components/profile/account-content/AccountContent.vue"),
        },
        {
          path: "orders",
          name: "myOrders",
          component: () =>
            import("@/components/profile/account-content/OrderContent.vue"),
        },
        {
          path: "coupons",
          name: "myCoupons",
          component: () =>
            import("@/components/profile/account-content/VoucherContent.vue"),
        },
        {
          path: "addresses",
          name: "myAddresses",
          component: () =>
            import("@/components/profile/account-content/AddressContent.vue"),
        },
        {
          path: "reviews",
          name: "myReviews",
          component: () =>
            import("@/components/profile/account-content/ReviewContent.vue"),
        },
      ],
    },
    {
      path: '/cart',
      component: () => import('@/views/CartPage.vue')
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductView.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("@/views/ProductDetail.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/ProductSearch.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("@/views/Posts.vue"),
    },
    {
      path: "/posts/:id",
      name: "post",
      component: () => import("@/views/PostDetail.vue"),
    },
    {
      path: '/staff',
      component: () => import('@/views/Staff.vue'),
    },
    {
      path: '/senior-manager',
      component: () => import('@/views/SeniorManager.vue'),
    },
    {
      path: '/admin',
      component: () => import('@/views/Admin.vue'),
    },
    {
      path: '/manager',
      component: () => import('@/views/Manager.vue'),
    },
  ],
});

export default router;
