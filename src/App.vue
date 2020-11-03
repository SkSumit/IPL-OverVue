<template>
  <div id="app">
    <Header />
    <Dashboard />
  </div>
</template>

<script>
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    Header,
    Dashboard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css"; */
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-material.css";
</style>
