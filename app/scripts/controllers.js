angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$window) {
		
		$scope.signuphide = true;
		$scope.initialshow = true;
		$scope.facebooksigin = true;
		
		$scope.signup = function(){
			$scope.signupshow = true;
			$scope.signinshow = false;
		}
		$scope.signupp = function(){
			$scope.signuphide = true;
			$scope.initialshow = false;
			$scope.signinshow = true;
			$scope.signinformfield = true;
		}
		$scope.facebooksignupblock = function (){
			$scope.facebooksignup = true;
			$scope.signuphide = true;
			$scope.initialshow = false;
		}
		
		$scope.ebay = function() {
			$window.open('http://www.ebay.com', '_newtab');
		}
		$scope.national = function() {
			$window.open('http://myjewelrycenter.com', '_newtab');
		}
		$scope.dash = function() {
			$window.location.href = '#/tab/dash';		
		}
		$scope.master = {};
		$scope.submitMyForm = function(user) {	
		$scope.master = {};
		$scope.master = angular.copy(user);
		$window.location.href = '#/tab/dash';		
		}
		$scope.pushNotification = { checked: false };
		
		$scope.push = function(){
		if($scope.pushNotification.checked == true)
		{
		   $scope.tel = true;
		}
		else {
		 $scope.tel = false;
		 
		}
		}
	   /* $scope.$watch('pushNotification.checked', function(newValue, oldValue) {
    console.log('Push Notification Change: ' + newValue);
  });*/
		
})

.controller('ChatsCtrl', function($scope, Chats,$http) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
  $http.get('data.json').success(function(store) {
      $scope.store = store;
    });

	
	
  /*$scope.groups = [];
  for (var i=0; i<3; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }*/
  
  $scope.toggleGroup = function(store) {
    if ($scope.isGroupShown(store)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = store;
	 }
  };
  $scope.isGroupShown = function(store) {
    return $scope.shownGroup === store;
	console.log($scope.shownGroup);
  };
	
	
	
	
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,$http) {
  $scope.chat = Chats.get($stateParams.chatId);
  $http.get('data.json').success(function(sites) {
      $scope.site = sites;
    });
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends,$window,$ionicModal) {
  $scope.friend = Friends.get($stateParams.friendId);
  
  $scope.visitwebsite = function(){

	  $window.open('http://www.cashamerica.com', '_newtab');
    
  };
  
  $scope.contact = {
    name: 'Mittens Cat',
    info: 'Tap anywhere on the card to open the modal'
  }

  $ionicModal.fromTemplateUrl('contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
  
  
})

.controller('AccountCtrl', function($scope,$http) {

  $http.get('data.json').success(function(stores) {
      $scope.store = stores;
      console.log(stores);
      
    });
});

/*.controller('AccountDetailCtrl', function($scope, $stateParams,account) {
  $scope.account = account.get($stateParams.accountId);
});*/



