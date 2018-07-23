import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Home from '@/pages/Home.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import Ministro from '@/pages/ministro/Ministro.vue'

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
      }
    ]
  }
]

export default routes
