<template>
  <v-app>
    <v-app-bar
            app
            color="primary"
            dark
    >
      <div class="d-flex align-center">
        <v-img
                alt="Logo"
                class="shrink mr-2"
                contain
                src="./assets/logo.jpg"
                transition="scale-transition"
                width="80"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
              :color="getSocketColor"
              text
      >
        <v-icon>mdi-connection</v-icon>
      </v-btn>
      <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              text
      >
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: "App",
    computed : {
      getSocketColor(){
        return this.$store.getters["socket/isSocketConnected"] ? "green" : "red";
      }
    }
  };
</script>
