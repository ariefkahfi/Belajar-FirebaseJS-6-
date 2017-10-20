import {app} from "../AngularApp";
import {FirebaseCRUD} from "../FirebaseApp";

app.controller('chatController',($scope,$window)=>{



    let fbCRUD = new FirebaseCRUD();

    $('#personName').text('~');


    $scope.loginButton = ()=>{
        $('#dialog-container').css('display','block');
    };

    $scope.loadData = ()=>{
       fbCRUD.getDataChat((chats)=>{
         console.log(chats);

         $('#chat-output').empty();
         chats.forEach((items)=>{
            $('#chat-output').append(
              `
                <p>
                    <span style="margin-left : 10px; margin-right: 10px; color : white; font-weight: bold">${items.sender}</span>
                    ${items.message}
                </p>
              `
            );
         });
       });
    };

    $scope.loadData();

    $scope.sendMessage = ()=>{
        let message = $('#messageBox').val();
        let personName = $('#personName').text();
        if(message === '' || message === undefined || personName === '~' || personName === undefined){
           console.log('empty fields');
        }else{
            fbCRUD.postDataChat(message,personName);
        }
    }

    $scope.clear = ()=>{
        $scope.loginUsername = "";
        $scope.loginPassword = "";
    }

    $scope.doLogin = ()=>{
        let loginUsername = $scope.loginUsername;
        let loginPassword= $scope.loginPassword;
        if(loginUsername === '' || loginUsername === undefined
        || loginPassword === '' || loginPassword === undefined){
           alert('there are empty fields in form');
        }else {

                     fbCRUD.getDataUserByUsernameAndPassword(loginUsername,loginPassword,(dataValid)=>{
                        if(dataValid){
                            $('#dialog-container').css('display','none');
                            $('#personName').text(loginUsername);
                            console.log('login sukses');
                        }else{
                            alert('wrong username or password');
                            console.log('else ...');
                        }
                     });
        }
    };

    $window.onclick = (event)=>{
        if(event.target.id === 'dialog-container'){
            $('#dialog-container').css('display','none');
        }
    };
});