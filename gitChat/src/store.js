import Vue from "vue";
import Vuex from "vuex";
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client'
Vue.use(Vuex);

<<<<<<< HEAD
let socket = io('http://localhost:3002');
=======
let socket = io('http://localhost:3000');
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d


const store = new Vuex.Store({
    state: {
        messages: [],
        roomsArray: [],
        userList: [],
<<<<<<< HEAD
        sender: {},
        user2user: {},
        type: 0,
        COLORS: [
            '#e21400', '#91580f', '#f8a700', '#f78b00',
            '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
            '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
        ],
    },
    mutations: {

=======
        sender:{},
        user2user:{}
    },
    mutations: {
       
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
        GET_ROOMS_MUTATION: function (state, data) {
            state.roomsArray = [];
            for (var p = 0; p < data.length; p++) {
                state.roomsArray.push({
                    rid: data[p].roomid,
                    rname: data[p].roomname
                });
            }
        },
        GET_USERS_MUTATION: function (state, data) {
            var y = JSON.parse(data);
            var x = y[0];
            for (var n = 0; n < x.length; n++) {
                state.userList.push({ userid: x[n].userid, username: x[n].username });
            }
        },
        ADD_MESSAGE_MUTATION: function (state, data) {
<<<<<<< HEAD
            var hash = 7;
            for (var i = 0; i < data.username.length; i++) {
                hash = data.username.charCodeAt(i) + (hash << 5) - hash;
            }
            var index = Math.abs(hash % state.COLORS.length);
            console.log("in colors" + index);
            console.log("colors " + state.COLORS[index]);
            state.messages.push({ "message": data.message, 'username': data.username, 'color': state.COLORS[index] });
        },
        SWITCH_ROOM_MUTATION: function (state, data) {
            // state.messages.splice(0, state.messages.length);
            //         if (Array.isArray(data) && data[0] && Array.isArray(data[0])) {
            //           data[0].forEach(function (msgItem) {
            //             // msgItem.color = scope.getUsernameColor(msgItem.username);
            //             console.log(msgItem.color);
            //             // msgItem.type = "userMessage";
            //             state.messages.push(msgItem);
            //           });
            //         }
        },
        SENDER_MUTATION: function (state, data) {
            console.log(data)
=======
            state.messages.push({ "message": data.message, 'username': data.username });
        },
        SWITCH_ROOM_MUTATION: function(state, data){
            state.messages.splice(0, state.messages.length);
        },
        SENDER_MUTATION: function(state, data){
            console.log(data)
            // state.sender.push({'username':data.username , 'userid':data.userid})
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
            state.sender.userid = data.userid;
            state.sender.username = data.username;
            console.log(state.sender)
        }
    },

    actions: {
        GET_ROOMS: function ({ commit, state }) {
            let scope = this;
            socket.emit("getallrooms", {}, (err, data) => {
                commit('GET_ROOMS_MUTATION', data);
            });
        },
        GET_USERS: function ({ commit, state }) {
            let scope = this;
            socket.emit("getusers", {}, function (output) {
                commit('GET_USERS_MUTATION', output);
            });
        },
        ADD_MESSAGE: function ({ commit, state }, new_message) {
            console.log(new_message)
<<<<<<< HEAD
            if (state.type == 1) {
                console.log("In 1");
                let scope = this;
                var data = {
                    userMessage: new_message.message,
                    senderid: scope.state.user2user.senderid,
                    sendername: scope.state.user2user.sendername,
                    receiverid: scope.state.user2user.receiverid,
                    receivername: scope.state.user2user.receivername
                }
                socket.emit('independant message', data);

            } else {

                socket.emit('new message', new_message);
            }
            // socket.emit('new message', new_message);
=======
            if (this.type == 1) {
                console.log("In 1");
                let scope= this;
                var data = {
                  userMessage: new_message.message,
                  senderid: scope.state.user2user.userid,
                  sendername:scope.state.user2user.username,
                  receiverid: scope.state.user2user.receiverid,
                  receivername: scope.state.user2user.receivername
                }
                socket.emit('independant message', data);
        
              } else {
        
                socket.emit('new message', new_message);
              }
            socket.emit('new message', new_message);
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
        },

        ADD_ROOM: function ({ commit, state }, new_room) {
            socket.emit('add room', new_room)
        },
<<<<<<< HEAD
        SWITCH_ROOM: function ({ commit, state }, data) {
            socket.emit('switchRoom', { newroom: data }, function (output) {
                state.type=0;
                state.messages.splice(0, state.messages.length);
                if (Array.isArray(output) && output[0] && Array.isArray(output[0])) {
                    output[0].forEach(function (msgItem) {
                    // msgItem.color = scope.getUsernameColor(msgItem.username);
                    console.log(msgItem.color);
                    // msgItem.type = "userMessage";
                    state.messages.push(msgItem);
                  });
                }
                // commit('SWITCH_ROOM_MUTATION', output);
            })
        },

        USER_CHAT: function ({ commit, state }, data) {
=======
        SWITCH_ROOM: function({commit, state}, data){
            socket.emit('switchRoom' ,{newroom: data} , function(output){
                commit('SWITCH_ROOM_MUTATION' , output);
            })
        },
        USER_CHAT: function({commit, state}, data){
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
            console.log(data)
            var scope = this;
            var person = {};
            // person.senderid = scope.state.sender.userid;
            // person.sendername = scope.state.sender.username;
            console.log(state.sender);
            console.log(state.sender.userid)
            person.senderid = scope.state.sender.userid;
            person.sendername = scope.state.sender.username;
            person.receiverid = data.userid;
            person.receivername = data.username;
            console.log(person);
<<<<<<< HEAD
            state.type = 1;
            //  person.room = this.room;
=======
            this.type = 1;
            //  person.room = this.room;
      
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
            scope.state.user2user.senderid = person.senderid;
            scope.state.user2user.sendername = person.sendername;
            scope.state.user2user.receiverid = person.receiverid;
            scope.state.user2user.receivername = person.receivername;
<<<<<<< HEAD
            console.log(scope.state.user2user);
            socket.emit('usertouser', person, function (output) {
                state.messages.splice(0, state.messages.length);
                if (Array.isArray(output) && output[0] && Array.isArray(output[0])) {
                  output[0].forEach(function (msgItem) {
                    // msgItem.color = scope.getUsernameColor(msgItem.username);
                    msgItem.usermessage = msgItem.message;
                    console.log(msgItem.color);
                    console.log("hey " + msgItem.message);
                    // msgItem.type = "userMessage";
                    state.messages.push(msgItem);
                  });
                }
            })
        },
        SENDER: function ({ commit, state }, data) {
            commit('SENDER_MUTATION', data);
=======
            socket.emit('usertouser' , person, function(output){

            })
      
        },
        SENDER: function({commit, state}, data){
            commit('SENDER_MUTATION', data)
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
        }
    },

    getters: {
<<<<<<< HEAD
=======

>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
    },
}
);
socket.on('new message', function (data) {
<<<<<<< HEAD
    console.log(JSON.stringify(data));
    store.commit("ADD_MESSAGE_MUTATION", data);
}),
 socket.on('room added', function (data) {
=======
    console.log(data.username);
    store.commit("ADD_MESSAGE_MUTATION", data);
}),
    socket.on('room added', function (data) {
>>>>>>> 7e3e9d7265d8caeda8823866ccfd62f15e58332d
        console.log(data);
        store.dispatch("GET_ROOMS", data);
    })

export default store;
