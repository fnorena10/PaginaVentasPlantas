import LoginPrincipal from 'pages/LoginPrincipal.vue';
import PlantasFiltro from 'pages/PlantasFiltro.vue';
import StockPlanta from 'pages/StockPlanta.vue';
import Inicio from 'pages/IndexPage.vue';
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login-principal', component: LoginPrincipal },
      { path: '/Plantas-filtro', component: PlantasFiltro },
      { path: '/Stock-planta', component: StockPlanta },
      { path: '/Inicio', component: Inicio }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
