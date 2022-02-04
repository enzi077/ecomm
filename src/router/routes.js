
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue'), name: 'Home' },
      { path: 'checkout', component: () => import('pages/Checkout.vue'), name: 'Checkout' },
      { path: 'shortlist', component: () => import('pages/Shortlist.vue'), name: 'Shortlist' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
