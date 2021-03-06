
angular.module('bankAppOnline', ['ngSanitize',
    'ngAnimate',
    'ngQuantum'])
  .controller('CustomerCtrl', function ($scope) {
    $scope.step = 1;

    $scope.advance = function () {
      $scope.step++;
    }
     $scope.previous = function () {
     	
      $scope.step--;
    }
    
  })
  .controller('firstformCtrl', function ($scope, Customer) {

       $scope.cities = ['Hyderabad','Vizag','Vijayawada','Bangalore','Delhi','Mumbai','Chennai','Noida','Pune','Tirupathi'];
       $scope.professions = ['Doctor','Teacher','Engineer','Lawyer'];
       $scope.customer = Customer.get();
     $scope.reset = function() {

      
        $scope.firstform.$setPristine();
           var restore = {
            "firstname": "",
            "lastname": "",
            "age": "",
            "city": "",
            "profession": "",
            "mobile": ""
        };
        angular.extend($scope.customer, restore);
   
    }  
  })
  .controller('secondformCtrl', function ($scope, Customer) {
      $scope.designations = ['ChairmanVice Chairman',
'Chairman cum Managing Director',
'Managing Director',
'Sr. Vice president',
'Vice President',
'General Manager',
'Joint General Manager',
'Deputy General Manager',
'Asst. General Manager',
'Chief Manager',
'Sr. Manager',
'Manager',
'Joint Manager',
'Deputy Manager',
'Asst. Manager',
'Sr. Officer',
'Officer',
'Jr. Officer',
'Sr. Associate',
'Associate',
'Jr. Associate',
'Assistant' ];
    $scope.customer = Customer.get();
     $scope.reset = function() {
       
        $scope.secondform.$setPristine();
             var restore = {
            "pan":"",
		     "income":"",	
		     "company":"",
		     "designation":"",
		     "address":"",
		     "pin":""
        };
        angular.extend($scope.customer, restore);
   
    }  
  })
    .controller('thirdformCtrl', function ($scope,$http,Customer,$alert) {

    $scope.accounts = ['Savings','Basic checking','Interest-bearing','Market-Deposits','Certificates of deposit'];
    $scope.customer = Customer.get();
      $scope.reset = function() {
        $scope.thirdform.$setPristine();
           var restore = {
           "accountType":""	,
     "fdCheck":false,
     "creditcardCheck":false
        };
        angular.extend($scope.customer, restore);
   
    };
        $scope.sendPost = function() {
           var data =  $scope.customer;
            console.log($scope.customer);
            $http.post("/users", data).success(function(data, status) {
                $scope.status = status;

                    $alert('form saved successfully.','Oley!', 'success', 'top-right');

                console.log($scope.status);
            })
                .error(function(response, status){
                    //$alert(options)
                    //for using more option create object
                    $alert({title:'Error', content:'An error occured',placement:'top-right',alertType:'danger'});
                })
        };

    })
  .factory('Customer', function () {
    var customer = {
        "firstname": "",
        "lastname": "",
        "age": "",
        "city": "",
        "profession": "",
        "mobile": "",
        "accountType": "",
        "fdCheck": false,
        "creditcardCheck": false,
        "pan": "",
        "income": "",
        "company": "",
        "designation": "",
        "address": "",
        "pin": ""
    };

    return {
      get: function () {
        return customer;
      }
    }
  })
  .controller('DebugCtrl', function ($scope, Customer) {
    $scope.customer = Customer.get();
  });// Empty JS for your own code to be here