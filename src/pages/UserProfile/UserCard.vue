<template>
  <div>
    <md-card class="md-card-profile" v-for="ministro in ministros">
      <div>
         <h3> {{ministro.name}} </h3>
         <p>.</p>
      </div>
       <div class="md-card-avatar">
         <img class="img" :src="ministro.image">
      </div>

      <md-card-content>
        <h6 class="category text-gray" :src="car"> </h6>
        <h4 class="card-title"> {{ministro.cargo}} </h4>
         <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> {{ministro.porcentaje}}% </span>
         <span> JULIO </span>
        <md-button class="md-round md-success" > VISUALIZAR </md-button>
      </md-card-content>
    </md-card>
  </div>
</template>


<!--
<script>

export default {
  name: 'user-card',


  props: {
    cardUserImage1: {
      type: String,
      default: require('@/assets/img/faces/ANTONIO_WALKER.png')
    },

  }

  ,
  data () {
    return {
    }
  }
}

</script>
<style>

</style>

-->

<script>
export default {
  name: 'user-card',
  data () {
    return {
      selected: [],
    }
  },
  props: {
    ministros: Object
  }
}
</script>
