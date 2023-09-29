<template>
    <div class="row">
        <div class="col-12" >
            <span style="color: yellow;">Inicio/ProductoPlantas</span>
        </div>
    </div>
    <div class="row" align="center">
        <div class="col-12" >
            <router-link to="Inicio">
              <q-img
                src="../assets/logo.png"
          
                style="max-width: 250px">
              </q-img>
            </router-link>|
        </div>
        <div class="row">
            <div class="col-3">
                <div class="q-pa-md">
                    <div class="q-gutter-md row">
                        <q-select
                            label="Color de la flor"
                            transition-show="jump-up"
                            transition-hide="jump-up"
                            filled
                            v-model="model"
                            :options="options"
                            style="width: 309px" color="yellow"
                        />

                    </div>
                </div>

            </div>

            <div class="col-3">
                <div class="q-pa-md">
                    <div class="q-gutter-md row">
                        <q-select
                            label="Tipo de iliminación"
                            transition-show="jump-up"
                            transition-hide="jump-up"
                            filled
                            v-model="model2"
                            :options="options2"
                            style="width: 309px" color="yellow"
                        />
                        
                    </div>
                </div>
                
            </div>
            <div class="col-3">
                <div class="q-pa-md">
                    <div class="q-gutter-md row">
                        <q-select
                            label="Caracteristicas"
                            transition-show="jump-up"
                            transition-hide="jump-up"
                            filled
                            v-model="model3"
                            :options="options3"
                            style="width: 309px" color="yellow"
                        />
                        
                    </div>
                </div>
                
            </div>
            <div class="col-3">
                <div class="q-pa-md">
                    <div class="q-gutter-md row">
                        <q-select
                            label="Clima"
                            transition-show="jump-up"
                            transition-hide="jump-up"
                            filled
                            v-model="model4"
                            :options="options4"
                            style="width: 309px" color="yellow"
                        />
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      options: [
        'Rojo', 'Rosado', 'Amarillo', 'Verde', 'Blanco'
      ],
      model2: ref(null),
      options2: [
        'Luz artificial', 'Luz solar directa', 'Luz solar indirecta', 'Luz LED', 'Luz de alta intensidad'
      ],
      model3: ref(null),
      options3: [
        'Plantas de interior', 'Plantas de exterior', 'Plantas de invernadero'
      ],
      model4: ref(null),
      options4: [
        'Clima tropical', 'Clima desertico', 'Clima de montaña', 'Clima costero'
      ]
    }
  }
}
</script>