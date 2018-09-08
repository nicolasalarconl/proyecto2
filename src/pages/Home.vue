<template>
  <div class="container">
        <md-card>
             <img  class="img" :src="require('@/assets/img/moneda.jpg')">
          <md-card-header data-background-color="green" style="position: relative;">
            <h2 class="title">PLATAFORMA DE ANÁLISIS POLÍTICO</h2>
          </md-card-header>
          <md-card-content>
             <div class="md-card-avatar">
                   <div class="md-layout-item md-size-100">
                        <div class="places-buttons text-center">
                              <md-button type="button"  :href="'#/General'" class=" md-button md-primary md-sm md-theme-default" >
                                  <div class="md-ripple">
                                      <div class="md-button-content"><b>VISUALIZACIÓN GENERAL</b></div>
                                        <span></span>
                                    </div>
                              </md-button>
                                <md-button type="button" class="md-button md-primary md-sm md-theme-default" :href="'#/Gabinete'">
                                    <div class="md-ripple">
                                       <div class="md-button-content"><b>VISUALIZACIÓN DE GABINETE</b></div>
                                       <span></span>
                                    </div>
                                </md-button>
                          </div>
                  </div>
             </div>
          </md-card-content>
        </md-card>
    </div>
</template>


<script>
export default{
  name: 'Home',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
h2.title{
  text-align:center;
}
</style>
