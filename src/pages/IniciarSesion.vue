<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Inicio de Sesión</h4>
      </md-card-header>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Usuario</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div> 
   
          <div class="md-layout-item md-small-size-100 md-size-51">
            <md-field>
              <label>Contraseña</label>
              <md-input v-model="lastname" type="password"></md-input>
            </md-field>
          </div>
        
           
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-flex>

    </v-layout>
  </v-container>


            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Iniciar Sesión</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>