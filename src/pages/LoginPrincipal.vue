
<template>
  <div class="row">
    <div class="col-12" >
      <span style="color: yellow;">Mi cuenta/Acceder</span>
    </div>
  </div>
  <div class="login-container">
    <q-page>
      <q-page-container>
        <div class="q-pa-md" align="center">
          <q-card class="q-pa-md" color="background">
            <router-link to="Inicio">
              <q-img
                src="../assets/logo.png"
          
                style="max-width: 250px">
              </q-img>
            </router-link>
            <div class="q-mb-md text-h6">Iniciar sesión</div>
            <q-input outlined label-color="yellow" color="green" v-model="email" label="Nombre de usuario o Correo electrónico" />
            <q-input outlined label-color="yellow" color="green"  v-model="password" label="Contraseña" type="password" />
            <q-btn flat style="color: green;" label="Acceder" @click="login"  />
            <q-btn flat style="color: yellow;" label="¿Olvidaste la contraseña?"  />
          </q-card>
          
        </div>
      </q-page-container>
    </q-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.password !== '') {
        // Redirige al usuario a StockPlanta.vue
        this.$router.push('/Stock-planta');
      } else {
        // Muestra una alerta y limpia los campos
        alert('Debe ingresar cualquier letra en ambos campos');
        this.password = ''; // Limpia el campo de contraseña
      }
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados para el componente de inicio de sesión */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.q-card {
  width: 300px;
}
</style>