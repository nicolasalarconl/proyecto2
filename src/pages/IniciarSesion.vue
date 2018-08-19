<template>
  <form>
    <md-card>
      <md-card-header>
        <h4 class="title">Inicio de Sesión</h4>
      </md-card-header>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Usuario</label>
              <md-input v-model="username" type="text" @keyup="username = $event.target.value"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-51">
            <md-field>
              <label>Contraseña</label>
              <md-input v-model="password" type="password" @keyup="password = $event.target.value"></md-input>
            </md-field>
          </div>
        </div>
        <div class="md-layout-item md-size-100 text-right">
          <md-button class="md-raised md-success" v-on:click="inicio">Iniciar Sesión</md-button>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default{
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    inicio () {
      var json_data = {
        usuario: this.username,
        password: this.password
      }
      const aux = JSON.stringify(json_data)
      console.log(aux)
      /*
      fetch('http://localhost:3000/login',{
          method: 'POST',
          headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json'
          },
          body: aux
      }).then(response => {
        if(response.status === 200)
          console.log("OK!");
        else
          console.log("ERROR!");
      });
      */
    }
  }
}
</script>
