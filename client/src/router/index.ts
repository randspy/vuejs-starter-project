import { createRouter, createWebHistory } from 'vue-router'
import { DefaultRoute } from '@/router/routes.config'
import MainLayout from '@/layouts/MainLayout.vue'
import PageNotFound from '@/layouts/PageNotFound.vue'
import DefaultPage from '@/features/default/components/DefaultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: DefaultRoute,
    },
    {
      path: '/app',
      name: 'app',
      component: MainLayout,
      redirect: DefaultRoute,
      children: [
        {
          path: 'default',
          name: 'default',
          component: DefaultPage,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound,
    },
  ],
})

export default router
