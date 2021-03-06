angular.module('agbotApp')
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider.state('vision', {
			url: '/vision',
			templateUrl: '/html/vision',
			controller: 'visionCtrl'
		});
	}])
	.controller('visionCtrl', ['$scope', '$element', function($scope, $element) {
		$scope.graph = {
			nodes: [
				{'id': 'PKU School Network', 'group': 5, 'size': 50, 'ips': []},
				{'id': 'Switch 1', 'group': 2, 'size': 40, 'ips': []},
				{'id': 'Switch 2', 'group': 2, 'size': 40, 'ips': []},
				{'id': '10 Server', 'group': 2, 'size': 40, 'ips': ['192.168.100.9', '162.105.30.73']},
				{'id': '11 Server', 'group': 2, 'size': 40, 'ips': ['192.168.100.11', '162.105.30.*']},
				{'id': 'HOST-192.168.100.1', 'group': 10, 'size': 20},
				{'id': 'HOST-192.168.100.2', 'group': 10, 'size': 20},
				{'id': 'HOST-192.168.100.3', 'group': 10, 'size': 20},
				{'id': 'HOST-192.168.100.4', 'group': 10, 'size': 20},
				{'id': 'HOST-192.168.100.5', 'group': 10, 'size': 20},
				{'id': 'HOST-192.168.100.6', 'group': 10, 'size': 20}
			],
			links: [
				{'source': 'PKU School Network', 'target': 'Switch 1', value: 1},
				{'source': 'Switch 1', 'target': 'Switch 2', value: 1},
				{'source': 'Switch 1', 'target': '10 Server', value: 1},
				{'source': 'Switch 1', 'target': '11 Server', value: 1},
				{'source': '11 Server', 'target': 'HOST-192.168.100.1', value: 1},
				{'source': '11 Server', 'target': 'HOST-192.168.100.2', value: 1},
				{'source': '11 Server', 'target': 'HOST-192.168.100.3', value: 1},
				{'source': '11 Server', 'target': 'HOST-192.168.100.4', value: 1},
				{'source': '11 Server', 'target': 'HOST-192.168.100.5', value: 1},
				{'source': '11 Server', 'target': 'HOST-192.168.100.6', value: 1},
			]
		}
		
		$scope.options = {
			distance: 200,
			charge  : -500
		};
		
	}]);