<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <center>
             <img  class="img" :src="require('@/assets/img/em404.png')" style="height: 200px;width: 200px;position: static;">

</center>
          <md-card-header data-background-color="green" style="position: absolute;">

            <h2 class="title">ERROR 404 La página solicitada no se encuentra</h2>

          </md-card-header>

          <md-card-content>

             <div class="md-card-avatar">
                    <br>
                    <br>
                    <br>
                   <div class="md-layout-item md-size-100">
                        <div class="places-buttons text-center">

                              <md-button type="button" :href="'#/Home'" class=" md-button md-primary md-theme-default" >
                                  <div class="md-ripple">
                                      <div class="md-button-content">Volver a la pagina principal </div>

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
name: 'Error'
export default{
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>
