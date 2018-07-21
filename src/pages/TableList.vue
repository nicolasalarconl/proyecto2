<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Simple Table</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>

          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>

        </md-card>
      </div>

 
    </div>
  </div>
</template>


<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
       <img class="img" :src="cardUserImage1">
    </div>


    <md-card-content>
      <h6 class="category text-gray" :src="car">  </h6>
      <h4 class="card-title"> MINISTRO DE ECONOMIA  </h4>
     
       <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> 55% </span> JULIO
              </p>
      <md-button class="md-round md-success">VISUALIZAR</md-button>
    </md-card-content>
  </md-card>
</template>



<div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                   
</div>



<script>
import {
   SimpleTable,
 // OrderedTable
  // Ministros
} from '@/components'

export default{
  components: {
 // OrderedTable,
    SimpleTable
   // Ministros
  }
}
</script>
