import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import ShopSingle from '../views/ShopSingle.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    { 
      path: '/',
      name: 'Home',
      component: Home 
    },
    { 
      path: '/shop',
      name: 'Shop',
      component: Shop 
    },
    { 
      path: '/shop/:id',
      name: 'ShopSingle',
      component: ShopSingle 
    }, // Dynamic route for individual products
    { 
      path: '/contact',
      name: 'Contact',
      component: Contact 
    },
    { 
      path: '/about',
      name: 'About',
      component: About 
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound 
    }, // Catch-all for 404
  ],
})

export default router
