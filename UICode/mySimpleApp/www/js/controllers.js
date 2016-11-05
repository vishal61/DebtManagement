angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopover) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.salesperson = {};
  $scope.salesperson.mode = "add"
  $scope.customer = {};
  $scope.customer.mode = "add"
  $scope.area = {};
  $scope.area.mode = "add"
  $scope.isExpanded = false;
  $scope.hasHeaderFabLeft = false;
  $scope.hasHeaderFabRight = false;
  $scope.customerList = [{"name": "Ajit Panada", "area": "Area2", "landmark": "Powai52"},
                        {"name": "Pramod Panda", "area": "Area2", "landmark": "Powai52"},
                        {"name": "Ajay Panada", "area": "Area2", "landmark": "Powai52"},
                        {"name": "Nilesh Panda", "area": "Area1", "landmark": "Kanjur2"},
                        {"name": "Vishveya Gawde", "area": "Area1", "landmark": "Chandivali"}];
  $scope.customerDueList = [
      {name: 'Ajit', date: '2016-10-08'},
      {name: 'Ajay', date: '2016-10-10'},
      {name: 'Nilesh', date: '2016-10-08'},
      {name: 'Pramod', date: '2016-10-08'},
      {name: 'Ajit', date: '2016-10-08'}
    ];

  $scope.selectedUser = {"name": "", "area": "", "landmark": ""};
  $scope.dueInfoForUser ={
   Name: "",
   Balance: ""         
        }

  var navIcons = document.getElementsByClassName('ion-navicon');
  for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }


    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    //$scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}) 

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('LoginCtrl', function($scope, $stateParams, $state) {
  $scope.loggedIn = function(){
   
    console.log("LoggedIn controller gets called..." + JSON.stringify($scope.loginData, null, 6) )
    if($scope.loginData.username == 'vishveya' && $scope.loginData.password ==='123123'){
      $state.go('app.playlists')
    }
    $scope.loginData = {};
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
  }
})

.controller('AdminCtrl', function($scope, $stateParams, $state, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    console.log("AdminCtrl controller gets called...")
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
           selector: '.animate-fade-slide-in .item'
        });
    }, 200);
    ionicMaterialInk.displayEffect();
})

.controller('CashCtrl', function($scope, $stateParams, $state) {
    $scope.grpByDueList = _.groupBy($scope.customerDueList, 'date');
    console.log("CashCtrl controller gets called..." + JSON.stringify($scope.grpByDueList))

    $scope.getDate = function(dt){
        return new Date(dt).toLocaleDateString('en-GB', {  
            day : 'numeric',
            month : 'short',
            year : 'numeric'
    }).split(' ').join('-');
    }

    $scope.cashDueInfoEntry = function(name, balance){  
        $scope.dueInfoForUser.Name = name;
        $scope.dueInfoForUser.Balance = balance;
        console.log(JSON.stringify($scope.dueInfoForUser));
    }
})

.controller('AssetCtrl', function($scope, $stateParams, $state) {
	console.log("AssetCtrl controller gets called...")
})

.controller('CustomerCtrl', function($scope, $stateParams, $state) {
	console.log("CustomerCtrl controller gets called...")
    setTimeout(function(){console.log(JSON.stringify($scope.selectedUser));},2000)
    
     $scope.customer.mode = "add";

    $scope.changeMode = function(mode){
        $scope.customer.mode = mode;
        console.log("changeMode "+ JSON.stringify($scope.customer));
        
    }

    $scope.customerDueInfo = function(){
        
    }
})

.controller('SalesmanCtrl', function($scope, $stateParams, $state) {
	console.log("SalesmanCtrl controller gets called...")
  $scope.salesperson.mode = "add";

  $scope.changeMode = function(mode){
    $scope.salesperson.mode = mode;
    console.log("changeMode "+ JSON.stringify($scope.salesperson));
  }
})


.controller('AreaCtrl', function($scope, $stateParams, $state) {
	console.log("AreaCtrl controller gets called...")
  $scope.area.mode = "add";

  $scope.changeMode = function(mode){
    $scope.area.mode = mode;
    console.log("changeMode "+ JSON.stringify($scope.area));
  }
})


.controller('searchCtrl', function($scope, $stateParams, $state) {
    $scope.searchEmail = {"name": "", "area": "", "landmark": ""};

    $scope.selectedFilteredUser = function(obj){
        $scope.selectedUser = {"name": obj.name, "area": obj.area, "landmark": obj.landmark}
        console.log(JSON.stringify($scope.selectedUser));
    }
});

