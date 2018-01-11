var module = angular.module('catalogs.module');

module.controller('CatalogsIndexController', function($scope) {
	
		$scope.message = "Hello AngularJS";
		
		$scope.produtos = [];
		
		$scope.user = {
				name:"Deivid",
				access:"1"
			};
		
		$scope.adicionarProduto = function(produto){				
			$scope.produtos.push(angular.copy(produto));
			delete $scope.produto;
		};
		
		$scope.apagarProduto = function(produto){
			var index = $scope.produtos.indexOf(produto);
			$scope.produtos.splice(index, 1);
		};
	
		$scope.$watchCollection('produtos',function() {
		  // Função disparada sempre que o objeto $scope.produtos sofrer alterações
		  $scope.total = 0;  
		  angular.forEach($scope.produtos, function(value, key) {
			  $scope.total += value.quantidade * parseFloat(value.valor.replace(',','.'));
		  })
		});
	
		$scope.checkQuestions = function() {
			//Função para verificar se o objeto $scope.produtos esta populado
			 if ($scope.produtos.length > 0) {		
			   return true;
			  }
			  else {
			   return false;
			  }
			};		
		
		$scope.hasUserLog = function() {
			if($scope.user.name){
				return true;
			}
			return false;
		}
		
		$scope.isAdmin = function() {
			if($scope.user.name){
				if($scope.user.access == '2'){
					return true;
				}
			}
			return false;
		}
		
		$scope.verfAccess = function(numAccess) {
			if(numAccess == 2){
				return true;
			}
			return false;
		}
		
		$scope.verfSenha = function(senha, checkSenha){
			if(senha == checkSenha && senha.length > 5){
				return true;
			}
			return false;
		}
		
		$scope.verfLenght = function(senha){
			if(senha){
				if(senha.length > 5){
					return true;
				}
			}else if(!senha){
				return true;
			}
			return false;
		}
		
		/*
		$scope.login = function(usuario, senha){
			$scope.user.name = usuario;
			$scope.user.access = '1';			
		}*/
		
		
		
		
});
