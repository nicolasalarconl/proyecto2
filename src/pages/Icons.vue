<template>
  <div class="content">
    <div class="md-layout">
        <md-card>
         <img  class="img" :src="require('@/assets/img/fondoM.png')">
       </md-card>
    </div>
    <div class="md-layout">
        <md-card>
          <md-card-content>
            <h4 class="title" align="center">Nivel de Aprobación general</h4>
            <div id="chartdiv"></div>
          </md-card-content>
        </md-card>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      datos: []
    }
  },
  mounted: function () {
    // GET /someUrl
    this.$http.get('https://api.myjson.com/bins/14avqk')
      .then(response => {
        // get body data
        this.datos = response.body
        console.log('datos', this.datos)
        // this.obtenerFecha();
        this.loadpie()
      }, response => {
        // error callback
        console.log('Error cargando lista')
      })
  },
  methods: {
    loadpie: function () {
      var chart = AmCharts.makeChart(
        'chartdiv', {
          'type': 'pie',
          'adjustPrecision': true,
          'startDuration': 1,
          'pullOutRadius': '10%',
          'fontSize': 15,
          'legend': {
            'enabled': true,
            'align': 'center',
            'markerType': 'circle',
            'useMarkerColorForValues': true,
            'labelText': 'Comentarios: ',
            'textClickEnabled': true,
            'valueAlign': 'left'
          },
          'colors': [
            '#32CD32',
            '#FF6347',
            '#00BFFF'
          ],
          'labelTickColor': '#000000',
          'dataProvider': this.datos,
          'valueField': "numero",
          'titleField': "aprobacion",
          'balloonText': "Aprobación [[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
          'export': {
            'enabled': true
          }
        })
    }
  }
}
</script>

<style>
#chartdiv {
  width: 100%;
  height: 500px;
  font-size: 13px;
}             
</style>