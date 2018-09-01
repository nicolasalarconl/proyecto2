<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="ministro md-card-profile">
          <div class="md-card-avatar">
            <img class="img" :src="ministros[$route.params.id - 1].image">
          </div>
          <md-card-content>
            <h6 class="category text-gray">{{ ministros[$route.params.id - 1].cargo }}</h6>
            <h4 class="card-title">{{ ministros[$route.params.id - 1].nombre }}</h4>
          </md-card-content>
        </md-card>
      </div>
      <md-card>
        <md-card-content>
          <h4 class="title" align="center">Nivel de Aprobación</h4>
            <div id="chartdiv1"></div>
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
    var id = parseInt(this.$route.params.id)
    this.$http.get('http://localhost:8080/politicals/' + id + '/total')
      .then(response => {
        this.datos = response.body
        console.log('datos', this.datos)
        this.crearchart()
      }, response => {
        console.log('Error cargando lista')
      })

      this.$http.get('https://api.myjson.com/bins/ia9sc')
      .then(response2 => {
        this.ministros = response2.body
      })
      this.crearchart()
  },
  methods:{
    crearchart:function(){
    var chart = AmCharts.makeChart(
      "chartdiv1",{
        "type": "pie",
        "balloonText": "Aprobación [[title]]<br><span style='font-size:14px'><b>[[value]]</b>([[percents]]%)</span>",
        "innerRadius": "40%",
        'fontSize': 15,
        "defs": {
        "filter": [{
            "id": "shadow",
            "width": "200%",
            "height": "200%",
            "feOffset": {
              "result": "offOut",
              "in": "SourceAlpha",
              "dx": 0,
              "dy": 0
            },
            "feGaussianBlur": {
              "result": "blurOut",
              "in": "offOut",
              "stdDeviation": 5
            },
            "feBlend": {
              "in": "SourceGraphic",
              "in2": "blurOut",
              "mode": "normal"
            }
          }]
        },
        'colors': [
            '#32CD32',
            '#FF6347',
            '#00BFFF'
        ],        
        "titleField": "aprobacion",
        "valueField": "numero",
        "allLabels": [],
        "balloon": {},
        'export': {
          'enabled': true
        },
        "legend": {
          "enabled": true,
          "align": "center",
          'textClickEnabled': true,
          "labelText": "Comentarios",
          "markerType": "circle",
          "valueAlign": "left",
          'useMarkerColorForValues': true,
        },
        "titles": [],
        "dataProvider": this.datos,
        });
      chart.addListener("init", handleInit);
      chart.addListener("rollOverSlice", function(e) {
        handleRollOver(e);
      });

      function handleInit(){
        chart.legend.addListener("rollOverItem", handleRollOver);
      };

      function handleRollOver(e){
        var wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
      };  
    }
  }
}
</script>

<style>
#chartdiv1 {
  width: 100%;
  height: 500px;
  font-size: 13px;
}

.amcharts-pie-slice {
  transform: scale(1);
  transform-origin: 50% 50%;
  transition-duration: 0.3s;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  cursor: pointer;
  box-shadow: 0 0 30px 0 #000;
}
              
</style>
