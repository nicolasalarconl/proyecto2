<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>

             <img  class="img" :src="require('@/assets/img/moneda.jpg')">



          <md-card-header data-background-color="green" style="position: absolute;">

            <h2 class="title">  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp   &nbsp  &nbsp  &nbsp &nbsp  &nbspPLATAFORMA DE ANÁLISIS POLÍTICO  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp   &nbsp    &nbsp  &nbsp  &nbsp  &nbsp </h2>

          
          </md-card-header>

 

          <md-card-content>

           
             <div class="md-card-avatar">
                    <br>
                    <br>
                    <br>
                   <div class="md-layout-item md-size-100">
                        <div class="places-buttons text-center">
                 
                              <md-button type="button" :href="'#/Icons'" class=" md-button md-primary md-theme-default" >
                                  <div class="md-ripple">
                                      <div class="md-button-content">VISUALIZACIÓN GENERAL </div> 

                                        <span></span>
                                    </div>

                              </md-button> 

                                <md-button type="button" class="md-button md-primary md-theme-default" :href="'#/dashboard'">
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
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>
