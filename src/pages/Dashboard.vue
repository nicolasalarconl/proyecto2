<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <user-card :ministros="presidente">
        </user-card>
     </div>
     <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25" v-for="ministro in ministros">
       <user-card :ministros="ministro">
       </user-card>
     </div>
   </div>
 </div>
</template>

<script>
import {
  UserCard
} from '../pages'

export default{
  components: {
    UserCard
  },
  data () {
    return {
      ministros:[],
      presidente:[],
      data:[],
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      }
    },
  mounted: function(){
    this.$http.get('https://api.myjson.com/bins/ia9sc')
    .then(response => {
      this.data = response.body
      this.presidente = this.data[0]
      var i;
      for(i = 1; i < this.data.length; i++){
        this.ministros.push(this.data[i])
      }
    })
  }
}
</script>
