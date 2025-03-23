import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from './PageNotFound.vue'
import { DefaultRoute } from '@/router/routes.config'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: DefaultRoute,
    },
    {
      path: '/app',
      name: 'app',
      component: { template: '<router-view />' },
      children: [
        {
          path: 'reporting',
          name: 'reporting',
          component: { template: '<div>Reporting Page</div>' },
        },
      ],
    },
  ],
})

function mountPageNotFound() {
  return mount(PageNotFound, {
    global: {
      plugins: [router],
    },
  })
}

describe('PageNotFound', () => {
  it('renders the 404 image', () => {
    const wrapper = mountPageNotFound()
    const img = wrapper.find('img')

    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe('404')
    expect(img.attributes('src')).toBe('/src/assets/page-not-found.svg')
  })

  it('displays the error message', () => {
    const wrapper = mountPageNotFound()

    expect(wrapper.html()).toContain('The page you are looking for does not exist.')
  })

  it('renders the home button with correct link', () => {
    const wrapper = mountPageNotFound()

    const button = wrapper.findComponent({ name: 'Button' })
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })

    expect(button.exists()).toBe(true)
    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props('to')).toBe('/app/default')
    expect(routerLink.text()).toBe('Go to Default')
  })
})
