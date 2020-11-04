<template>
       <v-container>
           <v-row>
               <v-col cols="2">

                   <ShellSessionInfo :session="getCurrentSession" />
               </v-col>
               <v-col cols="10">
                   <v-card

                           class="mx-auto pb-0"
                           min-width="100%"
                           min-height="100%"
                   >

                       <v-card-title>
                           Shell connected and ready to hack
                       </v-card-title>

                         <v-card-text min-height="100%" class="pb-0">
                             <v-virtual-scroll

                                     :height="getShellHeight/2"
                                     item-height="30"
                                     :items="getMessages"
                             >
                                 <template v-slot:default="{ item }">
                                     <ShellMessage :message="item"></ShellMessage>
                                 </template>
                             </v-virtual-scroll>
                         </v-card-text>
                   </v-card>
                   <v-container >
                       <v-row>
                           <v-col cols="12">
                               <v-text-field

                                       v-model="command"
                                       :append-outer-icon="command ? 'mdi-send' : ''"
                                       filled
                                       clear-icon="mdi-close-circle"
                                       clearable
                                       solo-inverted
                                       label="rm -rf /*"
                                       type="text"
                                       @click:append-outer="sendCommand"
                                       @click:clear="clearCommand"
                               ></v-text-field>
                           </v-col>
                       </v-row>
                   </v-container>
               </v-col>
           </v-row>

       </v-container>
</template>

<script>
  import socketUtils from "../../mixins/socket/utils/socketUtils";
  import ShellMessage from "./ShellMessage";
  import ShellSessionInfo from "./ShellSessionInfo";

  export default {
    name: "Shell",
    components: {ShellSessionInfo, ShellMessage},
    data() {
      return {
        command : '',
      }
    },
    props : {
      sessionId : {
        required : true
      }
    },
    mixins : [socketUtils],
    methods : {
      generateCommandId(){
        this.$store.dispatch('socket/incrementLastCommandId', this.sessionId)
        return this.$store.getters['socket/getCurrentSession'].lastCommandId
      },
      sendCommand(){
        let commandId = this.generateCommandId();
        this.getSocketConnexion().emit("sendCommand", JSON.stringify(this.queueCommand(
          {
            command : this.command,
            commandId,
            sessionId : this.sessionId
          }
        )))
        this.clearCommand()
      },
      clearCommand () {
        this.command = ''
      },

      queueCommand(command){
        this.$store.dispatch('socket/addSessionMessage', {
          id : this.sessionId,
          message : {
            message : command.command,
            type : 'COMMAND',
            statut: 'PENDING',
            date : new Date(),
            commandId : command.commandId
          }
        })

        return command;
      }
    },
    computed : {
      getMessages(){
        return [...this.$store.getters['socket/getCurrentSession'].messages]
      },

      getCurrentSession(){
        return this.$store.getters['socket/getCurrentSession']
      },

      getShellHeight(){
        return window.innerHeight;
      }
    },

  };

</script>

<style scoped>

</style>
