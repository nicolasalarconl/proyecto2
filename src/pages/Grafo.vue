<template>
  <div class="content">
    <div class="md-layout">
        <md-card>
         <img  class="img" :src="require('@/assets/img/5b4c9b7099327.jpg')">
       </md-card>
    </div>
    <div class="md-layout">
        <md-card>
          <md-card-content>
            <h4 class="title" align="center">Influencia dentro del Gabinete</h4>
            <div align="center">
              <svg width="1200" height="600"></svg>
            </div>
          </md-card-content>
        </md-card>
    </div>
  </div>

</template>

<script>

export default{
  data: function () {
    return {
      data: []
    }
  },
  mounted: function () {
    this.$http.get('http://localhost:8080/neo4j/grafo')
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

      var color = d3.scaleOrdinal(d3.schemeCategory20c)
      var c = '#FF2900'

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
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)

      var circles = node.append('circle')
        .attr('r', function (d) { if (d.weight === 10) return 10; else return 6 })
        .attr('fill', function (d) { if (d.weight === 10) return c; else return color(d.weight) })
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended))

      node.append('text')
        .text(function (d) {
          return d.username
        })
        .attr('x', 10)
        .attr('y', 3)

      node.append('title')
        .text(function (d) {
          if (d.weight === 10) {
            return d.cargo // TO-DO backend envia cargo junto con el nombre
          } else return 'Cuenta de Twitter'
        })

      simulation
        .nodes(graph.nodes)
        .on('tick', ticked)

      simulation.force('link')
        .links(graph.links)

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
      function mouseover () {
        d3.select(this).select('circle').transition()
          .duration(750)
          .attr('r', 16)
      };

      function mouseout () {
        d3.select(this).select('circle').transition()
          .duration(750)
          .attr('r', 8)
      };
    }
  }
}

</script>

<style>
.links line {
  stroke: #999;
  stroke-opacity: 0.6;
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
