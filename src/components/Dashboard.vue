<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container box">
        <ag-grid-vue
          style=" height: 90vh;"
          class="ag-theme-material"
          :columnDefs="gridOptions.columnDefs"
          :rowData="gridOptions.rowData"
          :defaultColDef="gridOptions.defaultColDef"
          rowSelection="multiple"
          :sideBar="true"
          :modules="gridOptions.modules"
          :animateRows="true"
          :statusBar="gridOptions.statusBar"
          :groupUseEntireRow="true"
        >
        </ag-grid-vue>
      </div>
    </div>
  </section>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import {
  MultiFilterModule,
  RowGroupingModule,
} from "@ag-grid-enterprise/all-modules";
const file = require("../assets/csv/Players.csv");

export default {
  name: "Dashboard",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      sideBar: null,
      modules: [MultiFilterModule, RowGroupingModule],
      statusBar: null,
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.gridOptions = {
      defaultColDef: {
        floatingFilter: true,
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
          rowGroup: true,
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
      statusBar: {
        statusPanels: [
          {
            statusPanel: "agTotalAndFilteredRowCountComponent",
            align: "left",
          },
          {
            statusPanel: "agTotalRowCountComponent",
            align: "center",
          },
          { statusPanel: "agFilteredRowCountComponent" },
          { statusPanel: "agSelectedRowCountComponent" },
          { statusPanel: "agAggregationComponent" },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
