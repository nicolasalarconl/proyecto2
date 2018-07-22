import DashboardAdminLayout from '@/pages/Layout/DashboardAdminLayout.vue'

import TableList from '@/pages/TableList.vue'
import Ministro from '@/pages/ministro/Ministro.vue'
import Dashboard from '@/pages/Dashboard.vue'

const routesAdmin = [
  {
    path: '/',
    component: DashboardAdminLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'ministro/:id',
        name: 'ministro',
        component: Ministro
      }
    ]
  }
]

export default routesAdmin
