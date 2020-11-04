<template>
  <div>
      <h1>Session</h1>
      <v-list dense>
          <v-list-item-group
                  color="primary"
          >
              <v-list-item

                      v-for="(item, i) in getData"
                      :key="i"
              >
                  <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>
  </div>
</template>

<script>
  export default {
    name: "ShellSessionInfo",
    props: {
      session: {
        required: true
      }
    },
    computed : {
      getData(){
        return [
          {
            text : this.session.id,
            icon : 'mdi-music-accidental-sharp'
          },
          {
            text : this.session.port,
            icon : 'mdi-swap-vertical'
          },
        ];
      }
    }
  };
</script>

<style scoped>

</style>
