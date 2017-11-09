<template>
    <div class="wrapper container">
      <h2 class="text-center">Please Login</h2>
      <div class="form-group">
      <label for="email">Username:</label>
      <input type="text" class="form-control" tabindex="1" v-model="username" name="username" placeholder="Username" required="" autofocus="">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" tabindex="2" class="form-control"  v-model="password" name="password" placeholder="Password" required="">
    </div>
    <div class="checkbox">
      <label><router-link to="/register"> Not yet registered? Register here </router-link></label>
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="login">Login</button>
    <!-- <h3 style="color:red">{{validation}}</h3> -->
    <!-- <vue-toastr ref="toastr"></vue-toastr> -->
    </div>
</template>

    

<script>
// import io from "socket.io-client";
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueRouter from "vue-router";
import VueResource from "vue-resource";

export default {
  name: "login",
  data() {
    //  errorMessage :''
    return {
      //   url: "http://localhost:3000/demo",
      username: "",
      password: "",
      validation: ""
    };
  },
  methods: {
    triggerMe: function() {
      new Vue.$http.get(url);
    },
    login: function() {
      if (this.username == "" || this.password == "") {
        alert("please fill the fields");
      } else {
        this.$http
          .post("http://localhost:3000/api/login1", {
            username: this.username,
            password: this.password
          })
          .then(function(response) {
            if (response.body.Status && response.body.Status == "success") {
              console.log(response.body.success);
              console.log("done");
              // var userValues=[UserId =  response.body.UserId]
              document.cookie =  "UserId=" + response.body.UserId
              document.cookie =  "UserName=" + response.body.UserName
              // document.cookie={'UserId':response.body.UserId , 'UserName':response.body.UserName}
              // username=response.body.UserName
              this.$router.push("chat");
            } else {
              console.log("notdone");
              // this.$router.push('register')
              // this.validation =
              //   "Wrong Username/Password.(please enter correct username and password)";
              // this.$toasted.error('Wrong Username/Password')
              // this.$toastr.error('Message', 'Title', options);
              this.$toast.error({
                message:'Wrong Username/Password',
                position:'bottom center',
                showDuration: 100,
                hideDuration: 1000,
                timeOut: 10000
              })
}
            

          });
      }
    }
  },
  // created(){
  //   let ckeditor = document.createElement('script');
  //   ckeditor.setAttribute()
  // }
};

</script>

