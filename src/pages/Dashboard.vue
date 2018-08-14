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
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from '../components'

import {
  EditProfileForm,
  UserCard
} from '../pages'

export default{
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
     EditProfileForm,
    UserCard
  },
  data () {
    return {
      presidente: {
        id: 0,
          name:'Sebastian Piñera',
          cargo: 'Presidente de la Republica',
          porcentaje: '100',
          image: require('@/assets/img/faces/SEBASTIAN_PINERA.png')
        },
      ministros: [
        {
          id: 1,
          name:'Andrés Chadwick',
          cargo:  'Ministerio del Interior y Seguridad Pública',
          porcentaje: '100',
          image: require('@/assets/img/faces/ANDRES_CHADWICK.png')
        },
        {
          id: 2,
          name: 'Roberto Ampuero',
           cargo:  'Ministro de Relaciones Exteriores',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ROBERTO_AMPUERO.png')
        },
        {
          id: 3,
          name: 'Alberto Espina',
          cargo:  'Ministro de Defensa',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ALBERTO_ESPINA.png')
        },
        {
          id: 4,
          name: 'Felipe Larraín Bascuñán',
          cargo:  'Ministro de Hacienda',
          porcentaje: '100',
          image:  require('@/assets/img/faces/FELIPE_LARRAIN.png')
        },
        {
          id: 5,
          name: 'Gonzalo Blumel Mac-Iver ',
          cargo:  'Ministro Secretario General de la Presidencia',
          porcentaje: '100',
          image:  require('@/assets/img/faces/GONZALO_BLUMEL.png')
        },
        {
          id: 6,
          name: 'Cecilia Pérez',
          cargo:  'Ministra Secretario General de Gobierno',
          porcentaje: '100',
          image:  require('@/assets/img/faces/CECILIA_PEREZ.png')
        },
         {
           id: 7,
          name: 'José Ramón Valente Vías',
          cargo:  'Ministro de Economía, Fomento y Turismo',
          porcentaje: '100',
          image:  require('@/assets/img/faces/JOSE_RAMON_VALENTE.png')
        },
         {
           id: 8,
          name: 'Alfredo Moreno Charme',
          cargo: 'Ministro de Desarrollo Social',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ALFREDO_MORENO.png')
        },
        {
          id: 9,
          name: 'Marcela Cubillos Sigall',
          cargo: 'Ministra de Educación',
          porcentaje: '100',
          image:  require('@/assets/img/faces/MARCELA_CUBILLOS.png')
        },
         {
           id: 10,
          name: 'Hernán Larraín Fernández ',
          cargo: 'Ministro de Justicia y Derechos Humanos',
          porcentaje: '100',
          image:  require('@/assets/img/faces/HERNAN_LARRAIN.png')
        },
          {
            id: 11,
          name: 'Nicolás Monckeberg Díaz',
          cargo: 'Ministro del Trabajo y Previsión Social',
          porcentaje: '100',
          image:  require('@/assets/img/faces/NICOLAS_MONCKEBERG.png')
        },
        {
          id: 12,
          name: 'Juan Andrés Fontaine Talavera ',
          cargo: 'Ministro de Obras Públicas',
          porcentaje: '100',
          image:  require('@/assets/img/faces/JOSE_RAMON_VALENTE.png')
        },
        {
          id: 13,
          name: 'Emilio Santelices Cuevas',
          cargo: 'Ministro de Salud',
          porcentaje: '100',
          image:  require('@/assets/img/faces/EMILIO_SANTELICES.png')
        },
        {
          id: 14,
          name: 'Cristian Monckeberg Bruner',
          cargo: 'Ministro de Vivienda y Urbanismo',
          porcentaje: '100',
          image:  require('@/assets/img/faces/CRISTIAN_MONCKEBERG.png')
        },
        {
          id: 15,
          name: 'Antonio Walker Prieto',
          cargo: 'Ministro de Agricultura',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ANTONIO_WALKER.png')
        },
         {
           id: 16,
          name: 'Baldo Prokurica Prokurica ',
          cargo: 'Ministro de Minería',
          porcentaje: '100',
          image:  require('@/assets/img/faces/BALDO_PROKURICA.png')
        },
         {
           id: 17,
          name: 'Gloria Hutt Hesse',
          cargo: 'Ministra de Transportes y Telecomunicaciones',
          porcentaje: '100',
          image:  require('@/assets/img/faces/GLORIA_HUTT.png')
        },
          {
            id: 18,
          name: 'Felipe Ward Edwards',
          cargo: 'Ministro de Bienes Nacionales',
          porcentaje: '100',
          image:  require('@/assets/img/faces/FELIPE_WARD.png')
        },
         {
           id: 19,
          name: 'Susana Jiménez Schuster ',
          cargo: 'Ministra de Energía',
          porcentaje: '100',
          image:  require('@/assets/img/faces/SUSANA_JIMENEZ.png')
        },
          {
            id: 20,
          name: 'María Carolina Schmidt Zaldívar',
          cargo: 'Ministra de Medio Ambiente',
          porcentaje: '100',
          image:  require('@/assets/img/faces/CAROLINA_SCHMIDT.png')
        },
         {
           id: 21,
          name: 'Pauline Kantor Pupkin  ',
          cargo: 'Ministra de Medio Ambiente',
          porcentaje: '100',
          image:  require('@/assets/img/faces/PAULINE_KANTOR.png')
        },
        {
          id: 22,
          name: 'Isabel Plá Jarufe',
          cargo: 'Ministra de la Mujer y la Equidad de Género',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ISABEL_PLA.png')
        },
         {
           id: 23,
          name: 'Mauricio José Rojas Mullor',
          cargo: 'Ministro de la Cultura y Las Artes',
          porcentaje: '100',
          image:  require('@/assets/img/faces/MAURICIO_ROJAS.png')
        }
      ],
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
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
    }
  }
}




</script>
