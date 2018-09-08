<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/Home">
        <md-icon>home</md-icon>
        <p>Home</p>
      </sidebar-link>

      <sidebar-link to="/General">
        <md-icon>pie_chart</md-icon>
        <p>General</p>
      </sidebar-link>

      <sidebar-link to="/Gabinete">
        <md-icon>group</md-icon>
        <p>Gabinete</p>
      </sidebar-link>

      <sidebar-link to="/Grafo">
        <md-icon>bubble_chart</md-icon>
        <p>Influyentes</p>
      </sidebar-link>

      <sidebar-link to="/Mapa">
        <md-icon>location_on</md-icon>
        <p>Mapa Regiones Chile</p>
      </sidebar-link>

      <sidebar-link to="/Santiago">
        <md-icon>location_on</md-icon>
        <p>Mapa Santiago</p>
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
