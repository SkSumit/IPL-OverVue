<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container box">
        <ag-grid-vue
          style=" height: 90vh;"
          class="ag-theme-alpine"
          :columnDefs="gridOptions.columnDefs"
          :rowData="gridOptions.rowData"
          :defaultColDef="gridOptions.defaultColDef"
          rowSelection="multiple"
          :sideBar="true"
          :modules="gridOptions.modules"
        >
        </ag-grid-vue>
      </div>
    </div>
  </section>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { MultiFilterModule } from "@ag-grid-enterprise/all-modules";
const file = require("../assets/csv/Players.csv");
console.log(file);
export default {
  name: "Dashboard",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      sideBar: null,
      modules: [MultiFilterModule],
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.gridOptions = {
      defaultColDef: {
        resizable: true,
        autoHeight: true,
        autoWidth: true,
        filter: "agMultiColumnFilter",
      },
      columnDefs: [
        {
          headerName: "Player",
          field: "Player_Name",
          sortable: true,
          filter: "agMultiColumnFilter",
          checkboxSelection: true,
        },
        {
          headerName: "DOB",
          field: "DOB",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Country",
          field: "Country",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Team",
          field: "Team",
          sortable: true,
          filter: true,
        },
      ],
      rowData: file.map((element) => {
        return {
          Player_Name: element.Player_Name,
          DOB: element.DOB,
          Country: element.Country_Name,
          Team: element.Team_Id,
        };
      }),
    };
  },
};
</script>

<style scoped></style>
