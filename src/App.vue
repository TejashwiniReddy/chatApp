<template>
  <!-- <login></login> -->
  <router-view></router-view>
</template>
<script>
import login from './login'
import register from './register'
import 'jquery/dist/jquery.min.js'
export default {
  name: "app",
  components: {
    //navbar
    login,
    register,
  }
};
</script>

