<template>
          <md-card-content>
            <i class="fas fa-chart-area" style="font-size:130%;"> Influencia dentro del Gabinete</i>
            <div align="center">
              <svg width="1000" height="600"></svg>
            </div>
          </md-card-content>
</template>
<script src="d3.legend.js"></script>
<script>

export default{
  data: function () {
    return {
      data: []
    }
  },
  mounted: function () {
    this.$http.get('https://api.myjson.com/bins/sd5oc')
      .then(response => {
        this.data = response.body
        console.log(this.data)
        this.cargarGrafo(this.data)
      }, response => {
        console.log('error de conexion')
      })
  },
  methods: {
    cargarGrafo: function (graph) {
      var svg = d3.select('svg'),
        width = +svg.attr('width'),
        height = +svg.attr('height')

      var color = d3.scaleOrdinal()
        .domain(["Ministro", "Twitter"])
        .range(["#FF2900", "#00AB31"]);

      var m = '#FF2900'
      var c = '#00AB31'
      var n = '#F39C12'
      var o = '#808B96'
      const links = graph.links;

      var simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(function (d) { return d.id }).distance(100).strength(1))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2))

      var link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(graph.links)
        .enter().append('line')
        .attr('stroke-width', function (d) { return Math.sqrt(d.value) })
 

      var node = svg.append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(graph.nodes)
        .enter().append('g')
        .on("click", function (d) {
           if (d3.event.ctrlKey)
            location.href = 'http://www.google.com';
        })
        .on("mouseover", function(d) {
          d3.select(this).select("text").style("font", "18px sans-serif"); 
          var connectedNodeIds = graph.links
            .filter(x => x.source.id == d.id || x.target.id == d.id)
            .map(x => x.source.id == d.id ? x.target.id : x.source.id);

          d3.select(".nodes")
            .selectAll("circle")
            .attr("fill", function(c) {
              if (connectedNodeIds.indexOf(c.id) > -1 || c.id == d.id) return n;
              else return o;
            })
        })
        .on("mouseout", function(d) {  
          d3.select(this).select("text").style("font", "13px sans-serif");       
          d3.select(".nodes")
            .selectAll("circle")
            .attr('fill', function (d) { if (d.weight === 10) return m; else return c}) 
        });
        
      var circles = node.append('circle')
        .attr('r', function (d) { if (d.weight === 10) return 14; else return 10})
        .attr('fill', function (d) { if (d.weight === 10) return m; else return c})
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended))

      node.append('text')
        .text(function (d) {
          return d.username
        })
        .attr('x', 13)
        .attr('y', 3)


      node.append('title')
        .text(function(d){
              if (d.username == 'Sebastian Piñera')
                return 'Presidente de Chile';
              else if(d.username == 'Andrés Chadwick')
                return 'Ministro del Interior y Seguridad Pública';
              else if(d.username == 'Roberto Ampuero')
                return 'Ministro de Relaciones Exteriores';
              else if(d.username == 'Alberto Espina')
                return 'Ministro de Defensa Nacional';
              else if(d.username == 'Felipe Larraín Bascuñán')
                return 'Ministro de Hacienda';
              else if(d.username == 'Gonzalo Blumel Mac Iver')
                return 'Ministro de Secretaría General de la Presidencia';
              else if(d.username == 'Cecilia Pérez Jara')
                return 'Ministra de Secretaría General de Gobierno';
              else if(d.username == 'José Ramón Valente Vias')
                return 'Ministro de Economía, Fomento y Turismo';
              else if(d.username == 'Alfredo Moreno Charme')
                return 'Ministro de Desarrollo Social';
              else if(d.username == 'Marcela Cubillos Sigall')
                return 'Ministra de Educación';
              else if(d.username == 'Hernán Larraín Fernández')
                return 'Ministro de Justicia y Derechos Humanos';
              else if(d.username == 'Nicolás Monckeberg Díaz')
                return 'Ministro de Trabajo y Previsión Social';
              else if(d.username == 'Juan Andrés Fontainer Talavera')
                return 'Ministro de Obras Públicas';
              else if(d.username == 'Emilio Santelices Cuevas')
                return 'Ministro de Salud';
              else if(d.username == 'Cristián Monckeberg Bruner')
                return 'Ministro de Vivienda y Urbanismo';
              else if(d.username == 'Antonio Walker Prieto')
                return 'Ministro de Agricultura';
              else if(d.username == 'Baldo Prokurica Prokurica')
                return 'Ministro de Minería';
              else if(d.username == 'Gloria Hutt Hesse')
                return 'Ministra de Transporte y Telecomunicaciones';
              else if(d.username == 'Felipe Ward Edwards')
                return 'Ministro de Bienes Nacionales';
              else if(d.username == 'Susana Jiménez Schuster')
                return 'Ministra de Energía';
              else if(d.username == 'Carolina Schmidt Zaldívar')
                return 'Ministra de Medio Ambiente';
              else if(d.username == 'Pauline Kantor Pupkin')
                return 'Ministra de Deporte';
              else if(d.username == 'Isabel Plá Jarufe')
                return 'Ministra de la Mujer y la Equidad de Género';
              else if(d.username == 'Consuelo Valdés Chadwick')
                return 'Ministra de Culturas, las Artes y el Patrimonio';
              else 
                return 'Cuenta de Twitter';
            })
      
      var legend = svg.selectAll(".legend")
        .data(["Ministro", "Twitter"])
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

        // draw legend colored rectangles
        legend.append("rect")
          .attr("x", width - 160)
          .attr("y", height - 562)
          .attr("width", 15)
          .attr("height", 15)
          .style("fill", function(d){return color(d)});

        // draw legend text
        legend.append("text")
          .attr("x", width - 140)
          .attr("y", height - 555)
          .attr("dy", ".35em")
          .style("text-anchor", "begins")
          .text(function(d) { return d;});

      simulation
        .nodes(graph.nodes)
        .on('tick', ticked)

      simulation.force('link')
        .links(graph.links)


      let linkedByIndex = {};
      links.forEach((d) => {
        linkedByIndex[`${d.source.index},${d.target.index}`] = true;
      });

      function isConnected(a, b) {
        return isConnectedAsTarget(a, b) || isConnectedAsSource(a, b) || a.index === b.index;
      };

      function isConnectedAsSource(a, b) {
        return linkedByIndex[`${a.index},${b.index}`];
      };

      function isConnectedAsTarget(a, b) {
        return linkedByIndex[`${b.index},${a.index}`];
      };

      function isEqual(a, b) {
        return a.index === b.index;
      }; 

      function ticked () {
        link
          .attr('x1', function (d) { return d.source.x })
          .attr('y1', function (d) { return d.source.y })
          .attr('x2', function (d) { return d.target.x })
          .attr('y2', function (d) { return d.target.y })

        node
          .attr('transform', function (d) {
            return 'translate(' + d.x + ',' + d.y + ')'
          })
      };

      function dragstarted (d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      };
      function dragged (d) {
        d.fx = d3.event.x
        d.fy = d3.event.y
      };
      function dragended (d) {
        if (!d3.event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      };
    }
  }
}

</script>

<style>
.links line {
  stroke: #999;
  stroke-opacity: 0.4;
}

.nodes circle {
  stroke: #000;
  stroke-width: px;
  stroke-opacity: 1;
}

text {
  font-family: sans-serif;
  font-size: 13px;
}
</style>
