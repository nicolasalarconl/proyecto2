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
            <h4 class="title" align="center">Grafo</h4>
            <div align="center">
              <svg width="600" height="300"></svg>
            </div>          
          </md-card-content>
        </md-card>
    </div>
  </div>

</template>

<script>

export default{
  data:function(){
    return{
      data: []
    }
  },
  mounted:function(){
    this.$http.get('https://api.myjson.com/bins/okd7s')
      .then(response=>{
        this.data = response.body;
        console.log(this.data);
        this.cargarGrafo(this.data);
      }, response=>{
        console.log("error de conexion");
      });
  },
  methods:{
    cargarGrafo:function(graph){
      var svg = d3.select("svg"),
          width = +svg.attr("width"),
          height = +svg.attr("height");
      
      var color = d3.scaleOrdinal(d3.schemeCategory20);
      
      var simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(100).strength(1))
          .force("charge", d3.forceManyBody())
          .force("center", d3.forceCenter(width / 2, height / 2));

        var link = svg.append("g")
            .attr("class", "links")
          .selectAll("line")
          .data(graph.links)
          .enter().append("line")
            .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.append("g")
            .attr("class", "nodes")
          .selectAll("g")
          .data(graph.nodes)
          .enter().append("g")
          .on("mouseover", mouseover)
          .on("mouseout", mouseout)

        var circles = node.append("circle")
            .attr("r", 8)
            .attr("fill", function(d) { return color(d.group); })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        var lables = node.append("text")
            .text(function(d) {
              return d.id;
            })
            .attr('x', 6)
            .attr('y', 3);

        node.append("title")
            .text(function(d) { return d.id; });

        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);

        function ticked(){
          link
              .attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });
      
          node
              .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
              })
          };
        function dragstarted(d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        };
        function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        };
        function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        };
        function mouseover() {
          d3.select(this).select("circle").transition()
              .duration(750)
              .attr("r", 16);
        };

        function mouseout() {
          d3.select(this).select("circle").transition()
              .duration(750)
              .attr("r", 8);
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
  stroke: #fff;
  stroke-width: 0px;
  stroke-opacity: 0.6;
}

text {
  font-family: sans-serif;
  font-size: 13px;
}
</style>
