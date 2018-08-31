<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="ministro md-card-profile">
          <div class="md-card-avatar">
            <img class="img" :src="ministros[$route.params.id].image">
          </div>
          <md-card-content>
            <h6 class="category text-gray">{{ ministros[$route.params.id].cargo }}</h6>
            <h4 class="card-title">{{ ministros[$route.params.id].nombre }}</h4>
          </md-card-content>
        </md-card>
      </div>
      <md-card>
        <md-card-content>
          <h4 class="title" align="center">Nivel de Aprobación</h4>
            <div id="chartdiv" style="width: 100%; height: 350px;"></div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Ministro',
  data () {
    return {
      datos: [],
      ministros:[]
    }
  },
  mounted: function () {
    var id = parseInt(this.$route.params.id) -1
    this.$http.get('http://localhost:8080/politicals/' + id + '/total')
      .then(response => {
        this.datos = response.body
        console.log('datos', this.datos)
        this.loadpie()
      }, response => {
        console.log('Error cargando lista')
      })

      this.$http.get('https://api.myjson.com/bins/ia9sc')
      .then(response2 => {
        this.ministros = response2.body
      })
      console.log(this.ministros)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
