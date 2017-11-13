<template>
  <div class="wrapper container" id="wrapper">
        <!-- <div class="form-signin">
            <h2 class="form-signin-heading">{{formHeading}}</h2>
            <input type="text" class="form-control" name="username" v-model="username" placeholder="Username" required="" autofocus="" />
            <input type="password" class="form-control" name="password" v-model="password" placeholder="Password" required="" />
            <input type="text" class="form-control" name="displayname" v-model="displayname" placeholder="Display name" required="" />
            <input type="text" class="form-control" name="imageurl" v-model="imageurl" placeholder="Image URL" required="" />
             <button class="btn btn-lg btn-primary btn-block" v-on:click="register">register</button>  

        </div> -->
        <h2 class="text-center">Register Here</h2>
      <div class="form-group">
      <label for="email">Username:</label>
      <input type="text" class="form-control" v-model="username" tabindex="1" name="username" placeholder="Username" required="" autofocus="">
 
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" tabindex="2" v-model="password"  name="password" placeholder="Password" required="">
    </div>
    <div class="form-group">
      <label for="pwd">Display name:</label>
      <input type="text" class="form-control" name="displayname" tabindex="3" v-model="displayname" placeholder="Display name" required="" />
    </div>
    <div class="form-group">
      <label for="pwd">Image url:</label>
      <input type="text" class="form-control" tabindex="4" name="imageurl" v-model="imageurl" placeholder="Image URL" required="" />
    </div>
    <!-- <div class="checkbox">
      <label><router-link to="/register"> if registered already! login here </router-link></label>
    </div> -->
    <button class="btn btn-primary " v-on:click="register">Register</button>  
 
    </div>
   
</template>

    <script>
import "jquery/dist/jquery.min.js";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
export default {
  name: "register",
  data() {
    return {
      formHeading: "REGISTER",
      username: "",
      password: "",
      displayname: "",
      imageurl: ""
    };
  },
  methods: {
    register: function() {
      if (
        this.username == "" ||
        this.password == "" ||
        this.displayname == "" ||
        this.imageurl == ""
      ) {
        alert('All fields are mandatory. Please fill them ');
        // if (this.username == "") {
        //   this.$toast.error({
        //     message: "Username is mandatory",
        //     position: "top right",
        //     showDuration: 100,
        //     hideDuration: 1000,
        //     timeOut: 10000
        //   });
        // }
        // else if (this.password == "") {
        //   this.$toast.error({
        //     message: "password is mandatory",
        //     position: "top right",
        //     showDuration: 100,
        //     hideDuration: 1000,
        //     timeOut: 10000
        //   });
        // }
      } else {
        this.$http
<<<<<<< HEAD
          .post("http://192.168.1.159:3002/api/addUser", {
=======
          .post("http://192.168.1.159:3000/api/addUser", {
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
            username: this.username,
            password: this.password,
            displayname: this.displayname,
            imageurl: this.imageurl
          })
          .then(function(response) {
            if (response.data.success) {
              console.log(response.data.success);
              console.log("done");
              // window.location.href='/register'

              // router.go('/register')
              this.$router.push("/");
            } else {
              console.log("notdone");
            }
          });
      }
    }
  }
};
</script>


