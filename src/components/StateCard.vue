<template>
    <v-col
            cols="3"
    >
        <v-card
                :color="color"
                dark
        >
            <v-card-title class="headline" >
                {{ title }}
            </v-card-title>

            <v-card-subtitle>{{ state }}</v-card-subtitle>

        </v-card>
    </v-col>
</template>

<script>
  export default {
    name: "StateCard",
    props : {
      color : {
        required: true,
      },
      title : {
        required: true,
      },
      state : {
        required: true,
      },
    }
  };
</script>
