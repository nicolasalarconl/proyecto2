<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h2 class="title">PLATAFORMA DE ANALISIS POLITICO </h2>
            <p class="category">Created using Roboto Font Family</p>
          </md-card-header>
          <md-card-content>
             <div class="md-card-avatar">
                    
                    <br>
                    <md-button   class="md-round md-success">VISUALIZACION GENERAL</md-button>
                    <img  style="position:absolute;"   class="img" :src="require('@/assets/img/fondo.jpeg')">
                    <md-button   class="md-round md-success">VISUALIZACION GENERAL</md-button>

             </div>


          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>
