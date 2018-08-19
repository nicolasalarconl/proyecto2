<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
             <img  class="img" :src="require('@/assets/img/moneda.jpg')">
          <md-card-header data-background-color="green" style="position: relative;">
            <h2 class="title">PLATAFORMA DE ANÁLISIS POLÍTICO</h2>
          </md-card-header>
          <md-card-content>
             <div class="md-card-avatar">
                   <div class="md-layout-item md-size-100">
                        <div class="places-buttons text-center">
                              <md-button type="button" :href="'#/General'" class=" md-button md-primary md-theme-default" >
                                  <div class="md-ripple">
                                      <div class="md-button-content">VISUALIZACIÓN GENERAL </div>
                                        <span></span>
                                    </div>
                              </md-button>
                                <md-button type="button" class="md-button md-primary md-theme-default" :href="'#/Gabinete'">
                                    <div class="md-ripple">
                                            <div class="md-button-content"> VISUALIZACIÓN DE GABINETE</div>
                                             <span></span>
                                    </div>
                                </md-button>
                            </div>
                  </div>
             </div>

          </md-card-content>
        </md-card>
      </div>
    </div>
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
