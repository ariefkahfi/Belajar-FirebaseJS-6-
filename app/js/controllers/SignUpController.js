import {app} from "../AngularApp";
import {FirebaseCRUD} from "../FirebaseApp";

app.controller('signUpController',($scope)=>{

    let fbCRUD = new FirebaseCRUD();


    $scope.clearFields = ()=>{
        $scope.username = "";
        $scope.password = "";
    };

    $scope.signUpButton = ()=>{
        let modelUsername = $scope.username;
        let modelPassword = $scope.password;

        if(modelPassword === '' || modelUsername === ''
        || modelPassword === undefined || modelPassword === undefined){
           alert('Form still empty');
        }else{
           fbCRUD.getDataUserByUsername(modelUsername,(data)=>{
              if(data){
                  alert('Akun ini sudah ada');
                  $scope.clearFields();
              }else{
                  $scope.doSignUp(modelUsername,modelPassword);
              }
           });
        }
    };



    $scope.doSignUp = (modelUsername,modelPassword)=>{
        fbCRUD.postDataUser(modelUsername,modelPassword,(data)=>{
            console.log(data);
            $scope.clearFields();
        });
    }
});