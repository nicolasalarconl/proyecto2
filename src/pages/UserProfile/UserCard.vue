<template>
    <md-card class="md-card-profile" style="min-height: 450px">
      <div  >
         <h3> {{ministros.name}} </h3>
         <p>.</p>
         <br>
      </div>
       <div class="md-card-avatar"  >
         <img class="img" :src="ministros.image">
         <br>
      </div>
      <md-card-content>

        <div>
          <h6 class="category text-gray"> </h6>
          <h4 class="card-title"> {{ministros.cargo}} </h4>
         </div>
         <div>
           <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> {{ministros.porcentaje}}% </span>
           <span> JULIO </span>
          <br>
        </div>
        <div>
          <md-button class="md-round md-success" :href="'#/ministro/' + ministros.id"> VISUALIZAR</md-button>
        </div>

      </md-card-content>
    </md-card>
</template>

<script>
export default {
  name: 'user-card',
  data () {
    return {
      selected: []
    }
  },
  props: {
    ministros: Object
  }
}
</script>
