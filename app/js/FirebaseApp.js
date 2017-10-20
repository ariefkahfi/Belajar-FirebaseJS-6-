import * as fb from './FirebaseConfig';

let firebase = fb.fbConfig.database();

class FirebaseCRUD {
    constructor(){
        this.firebaseCRUD = firebase;
    }

    postDataUser(username,mPass,callback){
        this.firebaseCRUD.ref(`/users/${username}`).set({
           password :  mPass
        },(err)=>{
           if(err){
             callback('Error : ' + err);
           }else{
             callback('Sign up success');
           }
        });
    }

    getDataUserByUsernameAndPassword(modelUsername,modelPassword,callback){
        let validLogin = false;

        this.firebaseCRUD.ref('/users').once('value',(dataSnapshot)=>{
             if(dataSnapshot.child(modelUsername).key === modelUsername
             && dataSnapshot.child(modelUsername).child('password').val() === modelPassword){
                validLogin = true;
             }
        }).then((success)=>{
            callback(validLogin);
        },(error)=>{

        });
    }
    getDataUserByUsername(username, callback){
        let exists =  false;
        this.firebaseCRUD.ref('/users').once('value',(dataSnapshot)=>{
            if(dataSnapshot.hasChild(username)){
                exists = true;
            }
        }).then((success)=>{
            callback(exists);
        },(error)=>{

        });
    }

    postDataChat(message,senderName){
       let msg = this.firebaseCRUD.ref('/chats');
       let keyOfMsg = msg.push();
       keyOfMsg.set({
           'sender-name':senderName,
           'message' : message
       },(res)=>{
           if(res){
               console.log('Error');
           }else{
               console.log('data sent');
           }
       });
    }

    getDataChat(callbackData){
        this.firebaseCRUD.ref('/chats').on('value',(dataSnapshot)=>{
           let listOfMsgs = [];
           dataSnapshot.forEach((childs)=>{
               // console.log(childs.child('message').val());
               // console.log(childs.child('sender-name').val());
               listOfMsgs.push({
                  message:childs.child('message').val(),
                  sender: childs.child('sender-name').val()
               });
           });
           callbackData(listOfMsgs);
        });
    }
}

export {FirebaseCRUD}