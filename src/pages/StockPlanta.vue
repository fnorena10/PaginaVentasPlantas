<template>
    <div class="row">
        <div class="col-12" >
            <span style="color: yellow;">Cuenta/Federico Noreña Colorado</span>
        </div>
    </div>
    <div class="row" align="center">
        <div class="col-12" >
          <router-link to="Inicio">
              <q-img
                src="../assets/logo.png"
          
                style="max-width: 250px">
              </q-img>
            </router-link>
        </div>
    </div>
    <div class="row" align="center" >
        <div class="col-5" >
            <q-input 
                debounce="500"
                filled
                placeholder="Consultar por nombre de producto"
                color="yellow"
                icon-color="blue"
                >
                <template v-slot:append>
                    <q-icon name="search" @click="buscar" />
                </template>
            </q-input>
        </div>
    </div>
    <div>
    <q-table
      :rows="tableData"
      :columns="columns"
    ></q-table>
  </div>
  <div class="row" align="center">
    <div class="col-4">
      <q-btn flat style="color: #ece910" label="Insertar"  />
    </div>

    <div class="col-4">
      <q-btn flat style="color: #ece910" label="Eliminar" />
    </div>

    <div class="col-4">
      <q-btn flat style="color: #ece910" label="Modificar" />
    </div>

  </div>

    

</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {id: '1', Nombre: 'Orquidea rosada', Descripción: 'Planta de interior', Precio:'50.000', Stock:'30', FechaCre:'20/09/2023', FechaMod:'20/09/2023' }
      ],
      columns: [
        {
          name: 'id',
          required: true,
          label: 'ID',
          align: 'left',
          field: 'id',
          sortable: true,
        },
        {
          name: 'Nombre',
          required: true,
          label: 'Nombre',
          align: 'center',
          field: 'Nombre',
          sortable: true,
        },
        {
          name: 'Descripción',
          required: true,
          label: 'Descripción',
          align: 'center',
          field: 'Descripción',
          sortable: true,
        },
        {
          name: 'Precio',
          required: true,
          label: 'Precio',
          align: 'center',
          field: 'Precio',
          sortable: true,
        },
        {
          name: 'Stock',
          required: true,
          label: 'Stock',
          align: 'center',
          field: 'Stock',
          sortable: true,
        },
        {
          name: 'FechaCre',
          required: true,
          label: 'FechaCre',
          align: 'center',
          field: 'FechaCre',
          sortable: true,
        },
        {
          name: 'FechaMod',
          required: true,
          label: 'FechaMod',
          align: 'center',
          field: 'FechaMod',
          sortable: true,
        },
      ],
    };
  },
};
</script>
