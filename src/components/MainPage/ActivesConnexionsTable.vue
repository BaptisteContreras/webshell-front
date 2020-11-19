<template>
    <v-data-table
            :headers="headers"
            :items="getTabData"
            :search="search"
    >
        <template v-slot:item.actions="{ item }">
            <v-icon
                    v-if="item.hasSession"
                    small
                    class="mr-2"
                    @click="goToShell(item)"
            >
                mdi-console
            </v-icon>
            <v-icon
                    v-if="!item.hasSession"
                    small
                    class="mr-2"
                    @click="openShell(item)"
            >
                mdi-lan-connect
            </v-icon>
            <v-icon
                    v-else
                    small
                    class="mr-2"
                    @click="closeShell(item)"
            >
                mdi-lan-disconnect
            </v-icon>
            <v-icon
                    small
                    @click="deleteHost(item)"
            >
                mdi-delete
            </v-icon>

        </template>
    </v-data-table>

</template>

<script>
    import socketUtils from "../../mixins/socket/utils/socketUtils";
  export default {
    name: "ActivesConnexionsTable",
    mixins : [socketUtils],
    props : {
      search : {
        required : true
      }
    },

    data () {
      return {
        headers : [
          {
            text: 'Host',
            value: 'host'
          },
          {
            text: 'Port',
            value: 'port'
          },
          {
            text: 'Actions',
            value: 'actions',
            sortable: false
          }

        ],
      }
    },

    methods : {
      deleteHost(item){
        console.log(item)
      },
      closeShell(item){
        this.getSocketConnexion().emit("deleteSession", JSON.stringify({
          sessionId : item.session
        }))
      },
      goToShell(item){
        this.$router.push('shell/'+item.session)
      },
      openShell(item){
        this.getSocketConnexion().emit("startSession", JSON.stringify({
          port : item.port
        }))

      }
    },
    computed : {
      getTabData() {
        let ports = this.$store.getters['socket/getSocketSessionsPorts'];

        return this.$store.getters['apiState/getActivesConnexions'].map((el) => {
          let hasSession = ports.includes(el.port)
          let session = hasSession ? this.$store.getters['socket/getSocketSessions'].filter((cSession) => cSession.port == el.port)[0].id : null;
          return {
            host : el.host,
            port : el.port,
            hasSession,
            session
          }
        })
      }
    }
  };
</script>

<style scoped>

</style>
