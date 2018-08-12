<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/Home">
        <md-icon>dashboard</md-icon>
        <p>Home</p>
      </sidebar-link>


      <sidebar-link to="/General">
        <md-icon>content_paste</md-icon>
        <p>General</p>
      </sidebar-link>


      <sidebar-link to="/Gabinete">
        <md-icon>person</md-icon>
        <p>Gabinete</p>
      </sidebar-link>

      <sidebar-link to="/Grafo">
        <md-icon>content_paste</md-icon>
        <p>Influyentes</p>
      </sidebar-link>      
    </side-bar>

    <div class="main-panel">
       <top-navbar></top-navbar> 

      <dashboard-content>

      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
