<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Editar Politico</h4>
      </md-card-header>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>NOMBRE</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div> 
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>APELLIDO PATERNO</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>APELLIDO MATERNO</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
              <label>Cargo Politico </label>
            </md-autocomplete>

          <md-field>
           
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-flex>

    </v-layout>
  </v-container>


            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">AGREGAR POLITICO</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>



<script>/*
export default {
  name: 'edit-profile-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
  
    } 
  } */

export default{
  data () {
    return {
      selectedEmployee: null,
      employees: [
        'Ministro Del Interior',
        'Presidente de la Republica',
        'Ministro de Salud'
      ]
    }
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    }
  }

}

</script> -->
<style>

</style>
