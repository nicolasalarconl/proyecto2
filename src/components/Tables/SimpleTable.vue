<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.cargo }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.porcentaje }}</md-table-cell>
        <md-table-cell md-label="Salary">{{ item.image }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>

</template>

<script>
export default {
  name: 'simple-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [
        {
          name:'Andrés Chadwick Piñera',
          cargo:  'Ministerio del Interior y Seguridad Pública',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ANDRES_CHADWICK.png')
        },
        {
          name: 'Roberto Ampuero Espinoza',
           cargo:  'Ministro de Relaciones Exteriores',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ROBERTO_AMPUERO.png')
        },
        {
          name: 'Alberto Espina Otero ',
          cargo:  'Ministro de Defensa',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ALBERTO_ESPINA.png')
        },
        {
          name: 'Felipe Larraín Bascuñán',
          cargo:  'Ministro de Hacienda',
          porcentaje: '100',
          image:  require('@/assets/img/faces/FELIPE_LARRAIN.png')
        },
        {

          name: 'Gonzalo Blumel Mac-Iver ',
          cargo:  'Ministro Secretario General de la Presidencia',
          porcentaje: '100',
          image:  require('@/assets/img/faces/GONZALO_BLUMEL.png')
        },
        {
          name: 'Cecilia Pérez',
          cargo:  'Ministro Secretario General de Gobierno',
          porcentaje: '100',
          image:  require('@/assets/img/faces/CECILIA_PEREZ.png')
        },
         {
          name: 'José Ramón Valente Vías',
          cargo:  'Ministro de Economía, Fomento y Turismo',
          porcentaje: '100',
          image:  require('@/assets/img/faces/JOSE_RAMON_VALENTE.png')
        },
         {
          name: 'Alfredo Moreno Charme',
          cargo: 'Ministro de Desarrollo Social',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ALFREDO_MORENO.png')
        },
        {
          name: 'Alfredo Moreno Charme',
          cargo: 'Ministro de Desarrollo Social',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ALFREDO_MORENO.png')
        },
        {
          name: 'Gerardo Varela Alfonso',
          cargo: 'Ministro de Educación',
          porcentaje: '100',
          image:  require('@/assets/img/faces/GERARDO_VARELA.png')
        },
         {
          name: 'Hernán Larraín Fernández ',
          cargo: 'Ministro de Justicia y Derechos Humanos',
          porcentaje: '100',
          image:  require('@/assets/img/faces/HERNAN_LARRAIN.png')
        },
          {
          name: 'Nicolás Monckeberg Díaz',
          cargo: 'Ministro del Trabajo y Previsión Social',
          porcentaje: '100',
          image:  require('@/assets/img/faces/NICOLAS_MONCKEBERG.png')
        },
        {
          name: 'Juan Andrés Fontaine Talavera ',
          cargo: 'Ministro de Obras Públicas',
          porcentaje: '100',
          image:  require('@/assets/img/faces/JOSE_RAMON_VALENTE.png')
        },
        {
          name: 'Juan Andrés Fontaine Talavera ',
          cargo: 'Ministro de Obras Públicas',
          porcentaje: '100',
          image:  require('@/assets/img/faces/JUAN_ANDRES_FONTAINE.png')
        },
        {
          name: 'Emilio Santelices Cuevas',
          cargo: 'Ministro de Salud',
          porcentaje: '100',
          image:  require('@/assets/img/faces/EMILIO_SANTELICES.png')
        },
        {
          name: 'Cristian Monckeberg Bruner',
          cargo: 'Ministro de Vivienda y Urbanismo',
          porcentaje: '100',
          image:  require('@/assets/img/faces/CRISTIAN_MONCKEBERG.png')
        },
        {
          name: 'Antonio Walker Prieto',
          cargo: 'Ministro de Agricultura',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ANTONIO_WALKER.png')
        },
         {
          name: 'Baldo Prokurica Prokurica ',
          cargo: 'Ministro de Minería',
          porcentaje: '100',
          image:  require('@/assets/img/faces/BALDO_PROKURICA.png')
        },
         {
          name: 'Gloria Hutt Hesse',
          cargo: 'Ministra de Transportes y Telecomunicaciones',
          porcentaje: '100',
          image:  require('@/assets/img/faces/GLORIA_HUTT.png')
        },
          {
          name: 'Felipe Ward Edwards',
          cargo: 'Ministro de Bienes Nacionales',
          porcentaje: '100',
          image:  require('@/assets/img/faces/FELIPE_WARD.png')
        },
         {
          name: 'Susana Jiménez Schuster ',
          cargo: 'Ministra de Energía',
          porcentaje: '100',
          image:  require('@/assets/img/faces/SUSANA_JIMENEZ.png')
        },
          {
          name: 'Marcela Cubillos Sigall',
          cargo: 'Ministra de Medio Ambiente',
          porcentaje: '100',
          image:  require('@/assets/img/faces/MARCELA_CUBILLOS.png')
        },  
         {
          name: 'Pauline Kantor Pupkin  ',
          cargo: 'Ministra de Medio Ambiente',
          porcentaje: '100',
          image:  require('@/assets/img/faces/PAULINE_KANTOR.png')
        }, 
        {
          name: 'Isabel Plá Jarufe',
          cargo: 'Ministra de la Mujer y la Equidad de Género',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ISABEL_PLA.png')
        },   
         {
          name: 'Alejandra Pérez Lecaros ',
          cargo: 'Ministra de la Cultura y Las Artes',
          porcentaje: '100',
          image:  require('@/assets/img/faces/ALEJANDRA_PEREZ.png')
        }
      ]
    }
  }
}
</script>
