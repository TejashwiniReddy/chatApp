<template>
    <ul id="pages" class pages>
        <li class="chat page" id="chat page">
            <div class="col-md-8" style="height:100%">
                <div class="chatArea">
                    <ul class="messages">
                        <li v-for="message in messages">
                            <!-- {{message.message}} -->
<<<<<<< HEAD
                            <span v-bind:style="{ color: message.color}">{{message.username}}</span>
                            <!-- <span>{{message.username}}</span> -->
=======
                            <span>{{message.username}}</span>
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
                            <span>{{message.message}}</span>    
                        </li>
                    </ul>
                </div>
                <input type="text" class="inputMessage" v-model="message" v-on:keydown.enter='messageEnter'>
            </div>
            <div class="col-md-2" style="height:100%">
                <div class="chatArea">
                    <h3>{{roomslist}}</h3>
                    <ul class="rooms" >
                        <li v-for="room in roomsArray" v-on:click="switchroom(room.rname)">
                            {{room.rname}}
                        </li>

                    </ul>
                </div>
                <input type="text" class="insertrooms" v-model="roomName" v-on:keydown.enter='addRoom()' placeholder="Add rooms">
            </div>

            <div class="col-md-2 userArea" style="height:100%">
                <div class="chatArea">
                    <h3>{{userslist}}</h3>
                    <ul class="users" >
                        <li v-for="user in userList" v-on:click='userChat(user)'>
                            {{user.username}}
                        </li>
                    </ul>
                </div>
            </div>

        </li>
    </ul>
<<<<<<< HEAD


=======
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
</template>



<script>
import Vue from "vue";
import VueSocketio from "vue-socket.io";
import io from "socket.io-client";
<<<<<<< HEAD
Vue.use(VueSocketio, io("http://localhost:3002"));
=======
Vue.use(VueSocketio, io("http://localhost:3000"));
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
export default {
  name: "chat",
  data() {
    return {
      userslist: "Users Present",
      roomslist: "Rooms List",
      message: "",
<<<<<<< HEAD
      roomName: ""
=======
      roomName: "",
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
    };
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    customEmit: function(val) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    }
  },

  methods: {
    getRoomsList: function() {
      this.$store.dispatch("GET_ROOMS");
    },
    getUsersList: function() {
      this.$store.dispatch("GET_USERS");
    },
    messageEnter: function() {
      // console.log(this.message);
      let scope = this;
      this.$store.dispatch("ADD_MESSAGE", {
        message: this.message,
        username: scope.username
      });
      this.message = "";
    },
    addRoom: function() {
      this.$store.dispatch("ADD_ROOM", this.roomName);
      this.roomName = "";
    },
    switchroom: function(data) {
      this.$store.dispatch("SWITCH_ROOM", data);
    },
<<<<<<< HEAD
    userChat: function(data) {
      this.$store.dispatch("USER_CHAT", data);
    },
    sender: function() {
      let scope = this;
      this.$store.dispatch("SENDER", {
        username: scope.username,
        userid: scope.userid
      });
    }
=======
    userChat: function(data){
      this.$store.dispatch("USER_CHAT", data);
    },
    sender: function(){
      let scope = this;
      this.$store.dispatch('SENDER', {
        username: scope.username,
        userid: scope.userid
      })
    }

>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
  },
  mounted() {
    let scope = this;
    var cookie = document.cookie;
    var cookieSplitObj = cookie.split(";");
    for (var t = 0; t < cookieSplitObj.length; t++) {
      // console.log(cookieSplitObj[t]);
      scope.useridvalues = cookieSplitObj[0];
      console.log(scope.useridvalues + "useridvalues");
      scope.usernamevalues = cookieSplitObj[1];
      // console.log(scope.usernamevalues + "usernamevalues");
    }
<<<<<<< HEAD
=======

>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
    var y = scope.usernamevalues.split("=");
    for (var j = 0; j < y.length; j++) {
      // console.log("in j loop " + y[1]);
      scope.username = y[1];
      // console.log(scope.username)
<<<<<<< HEAD
    }
=======

    }

>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
    var m = scope.useridvalues.split("=");
    for (var u = 0; u < m.length; u++) {
      // console.log(" in u loop" + m[1]);
      scope.userid = m[1];
    }
    scope.getRoomsList();
    scope.getUsersList();
    scope.sender();
  },

  computed: {
    messages() {
<<<<<<< HEAD
      console.log(this.$store.state.messages);
=======
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
      return this.$store.state.messages;
    },
    roomsArray() {
      return this.$store.state.roomsArray;
    },
    userList() {
      return this.$store.state.userList;
    }
  }
};
</script>