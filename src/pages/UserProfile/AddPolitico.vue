<template>
  <form>
    <md-card>
      <md-card-header>
        <h4 class="title">Nuevo Politico</h4>
      </md-card-header>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nombre completo</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
              <label>Cargo Politico </label>
            </md-autocomplete>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
              <label>Fecha de Inicio </label>
              <md-datepicker v-model="selectedDate" md-immediately :md-disabled-dates="disabledDates" />
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" v-on:click="inicio">AGREGAR POLITICO</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default{
  data () {
    return {
      selectedEmployee: null,
      selectedDate: new Date(),
      employees: [
        'Ministro Del Interior',
        'Presidente de la Republica',
        'Ministro de Salud'
      ],
      username: ''
    }
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    disabledDates: date => {
      const day = date.getFullYear()
      return day < 2016
    },
    inicio () {
      var json_data = {
        nombre: this.username,
        cargo: this.selectedEmployee,
        fechainicio: this.selectedDate,
        compositivos: 0,
        comnegativos: 0,
        comneutros: 0
      }
      const aux = JSON.stringify(json_data)
      console.log(aux)
      fetch('http://localhost:8080/demo-0.0.1-gobierno/politicals/',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            "Content-Type":'application/json',
        },
        body: aux
      }).then(response => {
        if(response.status === 400)
          console.log("EXITO")
        else if (response.status === 200)
          console.log("FALLO")
        });
    }
  }
}
</script>
