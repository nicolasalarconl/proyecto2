<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
        <!---  <div class="md-autocomplete">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
              <label>Search...</label>
            </md-autocomplete>
          </div>
          <md-list> 
         <!--   <md-list-item to="/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item> -->

            <md-list-item to="#" class="dropdown">
              <drop-down>
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="material-icons">person</i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="Table List">Lista de Politicos</a></li>
                  <li><a href="Agregar Politicos">Agregar Politicos</a></li>
                  <li><a href="#">Ajustes </a></li>
                   <li><a href="#">Cerrar Sesión </a></li>
                </ul>
              </drop-down>
            </md-list-item>

            <md-list-item to="#" class="dropdown">
              <drop-down>
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="material-icons">person</i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="Agregar ">Iniciar Sesión</a></li>
                </ul>
              </drop-down>
            </md-list-item>

         <!--   <md-list-item to="/user">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>

            </md-list-item> -->


          </md-list>
        </div>
      </div>
    </div>

  </md-toolbar>
</template>

<script>

export default{
  data () {
    return {
      selectedEmployee: null,
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone'
      ]
    }
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    }
  }
}
</script>

<style lang="css">
</style>
