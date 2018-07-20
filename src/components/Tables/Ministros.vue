<template>
  <div>
    <md-table v-model="ministros" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.cargo }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.porcentaje }}</md-table-cell>
       <!-- <md-table-cell md-label="Salary">{{ item.image }}</md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>


<!-- 
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
*/
 -->

<script>
export default {
  name:   'ministros-table', // 'simple-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      ministros: [
        {
          name: 'Andrés Chadwick Piñera',
          cargo: 'Ministerio del Interior y Seguridad Pública',
          porcentaje: '100',
          image: require('@/assets/img/faces/ANTONIO_WALKER.png')
        },
         {
          name: 'Roberto Ampuero Espinoza ',
          cargo: 'Ministro de Relaciones Exteriores',
          porcentaje: '50',
          image: require('@/assets/img/faces/ANTONIO_WALKER.png')
        }
         {
          name: 'Alberto Espina Otero ',
          cargo: 'Ministro de Defensa',
          porcentaje: '10',
          image: require('@/assets/img/faces/ANTONIO_WALKER.png')
        }

      ]
    }
  }
}
</script>



         <!-- {{min.name}}
             <!--<md-card class="md-card-profile">
              <div class="md-card-avatar">
               <!--   <img class="img" :src="cardUserImage1"> -->
            <!--   </div>

              <md-card-content>
                <h6 class="category text-gray" :src="car">  </h6>
                <h4 class="card-title"> {{min.cargo}}}  </h4>
               
                 <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> 55% </span> JULIO
                        </p>
                <md-button class="md-round md-success">VISUALIZAR</md-button>
              </md-card-content>
            </md-card> -->