<template>
    <p>> {{ message.message }}</p>
</template>

<script>
  export default {
    name: "ShellMessage",
    props : {
      message : {
        required : true
      }
    }
  };
</script>

<style scoped>

</style>
