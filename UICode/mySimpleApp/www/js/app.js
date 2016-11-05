// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    ionic.Platform.isFullScreen = true;
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

.state('app.userInfo', {
    url: '/userInfo',
    views: {
      'menuContent': {
        templateUrl: 'templates/user/userInfo.html',
        controller: 'CustomerCtrl'
      }
    }
  })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
	
	.state('app.admin', {
      url: '/admin',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/admin.html',
          controller: 'AdminCtrl'
        }
      }
    })

    .state('app.customeradd', {
      url: '/createCustomer',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/addCustomer.html',
          controller: 'CustomerCtrl'
        }
      }
    })

    .state('app.customerDueInfo', {
          url: '/customerDueInfo',
          views: {
            'menuContent': {
              templateUrl: 'templates/admin/customerDueInfo.html',
              controller: 'CustomerCtrl'
            }
          }
        })
    .state('app.salesmanadd', {
      url: '/createSalesman',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/addSalesman.html',
          controller: 'SalesmanCtrl'
        }
      }
    })

  .state('app.area', {
      url: '/createArea',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/addArea.html',
          controller: 'AreaCtrl'
        }
      }
    })

  .state('app.customerCashDueList', {
      url: '/dueCashList',
      views: {
        'menuContent': {
          templateUrl: 'templates/cash/cashDueList.html',
          controller: 'CashCtrl'
        }
      }
    })

	.state('app.cash', {
      url: '/cash',
      views: {
        'menuContent': {
          templateUrl: 'templates/cashMonitor.html',
          controller: 'CashCtrl'
        }
      }
    })
	
	.state('app.asset', {
      url: '/asset',
      views: {
        'menuContent': {
          templateUrl: 'templates/assetMonitor.html',
          controller: 'AssetCtrl'
        }
      }
    })
	
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
