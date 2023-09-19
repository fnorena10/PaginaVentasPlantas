
<template  >
  <div class="principal">
    <div class="row" style="text-align:center">
      <div class=" col-4"  >
        <q-input 
          v-model="search"
          debounce="500"
          filled
          placeholder="Buscar"
          color="yellow"
          icon-color="blue"
          
          
          
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class=" col-4">
        <q-img
        src="../assets/logo.png"
        
        style="max-width: 250px">
        </q-img>
      
      </div>
      <div class="q-pa-md q-gutter-sm x  col-4" style="text-align: right;">
      <router-link to="/login-principal">
        <q-btn flat style="color: #ece910" label="Cuenta" />
      </router-link>
      </div>
    </div>
    <hr>
    <div class="row" align="center">
      <div class="col-3">
        <q-btn :ripple="false" color="secondary" label="No ripple" no-caps />

      </div>
      <div class="col-3">
        <q-btn color="yellow" label="Basic Menu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            
          </q-list>
        </q-menu>
      </q-btn>
      </div>
      <div class="col-3">
        <q-btn :ripple="false" color="secondary" label="No ripple" no-caps />
      </div>
      <div class="col-3">
        <q-btn :ripple="false" color="secondary" label="No ripple" no-caps />
      </div>
    </div>
  
    
    
    
    
    <div class="q-pa-md bg-black" >
      <div>
        <q-carousel 
          animated
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide :name="1" img-src="/src/assets/gira.jpg" />
          <q-carousel-slide :name="2" img-src="/src/assets/gira.jpg" />
          <q-carousel-slide :name="3" img-src="/src/assets/gira.jpg" />
          <q-carousel-slide :name="4" img-src="/src/assets/gira.jpg" />
        </q-carousel>
      </div> 
    </div>

    <q-row class="row">
      <!-- Columna 1 -->
      <q-col cols="4">
        <q-card>
          <q-img class="producto"
            src="/src/assets/planta1.jpg"
            alt="Producto 1"
          />
          <q-card-section>
            <div>Producto 1</div>
            <div>Precio: $10.00</div>
          </q-card-section>
        </q-card>
      </q-col>

      <!-- Columna 2 -->
      <q-col cols="4">
        <q-card>
          <q-img class="producto"
            src="/src/assets/planta1.jpg"
            alt="Producto 2"
          />
          <q-card-section>
            <div>Producto 2</div>
            <div>Precio: $15.00</div>
          </q-card-section>
        </q-card>
      </q-col>

      <!-- Columna 3 -->
      <q-col cols="4">
        <q-card>
          <q-img class="producto"
          src="/src/assets/planta1.jpg"
            alt="Producto 3"
          />
          <q-card-section>
            <div>Producto 3</div>
            <div>Precio: $20.00</div>
          </q-card-section>
        </q-card>
      </q-col>
    </q-row>
    <q-row class="row" >
      <!-- Columna 4 -->
      <q-col cols="4">
        <q-card>
          <q-img class="producto"
            src="/src/assets/planta1.jpg"
            alt="Producto 1"
            />
          <q-card-section>
            <div>Producto 1</div>
            <div>Precio: $10.00</div>
          </q-card-section>
        </q-card>
      </q-col>

      <!-- Columna 5 -->
      <q-col cols="4">
        <q-card>
          <q-img class="producto"
            src="/src/assets/planta1.jpg"
            alt="Producto 2"
           />
          <q-card-section>
            <div>Producto 2</div>
            <div>Precio: $15.00</div>
          </q-card-section>
        </q-card>
      </q-col>

      <!-- Columna 6 -->
      <q-col cols="4">
        <q-card>
          <q-img class="producto"
            src="/src/assets/planta1.jpg"
            alt="Producto 3"
            />
          <q-card-section>
            <div>Producto 3</div>
            <div>Precio: $20.00</div>
          </q-card-section>
        </q-card>
      </q-col>
    </q-row>
    
  </div>
</template>

<script>
import { ref } from 'vue';


  export default {
    setup () {
      return {
        slide: ref(1),
        search: null
      }
    },
    components: {
      
    }
  }
</script>

<style lang="css">
  .principal {
   
  }
 .word-container {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
 .word1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: yellow; 
    font-size: 25px;
  }
  .word2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: green; 
    font-size: 25px;
  }
  .carousel-image {
    max-width: 100%; 
    height: auto; 
  }
  .row{
    
    padding: 10px 15px;
    
    
    
  }
 
.producto{
  width: 439px;
}
</style>



