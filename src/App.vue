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

            <v-btn @click="backToMenu()" color="purple">
                Menu
            </v-btn>
          <v-btn @click="backToVpn()" color="green" class="ml-10" >
            Vpn
          </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                    @click="toggleTheme()"
                    text
            >
                <v-icon>{{ getThemeButtonIcon }}</v-icon>
            </v-btn>
            <v-btn

                    :color="getSocketColor"
                    text
            >
                <v-icon>mdi-connection</v-icon>
            </v-btn>
            <v-btn

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
    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
      backToMenu(){
        this.$router.push('/')
      },
      backToVpn(){
        this.$router.push('/vpn')
      },
      handleRefreshVictims(){
        fetch(this.api + "/port").then(async (d) => {
          this.$store.dispatch('apiState/setActivesConnexions', await d.text())

        }).catch((e) => {
          console.log(e);
        });
      }
    },
    computed: {
      getSocketColor() {
        return this.$store.getters["socket/isSocketConnected"] ? "green" : "red";
      },
      getThemeButtonIcon() {
        return this.$vuetify.theme.dark ? "mdi-brightness-4" : "mdi-brightness-6";
      }
    },

    mounted() {
      setInterval(this.handleRefreshVictims, 1500)
    }
  };
</script>
