<template>
    <div class="container chat">
        <h2 class="text-primary text-center">Chat Room  </h2>
        
        <div class="card">
            <div class="card-body">
                <p class="text-secondary nomessages" v-if="messages.length == 0">
                    [No messages yet!]
                </p>
                <div class="messages" v-chat-scroll="{always: false, smooth: true}">
                    <div v-for="message in messages" :key="message.id">
                        <span class="text-info">[{{ message.name }}]: </span>
                        <span>{{message.message}}</span>
                        <span class="text-secondary time">{{message.timestamp}}</span>
                    </div>
                </div>
            </div>
            <div class="card-action">
                <CreateMessage :name="Chatname" :index="this.$route.params.id"/>
            </div>
        </div>
    </div>
</template>

<script>
import CreateMessage from '@/components/Chat/CreateMessage.vue';
import fb from '@/firebase/init.js';
import firebase from 'firebase';
import moment from 'moment';
import Chats from './Chats.vue';
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        CreateMessage
    },
    
    data() {
        const currentUser = firebase.auth().currentUser;
        if(currentUser){
            return{
                Chatname: currentUser.email,
                messages: []
            }

        }else{
            return{
                Chatname: "no user",
                messages: []
            }

        }
    },
    created() {
        //var mslist = ['messages','GG'];
        let ref = fb.collection(this.$route.params.id).orderBy('timestamp');
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type = 'added') {
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timestamp: moment(doc.data().timestamp).format('LTS')
                    });
                }
            });
        });
    }
}
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 0px;
}
.chat h5{
    margin-top: 0px;
    margin-bottom: 40px;
}
.chat span{
    font-size: 1.2em;
}
.chat .time{
    display: block;
    font-size: 0.7em;
}
.messages{
    max-height: 300px;
    overflow: auto;
}
</style>