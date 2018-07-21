<template>
    <md-card class="md-card-profile">
      <div>
         <h3> {{ministros.name}} </h3>
         <p>.</p>
      </div>
       <div class="md-card-avatar">
         <img class="img" :src="ministros.image">
      </div>

      <md-card-content>
        <h6 class="category text-gray" :src="car"> </h6>
        <h4 class="card-title"> {{ministros.cargo}} </h4>
         <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> {{ministros.porcentaje}}% </span>
         <span> JULIO </span>
        <md-button class="md-round md-success" > VISUALIZAR</md-button>
      </md-card-content>
    </md-card>
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
