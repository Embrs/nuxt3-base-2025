<script setup lang="ts">
const tab = ref('one');
</script>

<template>
<div class="layout1">
  <div class="header-area">
    <p>header</p>
  </div>
  <div class="tab-area">
    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>
  </div>
  <div class="body-area">
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-sheet class="v-theme--light rounded-lg" style="min-height: 268px;" />
        </v-col>
        <v-col cols="12" md="8">
          <v-sheet class="v-theme--light rounded-lg" style="min-height: 70vh;" />
        </v-col>
        <v-col cols="12" md="2">
          <v-sheet class="v-theme--light rounded-lg" style="min-height: 268px;" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</div>
</template>

<style scoped lang="scss">
.layout1 {
  max-width: 100vw;
  min-height: 100vh;
  width: 100vw;
  display: grid;

  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header"
    "tab"
    "body";
  overflow-x: hidden;
  background-color: #eee;
}
.header-area {
  grid-area: header;
  min-height: 30px;
  text-align: center;
  background-color: #aaa;
}
.tab-area {
  grid-area: tab;
  background-color: #fff;
}
.body-area {
 grid-area: body;
}

</style>
