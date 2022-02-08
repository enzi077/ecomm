
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue'), name: 'Home' },
      { path: 'checkout', component: () => import('pages/Checkout.vue'), name: 'Checkout' },
      { path: 'shortlist', component: () => import('pages/Shortlist.vue'), name: 'Shortlist' },
      { path: 'product-detail', component: () => import('pages/ProductDetail.vue'), name: 'ProductDetail' },
      { path: 'payment', component: () => import('pages/Payment.vue'), name: 'Payment' }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
