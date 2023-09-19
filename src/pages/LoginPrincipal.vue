<template>
    <div class="login-container">
      <div class="login-form">
        <h3 class="login-title">Iniciar Sesión</h3>
        <q-input
          outlined
          dense
          v-model="username"
          label="Usuario"
          class="login-input"
          color="yellow"
        />
        <q-input
          outlined
          dense
          v-model="password"
          label="Contraseña"
          type="password"
          class="login-input" 
          color="yellow"
        />
        <q-btn
          color="black"
          label="Aceptar"
          @click="login"
          class="login-button"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      login() {
        // Agrega aquí la lógica de inicio de sesión
        // Puedes validar las credenciales, realizar una solicitud al servidor, etc.
        console.log("Usuario:", this.username);
        console.log("Contraseña:", this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    background-color: black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-form {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  
  .login-title {
    margin-bottom: 20px;
  }
  
  .login-input {
    margin-bottom: 10px;
    
  }
  
  .login-button {
    margin-top: 20px;
  }
  </style>