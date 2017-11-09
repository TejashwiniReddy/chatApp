import Vue from "vue";
import Vuex from "vuex";
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client'
Vue.use(Vuex);

let socket = io('http://localhost:3000');


const store = new Vuex.Store({
    state: {
        messages: [],
        roomsArray: [],
        userList: [],
        sender:{},
        user2user:{}
    },
    mutations: {
       
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
            state.messages.push({ "message": data.message, 'username': data.username });
        },
        SWITCH_ROOM_MUTATION: function(state, data){
            state.messages.splice(0, state.messages.length);
        },
        SENDER_MUTATION: function(state, data){
            console.log(data)
            // state.sender.push({'username':data.username , 'userid':data.userid})
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
        },

        ADD_ROOM: function ({ commit, state }, new_room) {
            socket.emit('add room', new_room)
        },
        SWITCH_ROOM: function({commit, state}, data){
            socket.emit('switchRoom' ,{newroom: data} , function(output){
                commit('SWITCH_ROOM_MUTATION' , output);
            })
        },
        USER_CHAT: function({commit, state}, data){
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
            this.type = 1;
            //  person.room = this.room;
      
            scope.state.user2user.senderid = person.senderid;
            scope.state.user2user.sendername = person.sendername;
            scope.state.user2user.receiverid = person.receiverid;
            scope.state.user2user.receivername = person.receivername;
            socket.emit('usertouser' , person, function(output){

            })
      
        },
        SENDER: function({commit, state}, data){
            commit('SENDER_MUTATION', data)
        }
    },

    getters: {

    },
}
);
socket.on('new message', function (data) {
    console.log(data.username);
    store.commit("ADD_MESSAGE_MUTATION", data);
}),
    socket.on('room added', function (data) {
        console.log(data);
        store.dispatch("GET_ROOMS", data);
    })

export default store;
