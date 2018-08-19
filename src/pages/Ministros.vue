<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
       <img class="img" :src="cardUserImage">
    </div>

    <md-card-content>
      <h6 class="category text-gray">  MINISTRO DE  XXXXXXX </h6>
      <h4 class="card-title"> NOMBRE DEL MINISTRO</h4>
      <p class="card-description">
          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
      </p>
       <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> 55% </span> increase in today sales.
        </p>
      <md-button class="md-round md-success">Follow</md-button>
    </md-card-content>
  </md-card>
</template>

<script>

export default {
  name: 'user-card',
  props: {
    cardUserImage: {
      type: String,
      default: require('@/assets/img/faces/ANTONIO_WALKER.png')
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style>

</style>
