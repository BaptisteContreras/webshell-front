<template>
       <v-container>
           <v-row>
               <v-col cols="2">
                   <h1>Session</h1>
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
                   <v-form>
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
                   </v-form>
               </v-col>
           </v-row>

       </v-container>
</template>

<script>
  import socketUtils from "../../mixins/socket/utils/socketUtils";
  import ShellMessage from "./ShellMessage";

  export default {
    name: "Shell",
    components: {ShellMessage},
    data() {
      return {
        command : '',
        commandQueue : [],
        messages : [...this.session.messages],
        lastCommandId : this.session.lastCommandId
      }
    },
    props : {
      session : {
        required : true
      }
    },
    mixins : [socketUtils],
    methods : {
      generateCommandId(){
        return this.lastCommandId++
      },
      sendCommand(){
        let commandId = this.generateCommandId();
        this.getSocketConnexion().emit("sendCommand", JSON.stringify(this.queueCommand(
          {
            command : this.command,
            commandId,
            session : this.session.id
          }
        )))
        this.clearCommand()
      },
      clearCommand () {
        this.command = ''
      },
      queueCommand(command){
        this.messages.push({
          message : command.command,
          type : 'command',
          statut: 'normal',
          commandId : command.commandId
        })

        return command;
      }
    },
    computed : {
      getMessages(){
        return this.messages
      },

      getShellHeight(){
        return window.innerHeight;
      }
    },

  };

</script>

<style scoped>

</style>
