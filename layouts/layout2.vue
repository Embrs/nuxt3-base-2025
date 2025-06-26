<script setup lang="ts">
const tab = ref('one');
</script>

<template>
<div class="layout2">
  <div class="header-area">
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

  <div class="menu-area">
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          />
        </v-list>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" />
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared" />
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" />
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px" />
    </v-layout>

  </div>
  <div class="body-area">
    <slot />
  </div>
</div>
</template>

<style scoped lang="scss">
.layout2 {
  max-width: 100vw;
  min-height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "menu header"
    "menu body";
  overflow-x: hidden;
  background-color: #eee;
}
.header-area {
  grid-area: header;
  background-color: #aaa;
}
.menu-area {
  grid-area: menu;
}
.body-area {
  grid-area: body;
}

</style>
