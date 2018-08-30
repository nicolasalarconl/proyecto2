import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/cuenta/TableList.vue'
import Home from '@/pages/Home.vue'
import Icons from '@/pages/Icons.vue'
import Grafo from '@/pages/Grafo.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import Ministro from '@/pages/ministro/Ministro.vue'
import Error from '@/pages/Error.vue'
import Iniciar from '@/pages/IniciarSesion.vue'
import Agregar from '@/pages/UserProfile/AddPolitico.vue'
import Editar from '@/pages/UserProfile/EditPolitico.vue'

const routes = [

  {
    path: '/',
    component: DashboardLayout,
    redirect: '/Home',
    children: [
      {
        path: 'Gabinete',
        name: 'Gabinete',
        component: Dashboard
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'Iniciar',
        name: 'Iniciar',
        component: Iniciar
      },

      {
        path: 'Grafo',
        name: 'Grafo',
        component: Grafo
      },
      {
        path: 'Agregar',
        name: 'Agregar Politico',
        component: Agregar
      },
      {
        path: 'editar',
        name: 'Editar Politico',
        component: Editar
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'Home',
        name: 'Home',
        component: Home
      },
      {
        path: 'general',
        name: 'General',
        component: Icons
      },
      {
        path: 'ministro/:id',
        name: 'ministro',
        component: Ministro
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: '/*',
        name: 'Error',
        component: Error
      }

    ]
  }
]

export default routes
