<template>
    <div>
      <p>Website</p>
      <p>{{FUCK}}</p>
    </div>
</template>

<script>
import firebase from 'firebase';
import st from '@/store/index.js';
//export const userRef = firebaseApp .database().ref().child('user');
export default{
  data(){
//    return {
 //     FUCK: fb.database().ref('KK');
     //FUCK 
     const currentUser = firebase.auth().currentUser;
     if(currentUser){
          return{
            FUCK: currentUser.email
          }

     }else{
        return{
          FUCK: "no user"
        }

     }
  }
}
//this.FUCK = "hhhhhhhhh";
</script>